"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function RunButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center space-x-2 cursor-pointer"
    >
      <Play className="h-4 w-4" />
      <span>Run</span>
    </Button>
  );
}
