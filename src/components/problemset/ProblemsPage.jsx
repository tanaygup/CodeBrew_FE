// src/app/problemset/page.tsx
"use client";

import { useEffect, useState } from "react";
import Filters from "@/components/problemset/Filters";
import ProblemsTable from "@/components/problemset/ProblemTable";
import { mockProblems } from "@/lib/MockData";
import { fetchProblems } from "@/services/problemService";

export default function ProblemsPage() {
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedTags, setSelectedTags] = useState([]);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProblems()
      .then((data) => setProblems(data))
      .finally(() => setLoading(false));
  }, []);

  const allTags = Array.from(new Set(problems.flatMap((p) => p.tags)));

  const filteredProblems = problems.filter((problem) => {
    const difficultyMatch =
      difficultyFilter === "all" || problem.difficulty === difficultyFilter;
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => problem.tags.includes(tag));
    return difficultyMatch && tagMatch;
  });

  return (
    <main className="flex-1 p-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Problems</h1>
          <p className="text-lg text-muted-foreground">
            Solve coding prbolems and improve your skills
          </p>
        </div>

        {/* Filters */}
        <Filters
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          allTags={allTags}
        />

        {/* Problems Table */}
        <ProblemsTable problems={filteredProblems} />
      </div>
    </main>
  );
}
