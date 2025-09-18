export async function fetchProblems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/problems`);
  if (!res.ok) throw new Error("Failed to fetch problems");
  return res.json();
}

export async function createProblem(problem) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/problems`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(problem),
  });
  if (!res.ok) throw new Error("Failed to create problem");
  return res.json();
}
