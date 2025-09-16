"use client";
import Link from "next/link";
import { BookOpen, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProgressCard from "../utils/ProgressCard";

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // For now, you can hardcode these or pass as props
  const totalSolved = 42;
  const totalProblems = 200;

  return (
    <aside
      className={`${sidebarCollapsed ? "w-16" : "w-64"} 
        bg-sidebar border-r border-sidebar-border transition-all duration-300 min-h-screen relative flex flex-col`}
    >
      {/* Collapse/Expand Button (relative to sidebar) */}
      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        className="absolute top-4 -right-3 cursor-pointer bg-sidebar border border-sidebar-border rounded-full p-1 shadow hover:bg-sidebar-accent transition-colors z-10"
      >
        {sidebarCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
      <div className="p-4">
        {!sidebarCollapsed && (
          <div className="mb-6">
            <ProgressCard
              totalSolved={totalSolved}
              totalProblems={totalProblems}
            />
          </div>
        )}

        <nav className="space-y-1">
          {/* Dashboard */}
          <Link
            href="/problems"
            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            {!sidebarCollapsed && <span>Dashboard</span>}
          </Link>

          {/* Contest */}
          <Link
            href="/problems"
            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <Trophy className="h-5 w-5" />
            {!sidebarCollapsed && <span>Contests</span>}
          </Link>
        </nav>
      </div>
    </aside>
  );
}
