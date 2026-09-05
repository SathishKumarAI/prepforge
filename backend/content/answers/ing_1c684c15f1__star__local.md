---
qid: ing_1c684c15f1__star__local
question: 'Explain: Redundancy — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 356
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:08-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time fraud detection service that processed ~1 million transactions per day. One week after launch, a sudden spike in traffic caused the inference cluster to throttle and the latency doubled from 120 ms to 350 ms, pushing us past the SLA of 200 ms.

**Task:**  
I had to redesign the inference pipeline so it could sustain high load while guaranteeing sub‑200 ms response times and zero single points of failure for the next quarterly audit.

**Action:**  
First, I introduced a *redundant microservice* architecture: three identical GPU‑enabled containers behind an NGINX ingress with weighted round‑robin. I also implemented *canary routing* so 10% of traffic hit a new model version in parallel to measure performance. To avoid bottlenecks at the data layer, I switched from a monolithic PostgreSQL store to a sharded Redis cache keyed by user ID, which cut data lookup latency by ~40 %. Finally, I added an autoscaling policy that spun up additional replicas when CPU usage exceeded 70% for more than 30 s.

**Result:**  
After the rollout, average inference latency dropped to 140 ms and the system handled a 3× traffic surge with no downtime. The redundancy layer also reduced error rates from 0.5 % to <0.05 %. I learned that architectural simplicity—adding parallel stateless services and fast caching—often yields more robust reliability than complex monoliths, especially under unpredictable load spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
