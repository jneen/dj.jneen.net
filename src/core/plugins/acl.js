const { flatten } = require('lodash');
const createDebug = require('debug');
const eachSeries = require('p-each-series');
const defaultRoles = require('../config/defaultRoles');

const debug = createDebug('uwave:acl');

async function getSubRoles(role) {
  if (role.roles.length === 0) {
    return [role];
  }
  if (!(role.roles[0] instanceof role.constructor)) {
    role.populate('roles');
    await role.execPopulate();
  }

  const roles = await Promise.all(role.roles.map(getSubRoles));
  roles.unshift(role);
  return flatten(roles);
}

async function getAllUserRoles(user) {
  if (user.roles.length === 0) {
    return [];
  }

  user.populate('roles');
  await user.execPopulate('roles');
  const roles = await Promise.all(user.roles.map(getSubRoles));
  return flatten(roles);
}

const getRoleName = role => (
  typeof role === 'string' ? role : role.id
);

const Acl = exports.Acl = class Acl {
  superRole = '*';

  constructor(uw, opts) {
    this.uw = uw;

    if (opts.defaultRoles !== false) {
      this.maybeAddDefaultRoles();
    }
  }

  get AclRole() {
    return this.uw.model('AclRole');
  }

  async maybeAddDefaultRoles() {
    const existingRoles = await this.AclRole.count();
    debug('existing roles', existingRoles);
    if (existingRoles === 0) {
      debug('no roles found, adding defaults');
      const roleNames = Object.keys(defaultRoles);
      await eachSeries(roleNames, roleName => this.createRole(roleName, defaultRoles[roleName]));
    }
  }

  async getAclRoles(names, options = {}) {
    const existingRoles = await this.AclRole.find({ _id: { $in: names } });
    const newNames = names.filter(name => (
      !existingRoles.some(role => role.id === name)
    ));
    if (options.create && newNames.length > 0) {
      const newRoles = await this.AclRole.create(newNames.map(name => ({ _id: name })));
      existingRoles.push(...newRoles);
    }
    return existingRoles;
  }

  getAclUser(user) {
    return this.uw.getUser(user);
  }

  async getAllRoles() {
    const roles = await this.AclRole.find().lean();
    return roles.reduce((map, role) => Object.assign(map, {
      [role._id]: role.roles,
    }), {});
  }

  async createRole(name, permissions) {
    const roles = await this.getAclRoles(permissions, { create: true });
    await this.AclRole.findByIdAndUpdate(
      name,
      { roles },
      { upsert: true },
    );
  }

  async deleteRole(name) {
    const role = await this.AclRole.findById(name);
    if (role) {
      await role.remove();
    }
  }

  async allow(user, roleNames) {
    const aclRoles = await this.getAclRoles(roleNames);
    const aclUser = await this.getAclUser(user);

    aclUser.roles.push(...aclRoles);

    await aclUser.save();

    this.uw.publish('acl:allow', {
      userID: aclUser.id,
      roles: aclRoles.map(role => role.id),
    });
  }

  async disallow(user, roleNames) {
    const aclRoles = await this.getAclRoles(roleNames);
    const aclUser = await this.getAclUser(user);
    const shouldRemove = roleName => aclRoles.some(remove => remove.id === roleName);
    aclUser.roles = aclUser.roles.filter(role => !shouldRemove(getRoleName(role)));
    await aclUser.save();

    this.uw.publish('acl:disallow', {
      userID: aclUser.id,
      roles: aclRoles.map(role => role.id),
    });
  }

  async getAllPermissions(user) {
    const aclUser = await this.getAclUser(user);
    const roles = await getAllUserRoles(aclUser);
    return roles.map(role => role.id);
  }

  async isAllowed(user, permission) {
    const role = await this.AclRole.findById(permission);
    if (!role) {
      return false;
    }

    const aclUser = await this.getAclUser(user);
    const userRoles = await getAllUserRoles(aclUser);
    const roleIds = userRoles.map(userRole => userRole.id);

    debug('role ids', roleIds, 'check', aclUser, role.id, 'super', this.superRole);

    return roleIds.includes(role.id) || roleIds.includes(this.superRole);
  }
}

module.exports = function acl(opts = {}) {
  return (uw) => {
    uw.acl = new Acl(uw, opts);
  };
}
