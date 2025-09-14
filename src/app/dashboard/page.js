"use client";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Await the session promise
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        console.log("No active session");
        return;
      }

      const token = session.access_token;
      console.log("Token:", token);

      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Failed to fetch:", res.status, res.statusText);
        return;
      }

      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return <div>{user.message}</div>;
}
