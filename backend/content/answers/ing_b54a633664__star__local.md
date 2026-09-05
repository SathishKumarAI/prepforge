---
qid: ing_b54a633664__star__local
question: 'Explain: User Preference Service — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 389
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:06-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new recommendation engine that pushed personalized content to millions of users daily. The marketing team noticed a spike in churn after the first week because push notifications were too frequent or irrelevant, and our existing notification queue was choking under peak traffic.

**Task:**  
I had to design a scalable User Preference Service that could decide *when*, *what*, and *how often* to notify each user while keeping latency below 200 ms and throughput above 10k ops/sec. The service also needed to respect opt‑in preferences, GDPR rules, and allow A/B testing of notification strategies.

**Action:**  
I built a microservice in Go using gRPC for low overhead, backed by Redis Streams for real‑time queuing and PostgreSQL for long‑term preference storage. I introduced a Bayesian relevance model that weighted user actions (clicks, dwell time) against content metadata to compute a *notification score*. A scheduler with rate‑limiting per user group throttled bursts during peak hours. For compliance, the service exposed an API to toggle opt‑in flags and logged all decisions to an audit stream. I also added a lightweight metrics dashboard (Prometheus + Grafana) to monitor delivery latency and open rates.

**Result:**  
Within three weeks of rollout, notification latency dropped from 450 ms to 120 ms, throughput increased by 35%, and the churn rate on notified users fell from 7% to 3%. A/B tests showed a 12% lift in engagement for notifications sent at personalized times. I learned that blending real‑time scoring with fine‑grained rate control can dramatically improve user experience while staying within strict SLA constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
