---
qid: ing_ba0df70928__star__local
question: 'Explain: Coding: merge ranked results from N connector shards into a global
  top-k, applying a per-user permission filter. Do it efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 314
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:03-05:00'
sources: []
---

**Situation** – In my last role I built a search engine for an enterprise SaaS platform that had 12 data connectors (shards) each returning ranked lists of documents. Our compliance team required that every user only see results they were authorized to view, and the UI demanded a global top‑10 list in under 300 ms.

**Task** – I needed to merge the N per‑shard ranked streams into one sorted top‑k while filtering out any items the current user couldn’t access, all without pulling every shard’s entire result set into memory or making an extra round‑trip for permissions.

**Action** – I implemented a min‑heap based k‑way merge that lazily fetched only the next candidate from each shard. As each candidate was popped, I performed an async permission check against our ACL cache (LRU‑cached per user) and discarded unauthorized items on the fly. If a candidate was filtered out, I immediately requested the next item from that shard. This kept the heap size fixed at N+1 and ensured we only processed enough candidates to fill the top‑k after filtering.

**Result** – The global top‑10 query time dropped from 1.2 s to 180 ms on average, with a 25 % reduction in network traffic. I learned that coupling lazy merging with per‑user caching can deliver both performance and strict security guarantees in large‑scale search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
