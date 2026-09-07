---
qid: ing_64008e5793__aws__local
question: 'Explain: Active-active — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 506
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:12-05:00'
sources: []
---

**Active‑active architecture for a global ML feature store**

- **Leadership Principles:** *Ownership* – I drove the redesign end‑to‑end; *Dive Deep* – I dissected latency and consistency trade‑offs.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Our model training platform served 1 M daily users across 3 regions. The single‑region feature store (RDS + S3) hit 200 ms SLA in Asia, breaking the 100 ms target. | Reduce latency & increase availability for ML inference. | • Adopted an **active‑active** design: two DynamoDB Global Tables (US‑East, EU‑West) with cross‑region replication. <br>• Implemented a *FeatureCache* service in ECS Fargate that pulls from local table and falls back to the remote one on read‑miss. <br>• Added a CloudWatch anomaly detector; on 10 % spike, auto‑scales Lambda readers by 50 %. | • Latency dropped to **<80 ms** globally (95th percentile). <br>• Availability improved from 99.9 % to 99.999 % (five nines) during a region outage. <br>• Cost rose only 12 % due to efficient caching and on‑demand scaling. |

**Technical notes**

- *AWS services:* DynamoDB Global Tables, Fargate, Lambda, CloudWatch, Route 53 latency routing.
- *Scalability:* DynamoDB auto‑scales on write capacity; cache shards in ECS allow horizontal scaling.
- *Availability:* Dual‑region replication + health checks keeps data fresh and reduces read‑latency.
- *Cost trade‑offs:* Extra storage & cross‑region traffic (~$200/month) justified by 3× performance lift.

**Bar‑raiser takeaways**

- **Ownership:** Led from requirement gathering to production rollout.  
- **Dive Deep:** Benchmarked every component; tuned provisioned throughput and cache TTLs.  
- **Quantified impact:** Measured latency, SLA, cost.  
- **Learning from failure:** Initial rollout had stale reads; fixed by adding a version stamp in the feature payload and invalidating cache on write.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
