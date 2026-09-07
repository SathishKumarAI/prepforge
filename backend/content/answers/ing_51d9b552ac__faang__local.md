---
qid: ing_51d9b552ac__faang__local
question: Sources change constantly. How do you keep the vector index in sync - including
  deletes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:42-05:00'
sources: []
---

**Clarify**  
We’re asked how to keep a vector‑search index (e.g., FAISS/Annoy) in sync with a dynamic source of embeddings—new vectors added, existing ones updated or deleted. Assume the source can be queried for “diffs” and that we have write access to the index.

**Approach**  
1. **Event sourcing** – listen to change‑feeds (Kafka/Kinesis).  
2. **Batch vs real‑time** – small updates are streamed; bulk changes run nightly.  
3. **Soft deletes** – mark vectors as inactive in a metadata table.  
4. **Rebuild strategy** – schedule periodic full rebuilds to clean stale entries.

**Depth**  
- On *add*: compute embedding, append to the index with an ID and store ID→vector mapping.  
- On *update*: remove old vector (FAISS allows `remove_ids`) then insert new one; update mapping.  
- On *delete*: either soft‑delete by flag or physically remove via `remove_ids`. FAISS’s removal is O(n) in worst case, so we batch deletes to amortize cost.  
- Periodic rebuild: export current IDs from DB, rebuild index from scratch (O(N log N)), then swap pointers atomically.  
Complexity: add/update/delete ≈ O(log N) for balanced indices; rebuild O(N log N). Trade‑off is between latency of sync and memory overhead.

**Edge Cases**  
- Concurrent updates to same ID → lock or idempotent operations.  
- Index corruption if removal fails – keep backup copy.  
- Deletion of non‑existent ID – no-op but log warning.  

**Optimize & Communicate**  
Explain that we use a write‑through cache (metadata DB) so the index never diverges for more than one batch window. For large-scale, shard the index by hash buckets and apply updates per shard to keep operations local. Convey this plan as iterative: start with event feed + soft deletes, then add rebuilds once traffic grows. This balances consistency, latency, and operational simplicity—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
