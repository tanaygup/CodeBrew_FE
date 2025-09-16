// src/components/problemset/ProblemsTable.tsx
"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProblemsTable({ problems }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30 border-b border-border">
              <tr>
                <th className="text-left p-4 font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                  Title
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                  Difficulty
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                  Acceptance
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                  Tags
                </th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem, index) => (
                <tr
                  key={problem.id}
                  className={`border-b border-border hover:bg-muted/20 transition-colors duration-150 ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/10"
                  }`}
                >
                  <td className="p-4">
                    <Link
                      href={`/problems/${problem.id}`}
                      className="font-medium text-foreground hover:text-primary transition-colors duration-150"
                    >
                      {problem.id}. {problem.title}
                    </Link>
                  </td>
                  <td className="p-4">
                    <Badge className={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </Badge>
                  </td>
                  <td className="p-4 text-muted-foreground font-medium">
                    {problem.acceptanceRate}%
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {problem.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
