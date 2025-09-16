// src/components/problemset/Filters.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Filters({
  difficultyFilter,
  setDifficultyFilter,
  selectedTags,
  setSelectedTags,
  allTags,
}) {
  return (
    <Card className="mb-6 shadow-sm">
      <CardContent className="p-6 flex flex-wrap gap-4 items-center">
        {/* Difficulty filter */}
        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-36 cursor-pointer">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        {/* Tags filter */}
        <Select
          value=""
          onValueChange={(tag) => {
            if (!selectedTags.includes(tag)) {
              setSelectedTags([...selectedTags, tag]);
            }
          }}
        >
          <SelectTrigger className="w-40 cursor-pointer">
            <SelectValue placeholder="Tags" />
          </SelectTrigger>
          <SelectContent>
            {allTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Show selected tags */}
        <div className="flex gap-2 flex-wrap">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted rounded text-sm cursor-pointer"
              onClick={() =>
                setSelectedTags(selectedTags.filter((t) => t !== tag))
              }
            >
              {tag} ✕
            </span>
          ))}
        </div>

        {/* Clear filters */}
        {(difficultyFilter !== "all" || selectedTags.length > 0) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setDifficultyFilter("all");
              setSelectedTags([]);
            }}
          >
            Clear filters
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
