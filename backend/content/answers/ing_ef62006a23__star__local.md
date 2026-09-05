---
qid: ing_ef62006a23__star__local
question: 'Explain: Main purposes — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 358
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:39-05:00'
sources: []
---

**Situation**  
While leading the deployment of a recommendation engine for a streaming platform, our API traffic spiked to 3 M requests per minute during peak hours, causing latency to rise from 120 ms to over 1 s and triggering several downstream cache invalidations.

**Task**  
I needed to design a rate‑limiting strategy that would protect the model inference service, keep response times under 200 ms for 95 % of users, and allow legitimate traffic bursts during promotions without compromising fairness or data privacy.

**Action**  
1. Implemented a sliding‑window algorithm using Redis sorted sets to track per‑user request counts over the last minute, ensuring sub‑millisecond lookup.  
2. Added adaptive bucket sizing: high‑priority subscribers were granted 30 % higher limits based on their subscription tier, while anonymous users shared a global cap.  
3. Integrated an exponential backoff policy that queued excess requests in RabbitMQ and replayed them after a randomized delay, preventing cache stampedes.  
4. Monitored key metrics (QPS, latency percentiles) with Prometheus and set up alerts to trigger automatic limit adjustments when traffic patterns shifted.

**Result**  
Latency dropped to 140 ms on average during peak periods, and the 95th‑percentile latency stayed below 220 ms for all user segments. The system handled a 40 % surge in promotional traffic without any service interruptions. I learned that combining per‑entity sliding windows with adaptive thresholds can balance protection and performance in real‑time ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
