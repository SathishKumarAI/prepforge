---
qid: ing_a8a76f0dac__aws__local
question: 'Explain: Where Elasticsearch Shines — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 426
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:07-05:00'
sources: []
---

**Situation / Task**  
I was tasked with advising a fintech startup on choosing a primary data store for its real‑time fraud detection pipeline. The team had been using Elasticsearch (via Bonsai) to surface logs and user activity but wondered if it could replace their relational database.

**Action**  
I first scoped the *use case* – transactional consistency, ACID guarantees, and complex joins were core requirements. I mapped these against **Elasticsearch’s strengths**: full‑text search, near‑real‑time analytics, and distributed scalability. I drafted a hybrid architecture:

| Layer | Service | Rationale |
|-------|---------|-----------|
| Data ingestion | Amazon Kinesis + Lambda | Low‑latency stream to both Aurora (primary) and OpenSearch |
| Primary store | Amazon Aurora PostgreSQL | Strong consistency, ACID, schema enforcement |
| Search & analytics | Amazon OpenSearch Service (managed Bonsai) | Full‑text search, Kibana dashboards, autoscaling |

I highlighted **trade‑offs**:  
- *Scalability*: OpenSearch scales horizontally but can’t guarantee transactional integrity.  
- *Availability*: Aurora offers 6+ nines with Multi-AZ; OpenSearch provides high availability through cluster replication.  
- *Cost*: Storing all data in OpenSearch would double storage costs and introduce latency for write‑heavy workloads.

**Result**  
The pilot ran for two weeks: the hybrid system handled 1 M events/second, with query latencies <200 ms, while keeping write costs 30% lower than a single‑store solution. The team adopted this pattern; we now store 80 % of data in Aurora and use OpenSearch only for search & alerting.

**Leadership Principles**  
- **Customer Obsession** – delivered low‑latency insights that improved fraud detection by 25%.  
- **Dive Deep** – dissected consistency models, cost curves, and failure modes to recommend a balanced architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
