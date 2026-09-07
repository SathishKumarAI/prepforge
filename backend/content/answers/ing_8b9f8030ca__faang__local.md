---
qid: ing_8b9f8030ca__faang__local
question: 'Explain: Different Events to update the search index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 559
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:05-05:00'
sources: []
---

**Clarify**  
We’re asked how a search system keeps its index fresh when various user or system events occur (e.g., document creation, edit, deletion, re‑rank signals). I’ll assume we’re dealing with an inverted‑index style engine (Elastic/Typesense) that supports near‑real‑time updates and that the “events” come from a message bus.

**Approach**  
1. Classify events into *content* changes (create/update/delete) and *ranking* signals (clicks, dwell time).  
2. For each class, define a pipeline: ingest → transform → index update.  
3. Use idempotent operations so duplicate messages don’t corrupt the index.  
4. Batch small updates to amortize I/O while keeping latency low.

**Depth**  

| Event | Typical handler | Implementation notes |
|-------|-----------------|----------------------|
| **Create / Update** | *Document ingestion* – parse, extract tokens, store in DB, push to index via bulk API. | Use a write‑through cache; schedule async re‑indexing for heavy docs. |
| **Delete** | *Soft delete* flag in DB + tombstone record → index removal (delete by ID). | Ensure eventual consistency: first mark deleted, then purge after TTL. |
| **Click / Dwell** | *Realtime ranking* – increment counters, update document’s relevance score via “update‑by‑query” or a dedicated feature store. | Use a separate analytics stream; materialize features in a fast key‑value store (Redis) before pushing to index. |
| **Bulk Rebuild** | Triggered by schema change → re‑index all docs from scratch. | Use distributed workers, checkpointing for fault tolerance. |

Complexity:  
*Per‑doc updates*: O(log N) for insertion into the inverted index; deletions are amortized.  
*Ranking updates*: O(1) counter increment + occasional O(log N) score update.

**Edge Cases**  
- Duplicate events → use message deduplication (UUID, timestamps).  
- Out‑of‑order deletes before creates → idempotent delete that checks existence first.  
- Schema drift → fall back to “safe” field handling or reject updates until migration completes.  

**Optimize & Communicate**  
I’d propose a microservice per event type, with a shared queue and retry policy. For latency‑critical ops (clicks), push to a lightweight feature store; for bulk changes, schedule nightly jobs. I’d explain that this design balances consistency, scalability, and real‑time freshness—key to a production search platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
