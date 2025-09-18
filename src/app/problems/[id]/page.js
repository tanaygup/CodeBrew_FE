"use client";

import Constraints from "@/components/problem/Constraints";
import ProblemDescription from "@/components/problem/Description";
import Examples from "@/components/problem/Examples";
import Navbar from "@/components/problem/Navbar";
import ProblemHeader from "@/components/problem/ProblemHeader";
import { useParams } from "next/navigation";
import Split from "react-split";
import "@/styles/split.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import LanguageSelector from "@/components/problem/LanguageSelector";
import RunButton from "@/components/utils/Run";
import Output from "@/components/problem/Output";

// temporary mock data
const mockProblemsDetailed = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptanceRate: 49.2,
    tags: ["Array", "Hash Table"],
    status: "solved",
    description: `Given an array of integers <code>nums</code> and an integer <code>target</code>, return ...`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists.",
    ],
  },
];

export default function ProblemDetailPage() {
  const params = useParams();
  const problemId = Number(params.id);
  const problem = mockProblemsDetailed.find((p) => p.id === problemId);
  const [code, setCode] = useState("// Write your solution here...");
  const [result, setResult] = useState(null);

  if (!problem) {
    return <div className="p-6">Problem not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex h-[calc(100vh-4rem)]">
        <Split
          className="flex h-full"
          sizes={[40, 60]} // start 40% left, 60% right
          minSize={[300, 100]} // left >= 300px, right >= 100px
          gutterSize={8}
          gutterAlign="center"
          snapOffset={30}
          gutter={(index, direction) => {
            const gutter = document.createElement("div");
            gutter.className = `gutter gutter-${direction}`;
            return gutter;
          }}
        >
          {/* Left Column */}
          <div className="border-r border-border overflow-y-auto p-6 space-y-6">
            <ProblemHeader problem={problem} />
            <ProblemDescription description={problem.description} />
            <Examples examples={problem.examples} />
            <Constraints constraints={problem.constraints} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <Editor
                height="100%"
                defaultLanguage="cpp"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                }}
              />
            </div>
            <div className="p-4 border-t border-gray-700 bg-gray-950">
              <div className="flex items-center justify-between mb-3">
                <RunButton
                  code={code}
                  language="cpp"
                  stdin="1 2 3"
                  onResult={setResult}
                />
              </div>
              <Output result={result} />
            </div>
          </div>
        </Split>
      </div>
    </div>
  );
}
