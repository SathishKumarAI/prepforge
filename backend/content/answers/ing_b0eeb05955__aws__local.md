---
qid: ing_b0eeb05955__aws__local
question: 'Explain: Evaluation plan — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 430
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:11-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a *Document‑Intelligence Pipeline* for a SaaS client that ingested ~200 k PDFs/month and needed to extract structured data (invoices, contracts) with <1% error rate.

**Action – Design & Execution**  
I scoped requirements: high throughput, zero downtime, GDPR compliance. I architected an **event‑driven pipeline** on AWS:

| Step | Service | Rationale |
|------|---------|-----------|
| Ingest | Amazon S3 + EventBridge | Durable storage + trigger |
| OCR & Layout | Amazon Textract (S3 output) | Managed, scalable text extraction |
| NLP & Entity Extraction | Amazon Comprehend Custom Entities + SageMaker inference | Fine‑tuned for domain terminology |
| Validation & Feedback | Lambda + DynamoDB | Real‑time scorecard and retraining loop |
| Alerting | CloudWatch Alarms + SNS | Immediate ops visibility |

I added a **feedback loop**: every 10 k processed docs, the model was re‑trained on misclassifications—improving accuracy from 92% to 99.4% in 6 weeks.

**Result**  
- Throughput hit 250 k docs/month with <2 min latency per doc.  
- Cost dropped 35 % versus a monolithic EC2 solution.  
- SLA met 99.9 % uptime; incident response time cut from 30 min to 5 min.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end stack, *dove deep* into model drift, quantified impact via A/B tests, and iterated quickly after a false‑negative spike. This experience underscores **Customer Obsession**, **Ownership**, and **Dive Deep**—the pillars that keep AI products delivering real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
