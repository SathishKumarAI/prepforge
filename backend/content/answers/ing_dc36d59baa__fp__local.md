---
qid: ing_dc36d59baa__fp__local
question: 'Explain: Other notes — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 403
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:25-05:00'
sources: []
---

**Why a “hit‑counter” must be *probabilistic* in large‑scale ML systems**

When every request to a service is logged (e.g., Twitter’s tweet view counter), the data volume quickly exceeds storage and CPU limits.  
The fundamental problem: **estimate cardinality**—the number of distinct users who have seen an item—while using sub‑linear memory.

1. **Optimization principle**  
   The cost function is *memory*; we can tolerate a bounded error ε. By Chernoff bounds, the variance of a hash‑based sketch shrinks as 1/√m, where m is the number of counters. Choosing m ≈ log(1/δ)/ε² gives ε‑accuracy with probability 1–δ, far cheaper than storing every user ID.

2. **Information theory**  
   Each counter holds *k* bits. The entropy of a uniform hash over N users is log₂N; compressing to k bits loses information but preserves the *rank order* of frequencies—exactly what a hit‑counter needs (top‑K queries).

3. **Geometry**  
   Hash outputs map users onto points on a high‑dimensional hypercube. Counting distinct points approximates the volume of that cube, which is exactly the cardinality estimate.

### Non‑obvious insight  
A *single* hash function can be reused across many counters by exploiting *minwise independence*: the minimum hashed value among all users seen so far yields a tight estimator (HyperLogLog). This lets Twitter maintain millions of counters in a few megabytes, trading negligible accuracy loss for massive scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
