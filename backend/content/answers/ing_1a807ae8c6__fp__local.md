---
qid: ing_1a807ae8c6__fp__local
question: 'Explain: Push CDN Use-Case: — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 422
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:02:37-05:00'
sources: []
---

**Push‑CDN: The “push” of content is the natural solution to the *latency–availability* trade‑off in distributed systems.**  
When a user requests page A, a pull CDN must route that request through the origin (or a tiered cache), incurring RTT and potential bottlenecking at the origin if many users hit the same edge node simultaneously. A push CDN pre‑emptively “pushes” every asset to all edges whenever the origin changes. Thus any subsequent request is served locally, eliminating the variable network hop and guaranteeing **constant‑time** delivery.

From an optimization viewpoint this is a classic *minimizing expected response time* problem under a stochastic traffic model:  
- Let \(T_{\text{pull}} = \lambda\,\mathbb{E}[RTT] + (1-\lambda)\,L_{\text{origin}}\) where \(\lambda\) is the probability of cache hit.  
- For push, \(T_{\text{push}} = L_{\text{edge}}\), independent of traffic.  
If \(\lambda < 1\) and RTT dominates, pushing strictly improves \(T\). The cost shifts from runtime to a *one‑time* update bandwidth, which is amortized over the product’s lifetime.

**Non‑obvious insight:** A push CDN can be viewed as an *information‑theoretic broadcast* of the state of the origin. By treating each asset version as a message and edges as receivers, we reduce uncertainty at every node to zero instantly. This perspective explains why push CDNs are especially effective for highly dynamic content (e.g., real‑time dashboards) where traditional pull caching would constantly miss.

In short, pushing turns latency into a deterministic constant by shifting the expensive operation from each request to the infrequent update cycle—exactly what modern web services need when scaling globally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
