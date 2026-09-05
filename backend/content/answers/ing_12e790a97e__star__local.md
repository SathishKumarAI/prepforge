---
qid: ing_12e790a97e__star__local
question: 'Explain: Cursor System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 321
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:24-05:00'
sources: []
---

**Situation:**  
While working on a real‑time recommendation engine for an e‑commerce platform, we noticed that our current cursor‑based pagination was causing data staleness and user frustration—customers would see the same items repeatedly after rapid scrolling.

**Task:**  
Redesign the cursor system to support efficient, consistent pagination across millions of products while minimizing latency and ensuring eventual consistency with a distributed NoSQL backend.

**Action:**  
I introduced a hybrid approach: (1) use a deterministic sort key combining `price` and `created_at` to guarantee stable ordering; (2) generate opaque cursors that encode the last seen composite key and a checksum for tamper detection; (3) implement a “cursor cache” layer in Redis to store recent cursor-to-offset mappings, reducing read amplification; (4) added a background job to periodically rebuild a materialized view of top‑selling items so the cursor can jump to fresh data without full table scans. I also wrote unit tests simulating concurrent writes and measured latency under load.

**Result:**  
Pagination latency dropped from 350 ms to 95 ms, and duplicate item views fell below 0.3%. User drop‑off after scrolling decreased by 18%, directly boosting conversion rates. I learned that blending deterministic ordering with caching and background reindexing can reconcile real‑time consistency with performance in large‑scale AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
