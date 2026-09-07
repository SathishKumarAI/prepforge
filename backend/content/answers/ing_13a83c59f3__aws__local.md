---
qid: ing_13a83c59f3__aws__local
question: 'Explain: Unified, High-Relevance Search — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 553
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:40-05:00'
sources: []
---

**Unified, High‑Relevance Search – Glean MCP Server**

**Situation / Task**  
When I joined Glean’s product team, the search experience was siloed: users had to hit separate “Docs”, “People”, or “Teams” tabs and often got irrelevant results. The leadership goal was to **unify search into a single endpoint that delivered high‑relevance answers in under 200 ms for 100 M daily active users** (Customer Obsession + Deliver Results).

**Action**  
I architected a **micro‑service stack on AWS**:

| Component | Service | Rationale |
|-----------|---------|-----------|
| Ingestion & ranking | **AWS Kinesis + Lambda** | Real‑time pipeline for indexing changes. |
| Vector store | **Amazon QLDB + DynamoDB (GSI)** | Immutable logs + fast key/value access. |
| Embedding generation | **SageMaker Endpoint** (FastText/Transformer) | On‑demand embeddings, auto‑scaling. |
| Search & retrieval | **OpenSearch Service** with **Vector Scoring** | Near‑real‑time similarity search, 99.9 % availability. |
| API gateway | **API Gateway + Lambda@Edge** | Global low‑latency routing. |

I introduced **feature‑flag driven A/B tests** to iterate on ranking algorithms (BM25 + semantic vectors). The system was built with **Infrastructure as Code (CloudFormation/Terraform)** for reproducibility, and I set up a **Cost Explorer dashboard** to keep spend under \$0.15 per query.

**Result**  
- Search latency dropped from 1.2 s to **<200 ms** (30× improvement).  
- Click‑through rate increased by **22%**, and user satisfaction scores rose from 4.1/5 to 4.6/5 in a post‑launch survey.  
- Operational cost stayed within the budget, with a 12% reduction after auto‑scaling tuning.

**Learnings & Bar‑raiser cues**  
I owned every layer: from data schema design to monitoring dashboards. By **dive‑deeping** into OpenSearch’s vector scoring I discovered a memory bottleneck; switching to `KNN` indices solved it, proving the value of deep technical ownership. When a batch ingestion failure caused stale results, I documented root causes and implemented automated retraining, turning a failure into a learning loop.

> **Leadership Principles:** *Customer Obsession, Ownership, Dive Deep, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
