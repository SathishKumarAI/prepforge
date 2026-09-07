---
qid: ing_3b8b3206c9__aws__local
question: 'Explain: Best Practices — Pessimistic vs Optimistic Locking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 548
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:01-05:00'
sources: []
---

**Situation & Task**  
I led the migration of a recommendation engine from an on‑premise PostgreSQL cluster to **Amazon Aurora Serverless v2** for our e‑commerce platform. The service handled 5 M concurrent users and required sub‑ms latency for personalized product scores. During load testing we hit a 12 % increase in write conflicts when multiple services updated the same user’s preference table, causing stale recommendations and customer complaints.

**Action**  
I evaluated **pessimistic vs optimistic locking**:

| Technique | AWS Service | How it Works | Trade‑offs |
|-----------|-------------|--------------|------------|
| Pessimistic | Aurora RDS transactions + row locks (`SELECT … FOR UPDATE`) | Locks the row until commit, guaranteeing no concurrent writes. | Higher latency under contention; can block readers → reduced throughput. |
| Optimistic | DynamoDB conditional writes (attribute version) | Writes succeed only if the stored `version` matches the expected value; otherwise retry. | Lower lock overhead, higher concurrency; risk of retries and eventual consistency issues. |

I chose **optimistic locking** with DynamoDB for high‑volume preference updates because:

* **Scalability:** DynamoDB scales horizontally; conditional writes add negligible cost (~$0.25 per 1 M writes).  
* **Availability:** No blocking readers; throughput remains stable even under spikes.  
* **Cost:** Avoided Aurora’s expensive lock contention costs and reduced RDS instance hours by 35%.  

Implementation steps:

1. Added a `version` attribute to the preference item.  
2. Wrapped updates in an application‑side retry loop with exponential backoff (max 3 attempts).  
3. Monitored *ConditionalCheckFailed* metrics; after tuning, conflict rate dropped from 12 % to <0.5 %.  

**Result**  
- Latency for recommendation updates fell from 180 ms to 45 ms.  
- Throughput increased by 4× (from 120k TPS to 480k TPS).  
- Customer‑reported stale recommendations decreased by 92 %, boosting NPS from 78 to 86 in two months.

**Reflection**  
This project taught me that **ownership** means selecting the right trade‑off for business impact, and **dive deep** requires profiling real workloads. Future iterations will experiment with *optimistic locking + DynamoDB Streams* for eventual consistency corrections if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
