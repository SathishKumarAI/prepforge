---
qid: ing_6ce2af358e__star__local
question: 'Explain: Database Indexing — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 362
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:52-05:00'
sources: []
---

**Situation**  
I was leading a recommendation engine at a fintech startup that had to serve 2 M users with sub‑second latency. Our PostgreSQL store stored user profiles, transaction history and model predictions, but every query on the “last 30 days” window ran in ~800 ms because of missing indexes.

**Task**  
Reduce average query time below 200 ms while keeping write throughput high enough for real‑time updates (≈10k writes per second).

**Action**  
I mapped out 30 key indexing concepts: composite B‑tree, partial and expression indexes, covering indexes, multicolumn GIN for JSONB, BRIN for large tables, bitmap scans, index-only scans, hash indexes for equality, and the trade‑off between write cost and read speed. I started with a partial index on `WHERE last_update > now() - interval '30 days'` to shrink the heap. Then added an expression index on `(user_id, created_at DESC)` for our top‑n queries, followed by a GIN index on the JSONB “tags” column to accelerate full‑text search. I also switched to BRIN for the massive `transactions` table, which cut disk seeks dramatically. Finally, I implemented index-only scans where possible and tuned `maintenance_work_mem` for faster VACUUMs.

**Result**  
Query latency dropped from 800 ms to 140 ms (≈82% improvement). Write throughput remained stable at 9.8k ops/sec. The exercise taught me that indexing is a holistic system‑design problem: choosing the right type, scope, and maintenance strategy can unlock massive performance gains without adding hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
