---
qid: ing_7d0ec6c849__star__local
question: 'Explain: Databases — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 334
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:03-05:00'
sources: []
---

**Situation:**  
In my last role I was building a real‑time recommendation engine that pulled feature vectors from a distributed PostgreSQL cluster. Production logs showed occasional “stale” predictions, and debugging revealed that some rows were silently corrupted during replication.

**Task:**  
I had to guarantee data integrity across the shard replicas without adding prohibitive latency or storage overhead, so the ML pipeline could trust every feature vector it consumed.

**Action:**  
First, I introduced a lightweight SHA‑256 checksum column on each table and updated triggers to recalc checksums on INSERT/UPDATE. Then I modified our replication logic: after applying WAL entries on replicas, a background worker ran a batched verification job that compared the replica’s checksum against the primary’s pre‑computed value. If mismatches were found, the affected row was flagged for re‑replication and an alert sent to operations. To keep query performance high, I stored checksums in a separate index‑only table so the main queries didn’t touch them. Finally, I added automated tests that injected random bit flips into replicas and verified the system caught them within seconds.

**Result:**  
The checksum mechanism reduced data corruption incidents by 99% and cut prediction errors due to stale data from 4 % to <0.1 %. Latency increased by only ~2 ms per query, well below our SLA. I learned that a simple cryptographic hash can be a cost‑effective guardrail in ML pipelines where correctness outweighs raw speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
