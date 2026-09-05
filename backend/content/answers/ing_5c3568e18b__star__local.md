---
qid: ing_5c3568e18b__star__local
question: 'Explain: Data & context strategy — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 309
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:55-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an internal AI‑powered code assistant that would auto‑complete snippets and suggest refactors for our JavaScript codebase, which had grown to over 500 k lines with 30+ developers.

**Task:**  
I was tasked with designing the data & context strategy so the model could understand project conventions, dependencies, and the evolving API surface while keeping latency under 200 ms per request.

**Action:**  
First, I built a multi‑layer indexing pipeline: a static parser extracted module graphs, type definitions, and comment metadata; this became our “context cache.” Next, I set up an incremental ingestion system that watched Git commits, ran the parser on changed files, and updated the cache in near real‑time. For data quality, we tagged code with versioned schema tags (e.g., `v1.2`) so the assistant could select the right context for a given branch. Finally, I integrated a lightweight embeddings engine that compressed contextual vectors to 256 bytes, enabling fast similarity search on a GPU‑accelerated vector store.

**Result:**  
The assistant achieved an average response time of 180 ms and reduced code review turnaround by 35%. Developers reported a 40% drop in boilerplate errors. I learned that coupling static analysis with dynamic context updates is key to maintaining relevance without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
