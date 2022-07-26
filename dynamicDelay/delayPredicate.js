function customPredicate(config) {
  if (
    config.request.path === "/messagewithdelay" &&
    config.request.method === "GET" &&
    config.request.query.delay
  ) {
    return true;
  } else {
    return false;
  }
}
