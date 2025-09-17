"use client";

import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../utils/Logo";
import RunButton from "../utils/Run";
import SubmitButton from "../utils/Submit";
import { useEffect, useState } from "react";
import UserMenu from "../utils/ProfileDropdown";
import { supabase } from "@/lib/supabaseClient";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState("cpp");

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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/problems">
              <Button variant="ghost" size="sm" className="p-2 cursor-pointer">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Logo />
          </div>
          <div className="flex items-center space-x-3">
            {/* <RunButton /> */}
            <SubmitButton />
            <div className="p-2 border-b border-border flex justify-end">
              <LanguageSelector onChange={setLang} defaultValue="cpp" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </nav>
  );
}
