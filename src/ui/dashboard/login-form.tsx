'use client';
import { authenticate } from "@/lib/actions";
import { useActionState } from "react";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  return (
    <form action={formAction}>
      <h1> Please log in to continue. </h1>
      <div>
        <label>Email</label>
        <input id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required />
      </div>
      <div>
        <label>Password</label>
        <input id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          minLength={6} />
      </div>
      <button aria-disabled={isPending}>
        {isPending ? 'ログイン中' : 'ログインする'}
      </button>
      <div>{errorMessage}</div>
    </form>
  );
}