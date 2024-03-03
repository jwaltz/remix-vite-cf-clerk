import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <SignedIn>
        <h1>Index route</h1>
        <UserButton />
        <p>You are signed in!</p>
        <Link to="/protected">Go to protected route</Link>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}