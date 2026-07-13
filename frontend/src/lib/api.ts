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
  qid = "",
  mode = "deep"
): Promise<GeneratedAnswer> {
  const res = await fetch(`${BASE}/generate/answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, topic, persona, qid, mode }),
  });
  if (!res.ok) throw new Error(`generate → ${res.status}`);
  return res.json();
}

export interface ReadResult {
  ok?: boolean;
  title?: string;
  markdown?: string;
  saved?: string;
  error?: string;
  message?: string;
}

export async function readResource(url: string, topic = "AI", title = ""): Promise<ReadResult> {
  const res = await fetch(`${BASE}/resources/read`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, topic, title }),
  });
  if (!res.ok) throw new Error(`read → ${res.status}`);
  return res.json();
}

export async function ingestLibrary(
  mode: "deterministic" | "ollama" | "claude" = "deterministic"
): Promise<{ files?: number; cards?: number; mode?: string; model_cards?: number; error?: string }> {
  const res = await fetch(`${BASE}/ingest?mode=${mode}`, { method: "POST" });
  if (!res.ok) throw new Error(`ingest → ${res.status}`);
  return res.json();
}

export async function ingestVault(): Promise<{
  ok?: boolean;
  error?: string;
  message?: string;
  questions?: number;
  files_scanned?: number;
  with_answers?: number;
}> {
  const res = await fetch(`${BASE}/vault/ingest`, { method: "POST" });
  if (!res.ok) throw new Error(`vault/ingest → ${res.status}`);
  return res.json();
}

export async function vaultReadSource(path: string): Promise<ReadResult> {
  const res = await fetch(`${BASE}/vault/read`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path }),
  });
  if (!res.ok) throw new Error(`vault/read → ${res.status}`);
  return res.json();
}

export async function libraryReadSource(path: string): Promise<ReadResult> {
  const res = await fetch(`${BASE}/library/read`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path }),
  });
  if (!res.ok) throw new Error(`library/read → ${res.status}`);
  return res.json();
}

export interface VideoQuizResult {
  ok?: boolean;
  title?: string;
  source_path?: string;
  cards?: number;
  synth_quizzes?: number;
  error?: string;
  message?: string;
}

// Paste a YouTube URL → transcript → ingest → quizzable questions from that video.
export async function quizFromVideo(url: string, topic = "AI"): Promise<VideoQuizResult> {
  const res = await fetch(`${BASE}/quiz/from_video`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, topic }),
  });
  if (!res.ok) throw new Error(`quiz/from_video → ${res.status}`);
  return res.json();
}

// Any resource (article or video) → quizzable questions from it.
export async function quizFromResource(url: string, topic = "AI"): Promise<VideoQuizResult> {
  const res = await fetch(`${BASE}/quiz/from_resource`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, topic }),
  });
  if (!res.ok) throw new Error(`quiz/from_resource → ${res.status}`);
  return res.json();
}

export async function uploadResource(file: File, topic = "AI"): Promise<ReadResult> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("topic", topic);
  const res = await fetch(`${BASE}/resources/upload`, { method: "POST", body: fd });
  if (!res.ok) throw new Error(`upload → ${res.status}`);
  return res.json();
}

export async function addFeed(
  url: string,
  name = "",
  topic = "AI"
): Promise<{ ok?: boolean; error?: string; message?: string; url?: string }> {
  const res = await fetch(`${BASE}/sources/feed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, name, topic }),
  });
  if (!res.ok) throw new Error(`feed → ${res.status}`);
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
