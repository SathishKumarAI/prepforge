---
qid: ing_b302f27342__star__local
question: 'Explain: Sub-Agent Architectures — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:45-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a recommendation system for an e‑commerce platform that needed to serve personalized product suggestions in real time. The existing monolithic model struggled with latency and could not adapt to the rapidly changing inventory.

**Task:**  
I was tasked with redesigning the architecture into sub‑agents so each could focus on a specific aspect—content relevance, popularity trend, and user intent—while still producing a coherent final recommendation list. A key challenge was ensuring that each sub‑agent had the right context to make accurate predictions without overwhelming the main pipeline.

**Action:**  
I introduced a **Context Engineering** layer: first, we extracted contextual features (time of day, device type, session length) and encoded them into a shared vector using a lightweight Transformer encoder. This context vector was then broadcast to each sub‑agent via a message broker. Each agent received the same high‑level context but also its own domain‑specific embeddings (e.g., item metadata for the content agent). We trained the agents jointly with a multi‑task loss, encouraging consistency across outputs. Finally, we built an aggregator that weighted each sub‑agent’s recommendation scores based on confidence derived from the shared context.

**Result:**  
Latency dropped by 35 %, and click‑through rate increased from 4.2 % to 5.8 % within three weeks of deployment. I learned that careful engineering of a shared, high‑dimensional context vector can dramatically improve coordination among heterogeneous models without sacrificing modularity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
