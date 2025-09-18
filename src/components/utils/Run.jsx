"use client";

import { Button } from "@/components/ui/button";
import { Play, Loader2 } from "lucide-react";
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ source_code: code, language, stdin }),
        }
      );

      const data = await res.json();
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
      className="flex cursor-pointer items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Running...</span>
        </>
      ) : (
        <>
          <Play className="h-4 w-4" />
          <span>Run</span>
        </>
      )}
    </Button>
  );
}
