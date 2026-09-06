---
qid: ing_b6105c3158__think__local
question: Your index will not fit on one machine. How do you shard it, and what breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 472
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:58:21-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   * “Index” refers to a search/knowledge‑base index that exceeds a single machine’s RAM/disk.  
   * Assume the data is read‑heavy (queries dominate), write‑light, and that consistency across shards matters for correctness.

**2. Choose a sharding strategy**  
   * **Horizontal (document) sharding**: split by document ID or hash of a key field.  
   * **Vertical (field) sharding**: separate large fields into dedicated storage.  
   * Combine both if needed (e.g., hash‑shard on docID, then vertical split for blob fields).

**3. Step‑by‑step reasoning**  
   1. Pick a deterministic hash function → guarantees same shard per query.  
   2. Build an index‑metadata table mapping keys to shards; keep it in-memory or in a fast key‑value store.  
   3. Route queries through the metadata lookup, then forward to the appropriate shard(s).  
   4. For range queries, identify all overlapping shards and merge results client‑side or via a coordinator.  
   5. Handle updates by routing to the target shard; use eventual consistency if strict ACID is not required.

**4. Common traps to avoid**  
   * **Skewed hashing** → uneven load; mitigate with consistent hashing or dynamic rebalancing.  
   * **Metadata bottleneck** → keep it tiny and cache frequently accessed entries.  
   * **Merge overhead for range queries** → costly if many shards overlap; consider pre‑aggregated indexes.  
   * **Versioning issues** → stale shards after rehashing unless you migrate data incrementally.

**5. Sanity checks & communication**  
   * Verify that the shard count scales with data size and query throughput.  
   * Test edge cases: queries spanning all shards, hot keys, and bulk updates.  
   * Explain to stakeholders that sharding introduces a “coordination overhead” for certain operations (e.g., joins, range scans) and may break strict transactional guarantees unless extra protocols are added.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
