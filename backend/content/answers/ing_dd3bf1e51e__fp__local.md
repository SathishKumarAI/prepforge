---
qid: ing_dd3bf1e51e__fp__local
question: 'Build a rate limiter. Every ten minutes I''ll add a requirement: per-tenant
  limits, burst allowances, then a sliding window. How do you keep your code from
  collapsing?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 548
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:47-05:00'
sources: []
---

**Why a sliding‑window limiter can collapse**

A naïve implementation keeps a list of timestamps per tenant and scans it every request.  
With *n* requests in the last ten minutes this is **O(n)** per call – a quadratic blow‑up when the tenant hits its burst limit.

---

### 1. The fundamental problem

We must enforce a constraint on the *average rate* over an interval while still allowing short bursts.  
Mathematically, we want to keep the *integral* of the request‑rate function below a threshold *R* for any sliding window *T*.

This is a classic **online convex optimization** problem: at each step we decide whether to accept a point (request) so that the cumulative “cost” never exceeds a linear budget.

---

### 2. Why a bucketed counter works

Divide time into fixed buckets of size Δ (e.g., 1 s).  
For each tenant maintain an array `c[0…k-1]` where *k = T/Δ*.  
On request:

1. Identify the current bucket *b*.
2. Add one to `c[b]`.
3. Compute the sum of all buckets → O(k) per request.

Choosing Δ ≈ T / 10⁴ keeps k small (≈ 100 for a ten‑minute window), so the per‑request cost is constant.

**Key insight:** The bucket size trades off memory against precision; as Δ→0 we recover an exact sliding window, but in practice a few milliseconds of granularity suffices because the rate limit itself is coarse (e.g., 1 req/s).

---

### 3. Preventing collapse

* **Lazy expiration** – only recompute the sum when the oldest bucket rolls over; otherwise reuse the previous total.
* **Atomic per‑bucket updates** – use lock‑free counters or a small shard per tenant to avoid contention.
* **Dynamic Δ adjustment** – monitor peak load; if `k` grows, split tenants into sub‑buckets (hierarchical counting).

---

### 4. One non‑obvious trick

Instead of summing all buckets on every request, maintain a *running total* and only adjust it when the bucket changes:

```text
total += delta_of_current_bucket - delta_of_oldest_bucket
```

Thus each request is **O(1)** regardless of *k*.  
This subtle optimization turns a potentially linear algorithm into a constant‑time one, keeping your rate limiter from collapsing even under bursty tenants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
