"use client";

import SearchBar from "@/components/problemset/SearchBar";
import UserMenu from "@/components/utils/ProfileDropdown";
import Logo from "../utils/Logo";
import Link from "next/link";

export default function ProblemsetNavbar({ user }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-2 flex items-center justify-between">
      {/* Left: Logo */}
      <Logo />

      {/* Center: Search */}
      <div className="flex-1 flex justify-center px-4">
        <SearchBar />
      </div>

      {/* Right: User Profile */}
      <div className="flex items-center">
        <Link
          href="/problems/contribute"
          className="mr-4 text-sm font-medium text-blue-600 hover:underline"
        >
          Contribute a Problem
        </Link>
        <UserMenu user={user} />
      </div>
    </nav>
  );
}
