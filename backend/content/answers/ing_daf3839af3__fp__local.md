---
qid: ing_daf3839af3__fp__local
question: 'Explain: That''s pretty expensive to keep in the — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 401
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:55-05:00'
sources: []
---

In a real‑time collaborative platform like **Google Wave**, every *wavelet* (a sub‑document) must be kept available for instant edit, merge and conflict resolution across thousands of users.  
The fundamental problem is *concurrent consistency*: each client can issue edits while the network is unreliable, yet all replicas eventually converge to a single logical state. To guarantee this, Google Wave adopts an **Operational Transformation (OT)** engine that tracks every operation, its causal dependencies, and the transformation rules needed to reorder operations from different users.

Why does this become costly?  
1. **Metadata explosion** – Each operation is tagged with a unique identifier, timestamps, and dependency vectors. For a wave with \(N\) collaborators generating \(M\) ops per second, storage grows as \(O(N \times M)\).  
2. **Transformation overhead** – Transforming an incoming op against all concurrent ops is \(O(k)\), where \(k\) is the number of concurrent operations at that instant. In a busy wave, \(k\) can be dozens, so every edit triggers dozens of pairwise transformations.  
3. **Network churn** – To keep all clients in sync, the server must broadcast every transformed op to all participants, incurring bandwidth and CPU costs proportional to \(N \times M\).

The deeper principle is *causal consistency* + *conflict‑free replication*. OT ensures that regardless of arrival order, applying transformations yields a deterministic final state. The non‑obvious insight: **the cost scales quadratically with the number of concurrent edits**—not just linearly with users or ops. That quadratic blowup explains why Google Wave’s infrastructure had to be architected for massive parallelism and why even a “simple” text editor becomes an expensive distributed system at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
