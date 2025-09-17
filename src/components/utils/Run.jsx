"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

export default function RunButton({ code, language, stdin, onResult }) {
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/code/execute`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source_code: code,
            language,
            stdin,
          }),
        }
      );

      const data = await res.json();
      console.log("Execution result:", data); // ✅ check in browser console
      onResult?.(data);
    } catch (err) {
      console.error("Run error:", err);
      onResult?.({ error: "An error occurred while running the code." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleRun}
      disabled={loading}
      variant="outline"
      size="sm"
      className="flex items-center space-x-2 cursor-pointer"
    >
      <Play className="h-4 w-4" />
      <span>{loading ? "Running..." : "Run"}</span>
    </Button>
  );
}
