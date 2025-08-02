export default function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  console.log("📥 Visitor hit the route");
  console.log("🌐 Visitor IP:", ip);

  res.redirect("/login"); // <-- local redirect, NOT example.com
}
