---
qid: ing_cf1be51559__fp__local
question: 'Explain: The Gap Problem — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 392
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:20:42-05:00'
sources: []
---

**The Gap Problem – Hybrid Search**

When a query is posed, an information‑retrieval system must decide whether to answer it by (1) *exploiting* its own indexed corpus or (2) *exploring* external knowledge bases (e.g., LLMs, web APIs). The **gap problem** quantifies the cost of mis‑balancing these two modes: if we stay too deep in the local index, we risk missing relevant content (“locality gap”); if we query an external source too often, we incur latency and bandwidth costs (“exploration gap”).  

Formally, let \(c_{\text{loc}}\) be the expected retrieval cost per item from the local index, \(c_{\text{ext}}\) that of an external call, and \(p\) the probability that a query’s answer lies outside the local cache. The total expected cost is  
\[
E[C] = (1-p)\,c_{\text{loc}} + p\,c_{\text{ext}}.
\]
Optimizing \(E[C]\) under a latency constraint yields a threshold policy: only defer to external sources when the *utility* of the additional information outweighs the marginal cost. This mirrors **exploration–exploitation** trade‑offs in bandit theory and is fundamentally an instance of **dynamic programming** over a latent state (the “gap” between local knowledge and required answer).  

A non‑obvious insight: the gap can be *closed* by learning a lightweight predictor that estimates \(p\) from query features. Even a shallow model reduces \(E[C]\) dramatically, turning the hybrid system into an adaptive, cost‑aware search engine rather than a static fallback mechanism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
