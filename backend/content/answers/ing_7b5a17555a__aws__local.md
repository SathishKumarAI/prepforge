---
qid: ing_7b5a17555a__aws__local
question: 'Explain: Foundational Architecture — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 506
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:14-05:00'
sources: []
---

**Situation** – In my last role I led a team that had to build an internal “LLM Papers Cheatsheet” service: a searchable, continuously‑updated knowledge base of research papers for our AI product line. The goal was to reduce engineer onboarding time by 40 % and cut manual curation effort from 10 hrs/week to under 1 hr.

**Task** – Design a foundation architecture that ingests PDFs, extracts embeddings, indexes them, and serves fast semantic search with minimal latency while staying cost‑effective.

**Action**  
- **Data ingestion & preprocessing:** AWS Glue crawls an S3 bucket (≈ 5 TB of PDFs) → Lambda triggers Amazon Textract for OCR.  
- **Embedding generation:** SageMaker endpoints (GPU p4d.xlarge) run a pre‑trained `sentence-transformers/all-MiniLM-L6-v2` model; results stream to DynamoDB.  
- **Indexing & search:** We built an OpenSearch cluster (3 m5.large.search nodes, auto‑scaling) with the `dense_vector` field for semantic similarity.  
- **API layer:** API Gateway + Lambda authorizer → ECS Fargate container that queries OpenSearch and returns top‑k results in < 200 ms.  
- **Automation & monitoring:** Step Functions orchestrate daily ingestion; CloudWatch dashboards track latency, cost, and error rates.  

**Result** – Within 3 months we achieved a 45 % reduction in onboarding time, cut manual curation from 10 hrs to 0.8 hrs/week, and kept monthly spend at $1.2K (≈ $0.03 per query). The system handled 50 k queries/day with < 250 ms latency.

**Leadership Principles** – *Customer Obsession* (engineering teams get knowledge instantly), *Ownership* (end‑to‑end pipeline built and maintained by us), *Dive Deep* (tuned embeddings, vector index parameters), *Bias for Action* (rapid prototyping in 2 weeks), and *Deliver Results* (quantified impact).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
