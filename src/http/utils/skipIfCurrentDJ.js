function getCurrentDJ(uw) {
  return uw.redis.get('booth:currentDJ');
}

module.exports = async function skipIfCurrentDJ(uw, userID) {
  const currentDJ = await getCurrentDJ(uw);
  if (userID === currentDJ) {
    await uw.advance({ remove: true });
  }
}
