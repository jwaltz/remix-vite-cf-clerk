import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId: clerkId } = await getAuth(args);

  if (!clerkId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }
}

export default function Protected() {
  return <h1>Protected Route</h1>
}