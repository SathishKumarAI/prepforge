---
qid: ing_bbaca1f934__aws__local
question: 'Explain: 🔄 Living Book — Ai System Design Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 402
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:20-05:00'
sources: []
---

**Living Book – AI‑Powered Knowledge Graph**

*Leadership Principles:* **Customer Obsession** & **Ownership**

**S**ituation – Our product team needed a dynamic FAQ that updates automatically as new content appears in our knowledge base.  
**T**ask – Design an end‑to‑end system that ingests documents, extracts entities, and surfaces contextually relevant answers to users in real time.  
**A**ction – I architected a serverless pipeline:  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest & OCR | S3 + Textract | Cost‑effective bulk processing |
| NLP & Entity Linking | Comprehend + SageMaker inference (custom NER model) | High accuracy, auto‑scaling |
| Knowledge Graph | Neptune (graph DB) | Native graph queries, sub‑second latency |
| API Gateway + Lambda | API Gateway + Lambda | Zero‑capacity provisioning, pay per request |
| Caching & Search | CloudFront + Elasticsearch | Low‑latency retrieval, full‑text search |

**R**esult – Within 3 months, the Living Book reduced support tickets by **42%** (from 12k to 7k/month) and cut average resolution time from **8 min** to **2.5 min**. The system processed ~1M documents yearly with an estimated $4K/month cost versus a projected $25K for a monolithic deployment.

*Bar‑raiser notes:* I demonstrated deep ownership by driving the MVP, diving into model tuning (precision 0.92), and learning from early failures—adding a fallback rule set that improved recall by 8% without hurting precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
