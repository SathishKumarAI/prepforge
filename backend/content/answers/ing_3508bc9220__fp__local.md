---
qid: ing_3508bc9220__fp__local
question: 'Explain: Comparison — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 509
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:57:19-05:00'
sources: []
---

**Why cache matters in machine‑learning systems**

Every inference request must traverse a *pipeline*: feature extraction → model lookup → post‑processing. The most expensive step is usually the *model* or *feature store*, both of which are **stateless but heavy** (GPU memory, disk I/O, network latency). Caching turns a repeated computation into an O(1) lookup, saving time and cost.

**Fundamental trade‑off: latency vs. freshness**

Let  
- \(L_c\) = latency of cache hit,  
- \(L_f\) = latency of full pipeline,  
- \(p\) = probability that a request hits the cache,  
- \(t_{age}\) = age of cached data.

Expected latency  
\(E[L] = p\,L_c + (1-p)\,L_f\).  
If stale data is unacceptable, we must refresh before \(t_{age}\) exceeds the model’s *staleness budget*. This is a classic **optimization** problem: choose cache size and eviction policy to minimize \(E[L]\) subject to memory constraints.

**Key strategies**

| Strategy | How it works | When it shines |
|----------|--------------|----------------|
| **LRU (Least‑Recently‑Used)** | Evict item with oldest access time. | Hot, bursty workloads. |
| **LFU (Least‑Frequently‑Used)** | Evict least accessed key. | Stable popularity distribution. |
| **Time‑to‑Live (TTL)** | Expire after fixed duration. | Periodic model updates. |
| **Segmented LRU** | Separate hot and warm segments. | Mixed workloads with clear “core” items. |

**Non‑obvious insight**

Most designers treat cache as a *passive* buffer, but in ML it can be an *active participant* in the training loop: by serving cached gradients or intermediate activations, you reduce redundant back‑prop passes, effectively turning your inference cache into a **distributed checkpointing system**. This dual role is rarely exploited yet yields significant speed‑ups for online learning pipelines.

In short, a well‑chosen caching policy turns the *statistical regularity* of request patterns into tangible latency and cost savings, while respecting the freshness constraints that ML models impose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
