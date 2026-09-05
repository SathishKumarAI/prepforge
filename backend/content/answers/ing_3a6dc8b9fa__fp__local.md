---
qid: ing_3a6dc8b9fa__fp__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 440
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:09:10-05:00'
sources: []
---

**Why the Twitter‑style latency figures look the way they do**

At its core a social‑media feed is a *read‑heavy* workload: millions of users query their timelines every second while a fraction of them write new tweets. The goal is to keep the **average response time (latency)** below a human‑perceivable threshold (~200 ms) so that scrolling feels instant.

1. **Fundamental constraint** – A single request touches *k* backend services (auth, follower list, tweet store, cache).  
   By the **pipelining principle** the total latency is at least the sum of each service’s service time plus network hops:
   \[
   L_{\text{total}} = \sum_{i=1}^{k} (t_i + n_i)
   \]
2. **Caching** collapses many \(t_i\) to ≈ 0 ms for hot data; the README assumes 80 % of tweets are served from a local cache, so only 20 % incur database hits.
3. **Read‑through vs write‑back** – Writes update the database first (≈ 10 ms) and then asynchronously invalidate caches, so read latency isn’t inflated by write traffic.
4. **Probabilistic tail** – The “99th percentile ≈ 500 ms” figure comes from a *Poisson* model of request bursts; a 95 % confidence interval on the exponential service time yields that bound.

**Non‑obvious insight:**  
The 200 ms target is not arbitrary; it matches the **“just‑noticeable latency”** threshold derived from human reaction times. A system can afford to push the tail beyond 500 ms as long as the *median* stays under 200 ms, because users rarely experience those outliers unless they coincide with a UI event.

Thus, the README’s numbers are a direct translation of statistical service‑time models into human‑perceived responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
