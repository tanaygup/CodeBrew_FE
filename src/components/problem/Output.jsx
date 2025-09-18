"use client";

export default function Output({ result }) {
  if (!result) {
    return (
      <div className="p-4 text-gray-400 text-sm italic border rounded-lg bg-gray-800/60">
        ⚡ Run your code to see output here
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-inner">
      <h3 className="text-sm font-semibold text-gray-300 mb-2">
        Execution Result
      </h3>
      <div className="space-y-3 text-sm font-mono overflow-y-auto max-h-56">
        {result.stdout && (
          <div>
            <p className="text-green-400 font-semibold">✅ Output:</p>
            <pre className="bg-gray-800 text-green-200 p-2 rounded whitespace-pre-wrap">
              {result.stdout}
            </pre>
          </div>
        )}
        {result.stderr && (
          <div>
            <p className="text-red-400 font-semibold">❌ Error:</p>
            <pre className="bg-gray-800 text-red-300 p-2 rounded whitespace-pre-wrap">
              {result.stderr}
            </pre>
          </div>
        )}
        {result.compile_output && (
          <div>
            <p className="text-yellow-400 font-semibold">⚠️ Compile Output:</p>
            <pre className="bg-gray-800 text-yellow-200 p-2 rounded whitespace-pre-wrap">
              {result.compile_output}
            </pre>
          </div>
        )}
        {result.error && (
          <div>
            <p className="text-red-400 font-semibold">⚠️ Runtime Error:</p>
            <pre className="bg-gray-800 text-red-200 p-2 rounded whitespace-pre-wrap">
              {result.error}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
