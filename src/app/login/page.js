"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  // Normal Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);
    else {
      console.log("Logged in:", data);
      router.push("/dashboard");
    }
  };

  // Google OAuth login
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/dashboard`,
      },
    });

    if (error) {
      console.error("Google login error:", error.message);
      setError(error.message);
    } else {
      console.log("Redirecting to Google:", data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleLogin}
        className="bg-card p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Email/Password login */}
        <input
          className="w-full mb-4 p-3 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full mb-6 p-3 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-accent text-white p-3 rounded hover:bg-accent/90 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}
