---
qid: ing_e1c98ac6f4__faang__local
question: 'Explain: Isolation — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 452
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:24:25-05:00'
sources: []
---

**Clarify**  
Isolation in Cloud Spanner means each transaction sees a consistent snapshot of the database while other concurrent transactions run independently. I’ll assume we’re talking about *serializable isolation* (the default), and that the reader wants to know how Spanner achieves it with global consistency.

**Approach**  
1. Explain Spanner’s two‑phase commit + TrueTime.  
2. Show how reads use a snapshot timestamp, writes obtain locks via Paxos on each tablet.  
3. Contrast with classic MVCC, highlight Spanner’s “global lock” per transaction ID.

**Depth**  
- *TrueTime* supplies a bounded clock uncertainty window, letting Spanner pick a commit timestamp that is guaranteed to be after all conflicting reads.  
- During **read‑only** transactions, the engine returns data as of a snapshot timestamp (no locks).  
- For **read‑write** transactions, Spanner first acquires *commit‑timestamp locks* on all keys touched. If any lock conflicts, the transaction aborts and retries with a new timestamp.  
- The two‑phase commit (Paxos) ensures that either all replicas apply the write or none do, giving atomicity across shards.  
- Complexity: read‑only O(log n), read‑write amortized O(k log n + log u) where k is keys and u is number of replicas.

**Edge Cases**  
- Clock skew exceeding TrueTime bounds → transaction aborts; need to retry.  
- Hotspots: many concurrent writes to the same key cause lock contention.  
- Long‑running transactions can be aborted if their timestamp window closes before commit.

**Optimize & Communicate**  
Improvements: use *transaction pooling* to amortize lock acquisition, or *row‑level locks* for high concurrency workloads. I’d narrate this by first mapping the problem (global consistency), then walking through the two key primitives (TrueTime + Paxos), finally summarizing trade‑offs and failure modes so interviewers see a clear, structured solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
