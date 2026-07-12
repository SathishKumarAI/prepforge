import type { GeneratedAnswer, Question, Resource } from "./types";

const BASE = "/api";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

export async function fetchQuestions(): Promise<{ questions: Question[]; topics: string[] }> {
  return get("/questions");
}

export async function fetchResources(): Promise<{ resources: Resource[] }> {
  return get("/resources");
}

export async function refreshResources(): Promise<{ ok: boolean; count: number }> {
  const res = await fetch(`${BASE}/scrape/refresh`, { method: "POST" });
  if (!res.ok) throw new Error(`refresh → ${res.status}`);
  return res.json();
}

export async function generateAnswer(
  question: string,
  topic: string,
  persona = "",
  qid = ""
): Promise<GeneratedAnswer> {
  const res = await fetch(`${BASE}/generate/answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, topic, persona, qid }),
  });
  if (!res.ok) throw new Error(`generate → ${res.status}`);
  return res.json();
}

export async function addResource(
  url: string,
  topic = "AI",
  title = "",
  selection = ""
): Promise<{ ok?: boolean; error?: string; message?: string; count?: number }> {
  const res = await fetch(`${BASE}/resources/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, topic, title, selection }),
  });
  if (!res.ok) throw new Error(`add → ${res.status}`);
  return res.json();
}
