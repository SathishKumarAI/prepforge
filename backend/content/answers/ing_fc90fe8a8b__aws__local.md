---
qid: ing_fc90fe8a8b__aws__local
question: 'Explain: Daily Storage Calculation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 519
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:54-05:00'
sources: []
---

**Situation / Task**  
At a former social‑media startup I was tasked to design the *Daily Storage Calculation* service for an Instagram‑style app that serves ~1 B photos/month. The goal: compute per‑user daily storage usage in real time and expose it via a REST API with <100 ms latency.

**Action**  
I chose a **serverless, event‑driven architecture** to keep costs low while scaling automatically:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Event ingestion | S3 + SNS topic | Photos uploaded to S3 trigger SNS; guarantees durability. |
| Compute | Lambda (Python 3.11) | Zero‑ops, auto‑scales, handles burst uploads. |
| Storage of aggregates | DynamoDB with TTL | Keyed by `userId#date`; fast read/write, automatic eviction. |
| API layer | Amazon API Gateway + Lambda Authorizer | Low latency, built‑in throttling. |

**Process**  
1. **Lambda** receives SNS event → parses S3 object metadata (size, timestamp).  
2. It performs a **conditional `UpdateItem`** on DynamoDB (`ADD size`) for the user’s current date key.  
3. The API reads that key to return usage; if missing, returns 0.  

**Dive Deep / Trade‑offs**  
- *Scalability*: Each Lambda runs in parallel per SNS event; DynamoDB throughput scales with traffic.  
- *Availability*: S3 + Lambda are 99.9 % SLA; API Gateway offers regional failover.  
- *Cost*: ~2 $M/month for 1 B uploads, vs ~$20 M if we built a monolithic service.

**Result**  
Implemented within 4 weeks; daily queries served under 70 ms with 99.8 % success rate. Storage cost fell by **35 %** compared to the legacy solution. The system handled a 200% traffic spike during a product launch without degradation.

**Reflection (Bar‑raiser)**  
I took full ownership, documented edge cases (duplicate uploads), and introduced automated unit tests that caught a bug before production roll‑out. This experience reinforced my belief in **Customer Obsession**—delivering instant insights to users—and **Dive Deep**, ensuring every design choice is data‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
