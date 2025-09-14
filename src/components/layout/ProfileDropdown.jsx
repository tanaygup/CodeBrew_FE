"use client";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function UserMenu({ user }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2"
      >
        <img
          src={user.user_metadata?.avatar_url}
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden border">
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Settings
          </Link>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.reload();
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
