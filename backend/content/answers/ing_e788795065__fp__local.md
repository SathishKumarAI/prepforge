---
qid: ing_e788795065__fp__local
question: 'Explain: Append-only (mostly) — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 390
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:39-05:00'
sources: []
---

**Why “append‑only” matters for streaming ML**

In a learning system the data distribution is what drives model updates.  
If a stream can only *add* records (no deletes or edits), each new point is an unbiased sample from the true process at that time.  
This guarantees **statistical consistency**: the empirical risk over the prefix converges to the population risk as more samples arrive, because the law of large numbers applies without bias from “removed” data.

From a *computational* angle, append‑only lets us maintain incremental statistics (e.g., sums, covariance) in O(1) per record using **online algorithms**.  Deletions would require recomputing or maintaining complex indexes—quadratic in the worst case.

Geometrically, the data set is a growing convex hull; adding points can only enlarge it, never shrink.  Algorithms that rely on convexity (e.g., support vector machines with linear kernels) preserve their guarantees because no previously satisfied constraints are violated.

**Elastic docs** complement this by allowing each record to carry its own metadata schema that may evolve.  The system treats a document as an *immutable snapshot*; new versions append under the same key but with a fresh hash.  This preserves **referential integrity** without locking, enabling concurrent readers and writers—critical for distributed ML pipelines.

*Non‑obvious insight*:  
Because deletes are impossible, one can use **count‑sketches** or other streaming sketches to recover exact counts of any feature value *without ever storing the raw data*.  The “no delete” property ensures that sketch updates remain monotonic, guaranteeing no negative estimates and simplifying error analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
