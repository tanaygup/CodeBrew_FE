// src/components/layout/Navbar.jsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import UserMenu from "@/components/layout/ProfileDropdown";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        const user = session.user;

        // If avatar is missing but Google provides it
        if (!user.user_metadata?.avatar_url && user.identities?.length) {
          const googleIdentity = user.identities.find(
            (id) => id.provider === "google"
          );

          if (googleIdentity?.identity_data?.avatar_url) {
            // Update metadata in Supabase
            await supabase.auth.updateUser({
              data: {
                avatar_url: googleIdentity.identity_data.avatar_url,
                full_name: googleIdentity.identity_data.full_name,
              },
            });

            const { data: refreshedSession } = await supabase.auth.getSession();
            setUser(refreshedSession.session.user);
          }
        }

        setUser(session.user);
      }
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <span className="font-bold text-xl text-foreground">
                CodeBrewer
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/problems"
              className="text-muted-foreground hover:text-accent transition-colors font-medium"
            >
              Problems
            </Link>
            <Link
              href="/leaderboard"
              className="text-muted-foreground hover:text-accent transition-colors font-medium"
            >
              Leaderboard
            </Link>
            {user ? (
              <div className="flex items-center gap-3">
                <UserMenu user={user} />
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  Login
                </Link>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
