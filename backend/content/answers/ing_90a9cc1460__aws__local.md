---
qid: ing_90a9cc1460__aws__local
question: 'Explain: The Big Shifts — Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 435
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:13-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were launching a “Research Radar” product that aggregates scientific papers and turns them into actionable insights for R&D teams. The challenge was to ingest millions of PDFs, extract structured metadata, rank relevance, and surface the latest trends in real time—all while keeping costs under $200k/month.

**Action (Design & Execution)**  
I took full ownership:  

1. **Data ingestion** – S3 + SQS for decoupled uploads; Lambda streams to Glue ETL that parses PDFs with Amazon Textract.  
2. **Feature extraction** – Boto3‑based SageMaker endpoints run a fine‑tuned BERT model, producing embeddings stored in DynamoDB (high‑throughput) and an Elasticsearch domain for semantic search.  
3. **Ranking & recommendation** – A Lambda function aggregates embeddings, applies a cosine‑similarity filter, then writes top‑10 results to an API Gateway endpoint backed by a Fargate microservice.  
4. **Scalability/Cost** – Auto‑scaling on demand for Lambda (cold starts <300ms) and DynamoDB provisioned capacity (auto‑scale). Spot instances for SageMaker training cut GPU cost 60%. Total monthly spend: $185k.

**Result**  
Within three months the product served 1,200 active users, increased research cycle time by 35% (from 12 days to 7.8 days), and reduced manual curation effort by 4,500 hours annually. The system’s 99.9% availability earned a “Customer Obsession” award from senior leadership.

**Reflection**  
The bar‑raiser will hear my deep dive into each AWS component, the data‑driven ROI, and how I iterated after an initial spike in Lambda errors—moving to VPC endpoints for better security and latency. This showcases ownership, technical depth, and a bias for action that delivers measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
