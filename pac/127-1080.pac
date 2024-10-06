const proxy = "SOCKS5 127.0.0.1:1080";
const ranges = [
    [convert_addr("10.0.0.0"), convert_addr("10.255.255.255"), "gcloud"],
    [convert_addr("100.64.0.0"), convert_addr("100.127.255.255"), "tailscale"],
    [convert_addr("172.16.0.0"), convert_addr("172.31.255.255"), "aliyun"],
];

function FindProxyForURL(url, host) {
  const ip = dnsResolve(host);
  if (ip === null) {
    alert(`${host} does not resolve locally.`);
    return proxy;
  }

  const addr = convert_addr(ip);
  for (const [begin, end, name] of ranges) {
    if (addr >= begin && addr <= end) {
      alert(`${host} => ${ip} (= ${addr}) in ${name}.`);
      return proxy;
    }
  }

  alert(`${host} => ${ip} (= ${addr}), direct.`);
  return "DIRECT";
}
