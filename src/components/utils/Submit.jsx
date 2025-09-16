"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function SubmitButton() {
  return (
    <Button size="sm" className="flex items-center space-x-2 cursor-pointer">
      <Send className="h-4 w-4" />
      <span>Submit</span>
    </Button>
  );
}
