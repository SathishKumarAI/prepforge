---
qid: ing_f799c93491__star__local
question: 'Explain: Design Cursor''s tab (next-edit prediction) system: it must feel
  instant - sub-100ms perceived latency - for millions of daily users. Walk me through
  the stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 391
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:55-05:00'
sources: []
---

**Situation** – When I joined Cursor, the editor had a 4‑second lag on autocomplete for our 3 M daily users. The product team wanted an instant feel: next‑edit predictions should hit in under 100 ms perceived latency.

**Task** – Build a scalable prediction stack that could serve millions of concurrent users while keeping CPU and memory budgets tight, using only open‑source tech so we could ship fast.

**Action** – I architected a three‑layer system. First, on the client I added a lightweight WebAssembly module that pre‑fetches a tiny 200 KB model snapshot (a quantized transformer) and runs inference locally for the first prediction to avoid round trips. Second, I set up a fast in‑memory cache layer (Redis Cluster with sharded LRU eviction) to store per‑user session embeddings so we could skip recomputation for subsequent edits. Third, on the server side I deployed a Go microservice that exposes a gRPC endpoint; it pulls embeddings from Redis, runs a distilled neural net on a single GPU node, and streams back incremental suggestions using HTTP/2 push promises. I also implemented a rolling‑batch scheduler that groups requests by model shard to keep GPU utilization above 70 % without exceeding the 100 ms deadline.

**Result** – The new stack cut perceived latency from 4 s to <90 ms for 99.5 % of predictions, and CPU usage dropped 35 %. User engagement rose 18 % on average, and I learned how hybrid client‑server inference can reconcile speed with resource constraints at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
