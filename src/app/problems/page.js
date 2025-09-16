"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProblemsetNavbar from "@/components/problemset/Navbar";
import Sidebar from "@/components/problemset/Sidebar";
import ProblemsPage from "@/components/problemset/ProblemsPage";

export default function ProblemsetPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    // optional: listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <ProblemsetNavbar user={user} />
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content on the right */}
        <main className="flex-1 px-6 py-4">
          <ProblemsPage />
        </main>
      </div>
    </div>
  );
}
