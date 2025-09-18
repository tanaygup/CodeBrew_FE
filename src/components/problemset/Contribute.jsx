"use client";

import { useState } from "react";
import { createProblem } from "@/services/problemService";

export default function ContributeProblem() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [tags, setTags] = useState("");
  const [testCases, setTestCases] = useState([
    { input_data: "", expected_output: "" },
  ]);
  const [message, setMessage] = useState("");

  const addTestCase = () =>
    setTestCases([...testCases, { input_data: "", expected_output: "" }]);
  const updateTestCase = (idx, field, value) => {
    const newCases = [...testCases];
    newCases[idx][field] = value;
    setTestCases(newCases);
  };

  const handleSubmit = async () => {
    const problem = {
      title,
      slug,
      description,
      difficulty,
      tags: tags.split(",").map((t) => t.trim()),
      test_cases: testCases,
    };
    try {
      await createProblem(problem);
      setMessage("Problem submitted successfully!");
    } catch (err) {
      setMessage("Error submitting problem.");
      console.error(err);
    }
  };

  return (
    <div className="p-6 border rounded space-y-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold">Contribute a Problem</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        placeholder="Slug (unique)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="input input-bordered w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="textarea textarea-bordered w-full"
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="select select-bordered w-full"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="input input-bordered w-full"
      />

      <div>
        <h2 className="font-semibold mb-2">Test Cases</h2>
        {testCases.map((tc, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <textarea
              placeholder="Input"
              value={tc.input_data}
              onChange={(e) =>
                updateTestCase(idx, "input_data", e.target.value)
              }
              className="input input-bordered flex-1"
            />
            <textarea
              placeholder="Output"
              value={tc.expected_output}
              onChange={(e) =>
                updateTestCase(idx, "expected_output", e.target.value)
              }
              className="input input-bordered flex-1"
            />
          </div>
        ))}
        <button onClick={addTestCase} className="btn btn-sm">
          Add Test Case
        </button>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary w-full">
        Submit Problem
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
