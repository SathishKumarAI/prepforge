---
qid: ing_fb282bd39a__fp__local
question: 'Explain: Traffic Spike Absorption — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 506
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:54-05:00'
sources: []
---

**Traffic‑Spike Absorption via CDNs – first‑principles view**

The core problem is *transient overload*: a sudden burst of requests inflates the demand \(D(t)\) far beyond the capacity \(C\) of any single origin server. If we model user arrivals as a Poisson process with rate \(\lambda(t)\), an instantaneous spike means \(\lambda(t)\gg C\). The system must keep latency bounded, i.e., maintain \(D(t)/C<1\).

A CDN solves this by *spatially replicating* the service across many edge nodes. Let each node have capacity \(c_i\) and be placed at distance \(d_i\) from a fraction \(p_i\) of users. The effective load on an origin is then

\[
L_{\text{orig}}=\sum_{i} \lambda(t)p_i\,\mathbf{1}_{\{\text{cache miss}\}},
\]

where the indicator captures whether content resides at node \(i\). Caching turns the indicator into a Bernoulli variable with success probability equal to the *hit ratio* \(h_i\). Thus

\[
L_{\text{orig}}=\sum_{i} \lambda(t)p_i(1-h_i).
\]

Because the hit ratios are high for popular objects (Zipf‑like popularity), the variance of \(L_{\text{orig}}\) shrinks dramatically: spikes that would otherwise hit the origin are absorbed locally. The CDN therefore performs a *probabilistic load reduction* that is optimal under convex cost functions—each cache placement minimizes expected squared delay.

**Non‑obvious insight:**  
The *variance* of origin load, not just its mean, governs spike absorption. By strategically placing caches where user locality overlaps with content popularity, we reduce the tail probability \(P(L_{\text{orig}}>C)\) far more than by merely increasing cache size. This subtle trade‑off between hit ratio and user distribution is often overlooked in naive CDN designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
