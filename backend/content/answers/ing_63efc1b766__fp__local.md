---
qid: ing_63efc1b766__fp__local
question: 'Explain: 6.1 Unique URL Generation — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 500
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:37:33-05:00'
sources: []
---

## Why a short‑URL must be **unique**

A short URL is a bijection  
\(f : \text{long\_url} \rightarrow \text{short\_id}\).  
If two distinct long URLs mapped to the same id, a user clicking one would
receive the wrong resource—this violates referential integrity.  
Thus we need an injective mapping that can be *guaranteed* for all future
requests.

### Deriving the generation scheme

1. **Define the output alphabet**  
   Choose a base \(B\) (e.g., 62 = [A–Z, a–z, 0–9]) so each character carries
   \(\log_2 B\) bits of information.  

2. **Determine required length**  
   For \(N\) expected URLs we need at least  
   \[
   L \ge \left\lceil \frac{\log_2 N}{\log_2 B} \right\rceil
   \]
   characters to avoid collisions by pigeon‑hole principle.

3. **Generate a unique integer**  
   Maintain an atomic counter (e.g., in Redis or a database sequence).  
   Each increment yields a new integer \(i\in[0,N)\).

4. **Encode the integer**  
   Convert \(i\) to base‑\(B\) representation:
   \[
   \text{short\_id} = \text{base}_B(i)
   \]
   This is deterministic, collision‑free, and trivially reversible.

### Non‑obvious insight

Using a **central counter** may appear fragile, yet it guarantees *exact* uniqueness
without the need for hashing or probabilistic checks. The cost of contention can be
amortized by sharding counters across partitions (e.g., using consistent hashing)
and only reserving one slot per partition before merging—this keeps the system
linear‑time while preserving injectivity.

### Summary

- **Problem**: map arbitrary URLs to collision‑free short IDs.  
- **Principle**: encode a monotonically increasing integer in a compact base.  
- **Result**: deterministic, scalable, and mathematically guaranteed uniqueness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
