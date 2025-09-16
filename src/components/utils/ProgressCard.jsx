"use client";
import React from "react";

export default function ProgressCard({ totalSolved, totalProblems }) {
  const progress = totalProblems > 0 ? (totalSolved / totalProblems) * 100 : 0;

  return (
    <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-card-foreground">
          Your Progress
        </span>
        <span className="text-sm font-medium text-primary">
          {totalSolved}/{totalProblems}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        {Math.round(progress)}% Complete
      </div>
    </div>
  );
}
