---
qid: ing_7a01de5558__star__local
question: How would you index a 100k-file monorepo so an AI editor can retrieve relevant
  context - and keep the index fresh as the user edits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 355
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:40-05:00'
sources: []
---

**Situation**  
At my previous company we had a 100 K‑file monorepo for a large SaaS platform. The new AI editor was supposed to surface relevant code snippets on demand, but our legacy indexing system was static and lagged behind edits, causing stale suggestions.

**Task**  
I needed to build an incremental index that could quickly map file contents to searchable embeddings, keep it up‑to‑date as developers edited files in VS Code, and serve queries within 200 ms so the AI editor felt instantaneous.

**Action**  
First I instrumented the editor’s file‑watch API (using `chokidar`) to capture change events. For each updated file I ran a lightweight tokenizer, generated a sentence‑level embedding with Sentence‑Transformers (`all-MiniLM-L6-v2`), and stored it in an on‑disk vector store (FAISS) keyed by the file’s path and version hash. To keep the index fresh I implemented a background worker that processed change queues at 1 s intervals, using optimistic locking to avoid race conditions. For querying, I built a fast REST endpoint that performs a k‑NN search over FAISS, returning top‑5 relevant files and snippets; the response time was consistently <180 ms.

**Result**  
The AI editor now delivers contextually accurate suggestions in real time, reducing developer onboarding time by 35%. The incremental index processes edits in under 50 ms on average, keeping the search space fresh without a full rebuild. I learned that coupling file‑watching with lightweight embeddings and a vector store can scale to very large codebases while maintaining low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
