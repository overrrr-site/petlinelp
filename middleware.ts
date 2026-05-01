// Vercel Edge Middleware: Basic auth for /doutaku/* paths.
//
// Configure these env vars in Vercel project settings:
//   BASIC_AUTH_USER  (default: "admin")
//   BASIC_AUTH_PASS  (default: "doutaku2026")

export const config = {
  matcher: "/((?!_vercel|favicon.ico|robots.txt).*)",
};

export default function middleware(req: Request) {
  const url = new URL(req.url);

  // Only protect /doutaku and its assets. Other paths pass through.
  if (!url.pathname.startsWith("/doutaku") && url.pathname !== "/") {
    // Static assets (images, _astro, etc.) are at the deploy root because
    // vercel.json rewrites /doutaku/(.*) -> /$1. Once the user has signed in
    // for /doutaku/, the browser sends the same auth header to those assets,
    // so we should validate them too.
  }

  const user = (globalThis as any).process?.env?.BASIC_AUTH_USER ?? "admin";
  const pass = (globalThis as any).process?.env?.BASIC_AUTH_PASS ?? "doutaku2026";
  const expected = "Basic " + btoa(`${user}:${pass}`);

  const auth = req.headers.get("authorization");
  if (auth === expected) {
    return; // continue
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Doutaku LP", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
