class MOTD {
  constructor(uw) {
    this.uw = uw;
  }

  get() {
    return this.uw.redis.get('motd');
  }

  set(motd) {
    return this.uw.redis.set('motd', motd);
  }
}

module.exports = function motdPlugin() {
  return (uw) => {
    uw.motd = new MOTD(uw);
  };
}
