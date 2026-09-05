---
qid: vq_e007d04c8d__fp__local
question: How will you write custom partitioner?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 508
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:39-05:00'
sources: []
---

**From first principles:**

A partitioner’s job is *to map keys to partitions so that downstream operators can work independently yet still preserve the semantics of a group‑by or join.*  
1. **Identify the cost function** – we want to minimise two opposing goals:  
   - **Load balance:** every partition should receive roughly the same number of records (minimise variance).  
   - **Data locality:** keys that will be joined together should end up in the same partition (maximise overlap).

2. **Formulate as an optimisation problem** – for a set of keys \(K\) and partitions \(P\), choose a function \(f: K \rightarrow P\) that minimises  
   \[
   C(f)=\alpha\,\text{Var}\bigl(|f^{-1}(p)|\bigr)+\beta\sum_{(k_1,k_2)\in J} \mathbf{1}[f(k_1)\neq f(k_2)]
   \]
   where \(J\) is the set of key pairs that must co‑occur (e.g., join keys).  
3. **Derive a practical solution** – exact optimisation is NP‑hard, so we approximate with *consistent hashing* or *range partitioning* guided by statistics:
   - Build a histogram of key frequencies.
   - Choose split points such that each bucket has ≈ |K|/|P| keys (load balance).
   - For join‑heavy keys, force them into the same bucket by grouping their values in the histogram before splitting.

4. **Implement** – write a `Partitioner` class that:
   - Accepts key statistics and optional join groups.
   - Computes split points offline.
   - Implements `getPartition(key)` using binary search over splits (O(log P)).

**Non‑obvious insight:**  
*The same histogram that balances load can also expose “hot” keys; by clustering those hot keys into a single partition you reduce shuffle even if the partition is slightly larger than average.* This dual use of statistics turns a simple load‑balancing tool into an effective locality optimiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
