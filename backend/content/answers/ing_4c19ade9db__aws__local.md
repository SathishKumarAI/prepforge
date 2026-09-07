---
qid: ing_4c19ade9db__aws__local
question: 'Explain: So as in when something changes you — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 499
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:05-05:00'
sources: []
---

**Situation & Task**  
While leading a team that built the “Live‑Traffic” feature for our navigation app, we noticed that real‑time traffic data was stalling during peak hours—latency spiked to 3 s and map tiles were delayed by 1.2 s on average. The business required sub‑second tile refreshes to keep users engaged.

**Action (Design & Implementation)**  
- **Data Ingestion:** Shifted from a single Kafka broker to an *Amazon MSK* cluster with auto‑scaling topics, guaranteeing >10 kpps throughput.  
- **Real‑time Processing:** Deployed *AWS Lambda* functions triggered by Kafka streams; each function runs a lightweight inference model (SparkML‑converted) that predicts congestion probability per segment in <200 ms.  
- **Feature Store & Caching:** Persisted predictions to *Amazon DynamoDB Global Tables* for multi‑region read latency (<10 ms). Added an *ElastiCache Redis* layer to cache the most frequent 100k segments, cutting downstream reads by 70%.  
- **Tile Rendering Service:** Updated the tile generator to pull from the cache first; if miss, fall back to DynamoDB. Deployed behind *Application Load Balancer* with a *Lambda@Edge* function for edge‑caching in CloudFront, reducing user‑side latency to <400 ms.  
- **Observability & Scaling:** Instrumented with *Amazon CloudWatch Metrics*, set alarms on request latency >200 ms, auto‑scaling the Lambda concurrency to 5k during rush hours.

**Result**  
Latency dropped from an average of **3 s → 0.45 s** (≈85 % reduction). Tile refresh rate increased by **120 %**, boosting daily active users by **18 %** in three weeks. Cost stayed within budget, with a 12 % overall infrastructure cost decrease thanks to the cache layer.

**Reflection & Learning**  
I took full ownership of the incident and drove the end‑to‑end solution—demonstrating *Ownership* and *Dive Deep*. The biggest learning was that scaling compute alone isn’t enough; adding a smart caching layer (Invent & Simplify) delivered the largest performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
