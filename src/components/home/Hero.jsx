// src/components/home/Hero.jsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-slate-100">
                AI-Powered Learning
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Master Coding Through
              <span className="text-purple-400 block">Smart Practice</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 text-pretty leading-relaxed">
              Solve challenging problems, get instant feedback, and accelerate
              your programming journey with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white group"
                asChild
              >
                <Link href="/signup">
                  Start Coding Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-slate-400 text-slate-100 hover:bg-slate-100 hover:text-slate-900"
                asChild
              >
                <Link href="/problems">Explore Problems</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-64 bg-slate-800 rounded-xl border border-slate-600 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-auto text-xs text-slate-400 font-mono">
                    solution.js
                  </div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-purple-300">
                    {"function solve(nums) {"}
                  </div>
                  <div className="pl-4 text-green-300">
                    {"// AI suggests: Use two pointers"}
                  </div>
                  <div className="pl-4 text-slate-100">{"return result;"}</div>
                  <div className="text-purple-300">{"}"}</div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-500/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
