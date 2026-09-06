---
qid: ing_c5f4eb64f2__fp__local
question: 'Explain: Stage 3: Add Caching (100K-500K users) — Scalability | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 546
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:02:50-05:00'
sources: []
---

**Why a cache is inevitable**

A recommendation engine that serves *N* users must deliver *k* items per request.  
If each request triggers an on‑line model inference (≈ 10 ms) and the load is
\(L = N \times k\), the total compute time grows linearly with \(N\).  For
100 K–500 K users, even a modest \(k=10\) yields \(1\text{–}5\times10^6\)
inferences per second—far beyond what a single GPU cluster can sustain.
Thus we must *amortize* inference cost across many requests.

**Cache as an optimality principle**

The cache implements the **law of diminishing returns**:  
once a user’s top‑k list is generated, it remains valid for a short window
(\(t_{\text{ttl}}\)).  By storing the result, we replace \(O(1)\) expensive
model calls with an \(O(1)\) memory lookup.  This is a direct application of
the **locality principle** in computer systems: data that has been used
recently or will be reused soon should be kept nearby.

**Design constraints**

| Layer | Requirement |
|-------|-------------|
| **Cache key** | `user_id + model_version` to avoid stale results. |
| **Eviction policy** | LRU + TTL to balance freshness and memory usage. |
| **Consistency** | Write‑through updates when the underlying model is retrained. |
| **Scale** | Horizontal sharding (e.g., consistent hashing) so each node handles ~10 K users, keeping per‑node RAM < 4 GB. |

**Non‑obvious insight**

*The cache is not just a performance trick—it also changes the **data
distribution** seen by downstream analytics.*  
Because cached items are reused, the frequency of *unique* inference
requests drops sharply.  If analytics rely on per‑request logs (e.g., for
A/B testing), the raw clickstream becomes biased toward users with longer
session lifetimes.  Correcting for this requires a **de‑duplication layer** or
sampling strategy, otherwise model drift may be misdiagnosed.

In short, caching is a principled, scalable solution that turns an
intractable inference load into a manageable lookup problem while also
introducing subtle statistical effects that must be accounted for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
