import type { DeepLink, GeneratedAnswer, Question, QuestionRowLite, Resource } from "./types";

const BASE = "/api";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

export async function fetchQuestions(): Promise<{ questions: Question[]; topics: string[] }> {
  return get("/questions");
}

export interface Browse {
  questions: QuestionRowLite[];
  /** Matches across the whole filter, not this page — so counts stay honest. */
  total: number;
  offset: number;
  has_more: boolean;
  /**
   * These describe the whole match rather than the page, so the server sends
   * them on the FIRST page only. Optional for that reason, not because a first
   * page might omit them.
   */
  topics?: string[];
  links?: (DeepLink & { count: number })[];
  link_count?: number;
}

/**
 * Everything Library's questions view puts on screen, in one call: the rows, the
 * topic list and the "go deeper" links for whatever is matched.
 *
 * The search runs on the server because it searches ANSWER text, and that is the
 * single reason this page used to hold all 39.7 MB.
 */
export async function fetchBrowse(params: {
  q?: string;
  topic?: string | null;
  difficulty?: string | null;
  limit?: number;
  offset?: number;
}): Promise<Browse> {
  const qs = new URLSearchParams();
  if (params.q) qs.set("q", params.q);
  if (params.topic) qs.set("topic", params.topic);
  if (params.difficulty) qs.set("difficulty", params.difficulty);
  // `!== undefined`, not truthiness: limit=0 is the "just the counts" call and
  // offset=0 is the first page, and a falsy check drops both. That bug already
  // shipped once — it made the counts call quietly fetch 200 rows.
  if (params.limit !== undefined) qs.set("limit", String(params.limit));
  if (params.offset !== undefined) qs.set("offset", String(params.offset));
  return get(`/questions/browse?${qs}`);
}

/** One question, whole — answer, sources, and `related` expanded with titles. */
export async function fetchQuestion(id: string): Promise<Question> {
  return get(`/questions/${encodeURIComponent(id)}`);
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

/** Four fields per question — what a jump box needs. See GET /questions/index. */
export interface QuestionLite {
  id: string;
  question: string;
  topic: string;
  difficulty: string;
}

export async function fetchQuestionIndex(): Promise<{ questions: QuestionLite[] }> {
  return get("/questions/index");
}

export interface Providers {
  /** The model id LM Studio is serving right now, or null if it is not running. */
  local_model: string | null;
  /** Lens modes that cost nothing at this moment. Empty when nothing is local. */
  free_modes: string[];
}

// Probed on every call, not cached at startup: LM Studio is started and stopped
// by hand mid-session, and a stale answer here is the difference between a free
// hover and a billed one.
export async function fetchProviders(): Promise<Providers> {
  return get("/generate/providers");
}

// Which lenses this question already has on disk. Cache-first generation serves
// those without calling anyone, so they are free whatever the provider is.
export async function fetchCachedModes(qid: string): Promise<{ cached_modes: string[] }> {
  return get(`/generate/cached/${encodeURIComponent(qid)}`);
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

export interface LibraryCollection {
  name: string;
  kind: "repo" | "folder" | "captured";
  url: string;
  docs: number;
  cards: number;
  files: string[];
}

export async function fetchSources(): Promise<{
  collections: LibraryCollection[];
  docs: number;
  cards: number;
}> {
  return get("/sources");
}

export interface AddRepoResult {
  ok?: boolean;
  name?: string;
  docs?: number;
  cards?: number;
  existing?: boolean;
  error?: string;
  message?: string;
}

// Clone a public Markdown repo (github/gitlab/codeberg/bitbucket) into the library
// and ingest it. Already-cloned repos come back with existing: true, not an error.
export async function addGithubSource(url: string): Promise<AddRepoResult> {
  const res = await fetch(`${BASE}/sources/github`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  if (!res.ok) throw new Error(`sources/github → ${res.status}`);
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
