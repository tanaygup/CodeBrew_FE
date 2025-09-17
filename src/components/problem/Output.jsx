"use client";

export default function Output({ result }) {
  if (!result) {
    return (
      <div className="p-3 text-muted-foreground text-sm">
        Run your code to see output here.
      </div>
    );
  }

  return (
    <div className="p-3 bg-black text-white rounded-md h-40 overflow-y-auto text-sm font-mono">
      {result.stdout && (
        <div>
          <p className="text-green-400 font-semibold">Output:</p>
          <pre>{result.stdout}</pre>
        </div>
      )}
      {result.stderr && (
        <div>
          <p className="text-red-400 font-semibold">Error:</p>
          <pre>{result.stderr}</pre>
        </div>
      )}
      {result.compile_output && (
        <div>
          <p className="text-yellow-400 font-semibold">Compile Output:</p>
          <pre>{result.compile_output}</pre>
        </div>
      )}
    </div>
  );
}
