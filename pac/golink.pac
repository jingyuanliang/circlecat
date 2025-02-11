const proxy = "PROXY goto.ccat.dev:4686";

function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    alert(`${host} is resolvable.`);
    return "DIRECT";
  }

  if (isPlainHostName(host)) {
    alert(`${host} is plain.`);
    return proxy;
  }

  return "DIRECT";
}
