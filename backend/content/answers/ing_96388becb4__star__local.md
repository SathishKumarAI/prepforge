---
qid: ing_96388becb4__star__local
question: 'Explain: Challenges: — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 322
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:16-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for deploying a real‑time fraud detection model into the payment gateway used by a fintech startup. The system originally ran on a stateless microservice that processed each transaction independently, but we started seeing a spike in false negatives after the rollout.

**Task:**  
I needed to reduce the false negative rate from 12% to under 5% while keeping latency below 50 ms and ensuring the service could scale to 10k transactions per second.

**Action:**  
I introduced a lightweight stateful layer using Redis Streams to maintain short‑term context (e.g., recent transaction history per card). The model was wrapped in an inference container that pulled the latest context from Redis, ran the score, and updated the stream with the new observation. I added circuit‑breaker logic so if Redis latency spiked, the service would fall back to stateless mode. We also implemented a Canary rollout over 1% of traffic, monitored A/B metrics, and automated rollback thresholds.

**Result:**  
The false negative rate dropped to 3.8%, while average inference time stayed at 42 ms. Traffic scaling was seamless; we handled 12k TPS during peak hours with no outages. I learned that a hybrid stateless‑stateful approach can deliver both speed and richer feature context, but requires careful fallback strategies and observability around the state store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
