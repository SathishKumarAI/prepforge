---
qid: ing_d3fd90bfc6__aws__local
question: 'Explain: This would have a length of 5 — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 583
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:53-05:00'
sources: []
---

**Scenario (S)**  
I was asked to design a “Google‑Maps‑style” system that can ingest real‑time traffic data, compute optimal routes for millions of users, and scale globally.

**Task (T)**  
Deliver an end‑to‑end architecture that supports 10 M concurrent routing requests/day with <200 ms latency, while keeping the cost under $5 M/year.

**Action (A)**  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **Ingress** | API Gateway + Lambda@Edge | Global edge caching reduces round‑trip; serverless scales to 10 k RPS per region. |
| **Data Ingestion** | Kinesis Data Streams → Glue ETL → S3 (raw) | Handles bursty vehicle telemetry; Glue transforms into Parquet for analytics. |
| **Routing Engine** | EC2 Auto Scaling + Spot Fleet + SageMaker Endpoint | Model inference (Dijkstra/Graph‑based + ML‑based congestion predictor). Spot fleet cuts compute cost 70 %. |
| **Caching & Edge** | CloudFront + ElastiCache Redis | Pre‑compute popular routes; cache for <30 s TTL to keep latency low. |
| **Analytics & Feedback Loop** | Athena on S3 + QuickSight | 10 % improvement in route accuracy after each week’s retraining (validated by A/B test). |

*Scalability*: Kinesis shards auto‑scale, EC2 autoscaling group reaches 200 instances during peak traffic.  
*Availability*: Multi‑AZ deployment; Route53 health checks for failover.  
*Cost*: Rough estimate – $1.8 M/year for compute + $0.3 M for data transfer; total <$5 M.

**Result (R)**  
Deployed prototype in 4 months, achieved <180 ms average latency, and reduced fuel‑usage estimates by **12%** for users in a pilot city. The system handled 15 M routing requests/day during beta with no outages.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Built a real‑time routing service that lowered commute times.  
- **Ownership & Dive Deep** – Handled all layers from ingestion to ML inference; continuously monitored metrics and tuned costs.  
- **Bias for Action** – Delivered MVP in 4 months, iterating fast based on A/B test results.

Bar‑raiser would listen for: quantified impact (12% fuel savings), deep dive into trade‑offs (Spot vs On‑Demand), and learning from early latency spikes that led to adding Redis caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
