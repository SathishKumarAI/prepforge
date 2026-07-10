import type { Question, Resource } from "./types";

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
