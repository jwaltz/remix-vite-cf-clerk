import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { LoaderFunction } from "@remix-run/cloudflare";

export const loader: LoaderFunction = args => {
  return rootAuthLoader(args, ({ request }) => {
    console.log("Env", args.context.cloudflare.env);
    console.log("Request.auth", request.auth);

    return {};
  }, {
    secretKey: args.context.cloudflare.env.CLERK_SECRET_KEY,
    publishableKey: args.context.cloudflare.env.CLERK_PUBLISHABLE_KEY,
  }
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);
