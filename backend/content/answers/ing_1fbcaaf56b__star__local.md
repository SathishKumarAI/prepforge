---
qid: ing_1fbcaaf56b__star__local
question: 'Explain: UBER System design | OLA system design | uber architecture | amazon
  interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 406
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:54-05:00'
sources: []
---

**Situation**  
At my previous company we were tasked with building a ride‑hailing platform for a mid‑size city that had just started using smartphones. The market already had a local player, OLA, and we needed to match or beat their response time while keeping the system cost‑effective.

**Task**  
Design an end‑to‑end architecture that could handle 20k concurrent users, deliver real‑time driver–passenger matching within 3 seconds, and scale to 50k rides per day without exceeding a $5 M annual budget.

**Action**  
I broke the system into three layers:  
1. **Ingress & API Gateway** – NGINX + AWS ALB with request throttling; used Redis for rate‑limiting.  
2. **Microservices** – Stateless services in Go (driver location, fare calculation, matching) behind a Kubernetes cluster. For matching I implemented a hybrid of spatial hashing (geohash buckets) and a priority queue to quickly find the nearest driver within a 5 km radius. The queue was backed by Aerospike for low‑latency writes/reads.  
3. **Event Bus** – Kafka handled ride lifecycle events; each event triggered async updates to DynamoDB and a Spark job that recomputed surge multipliers every minute. For cost control, I auto‑scaled the Kubernetes nodes based on CPU thresholds and used spot instances for non‑critical workers.

**Result**  
The platform launched 4 weeks early, achieved an average match latency of 2.1 s (95th percentile <3 s), and handled a peak of 35k rides/day with only $4.8 M in yearly cloud spend. I learned that coupling spatial indexing with event‑driven microservices delivers both speed and scalability while keeping operational costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
