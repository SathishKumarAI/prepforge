---
qid: ing_5cc5ea3453__faang__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 497
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:19:15-05:00'
sources: []
---

**Clarify**  
The README shows a “usage” metric for the PasteBin‑style system: total bytes stored per user and overall traffic. I’ll assume we need to compute *bytes per paste* (size), *pastes per day*, and *storage quota* enforcement.

**Approach**  
1. **Define metrics** – size of each paste, number of pastes, and cumulative storage.  
2. **Store metadata** – a lightweight key/value store (e.g., DynamoDB) holds `paste_id`, `user_id`, `size_bytes`, `created_at`.  
3. **Aggregate** – use an incremental counter per user (`total_storage`) updated on write/delete; a daily job tallies pastes/day.

**Depth**  
- **Write path**: when a paste is created, compute its byte size in the API layer, then atomically increment `user.total_storage` (e.g., with DynamoDB’s `ADD`).  
- **Quota check**: compare `total_storage + new_size` against user’s limit; reject if exceeded.  
- **Analytics**: an event stream (Kafka) pushes paste events to a consumer that updates per‑day counters in Redis (`INCRBY`) for quick dashboards.  
Complexity: O(1) per write, O(1) read of quota; aggregation is linear in number of events but batched nightly.

**Edge Cases**  
- **Large uploads** → chunking and size validation before counter update.  
- **Deletes** → decrement counters atomically to avoid race conditions.  
- **Concurrent writes** → use optimistic locking or transactional writes to prevent over‑quota slips.

**Optimize & Communicate**  
To reduce latency, cache `total_storage` in Redis per user with a short TTL; invalidate on write. Explain trade‑offs: stronger consistency vs lower read latency. In an interview, I’d narrate how each component (API, DB, stream) contributes to accurate usage accounting while keeping the system horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
