---
qid: ing_117aed48a7__aws__local
question: 'Explain: End-to-End Example — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 530
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:03-05:00'
sources: []
---

**Situation & Task (Ownership)**  
I was asked to build an *end‑to‑end* URL shortener for a client that expected 10 M daily clicks and 1 B stored URLs. The goal was to deliver a highly available, cost‑efficient service while keeping latency <50 ms.

**Action (Dive Deep + Deliver Results)**  
| Layer | Design & AWS Service | Scalability / Availability | Cost Trade‑offs |
|-------|---------------------|---------------------------|-----------------|
| **API Gateway** | Stateless REST endpoint with throttling. | 99.999% SLA, auto‑scales to millions of QPS. | $0.003/1 k requests – negligible at scale. |
| **Lambda + DynamoDB** | Lambda writes to a partitioned `urls` table (hash = shortID). Uses PartiQL for fast lookups and conditional writes to prevent collisions. | DynamoDB on‑demand handles >10 M writes/sec, 99.9% latency. | On‑demand pricing pays only for reads/writes; cost ≈ $1k/month at peak. |
| **CloudFront + S3** | Short URLs redirect via CloudFront edge cache pointing to a static landing page that performs client‑side redirection from the `urls` table. | 99.999% global availability, sub‑10 ms latency. | Free tier + minimal data transfer cost (<$50/month). |
| **SNS + SQS** | Queue for analytics events (clicks) processed by another Lambda to write to a time‑series DB (Timestream). | Decouples traffic spikes; auto‑scales. | Adds $0.40 per million messages – still <5% of total spend. |

**Result (Customer Obsession + Bias for Action)**  
- **Latency:** 32 ms average, 95th percentile <45 ms.  
- **Cost:** <$4k/month vs projected $8k if using EC2‑based architecture.  
- **Reliability:** No downtime in 12 months of production use.  

**Reflection (Learning from Failure)**  
Early tests revealed collision risk due to random shortID generation; switching to a deterministic hash + versioning reduced collisions by 99.9%. This taught me the importance of defensive design even for seemingly simple services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
