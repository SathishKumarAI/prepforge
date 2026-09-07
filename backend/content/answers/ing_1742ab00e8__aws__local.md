---
qid: ing_1742ab00e8__aws__local
question: 'Explain: Vision-Language Models for Document Understanding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 502
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:17-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at a fintech startup to build an internal document‑understanding engine that could ingest invoices, receipts, and contracts in PDF or scanned form, extract key fields, and surface them for downstream analytics. The goal was 95 % extraction accuracy while keeping latency under 3 s per document.

**Action**  
*Customer Obsession & Ownership*: I first mapped the customer journey—data scientists needed clean tabular data, compliance officers required audit‑ready logs, and the legal team wanted traceability of decisions.  
*Dive Deep*: I chose a Vision‑Language model (CLIP + BERT) fine‑tuned on 200k labeled documents, using **Amazon SageMaker** for training with spot instances to cut cost by 40 %. For inference I deployed a multi‑node **AWS Lambda@Edge** chain:  
1. **S3** triggers upload → **Lambda** calls **Amazon Textract** for OCR and passes the image + extracted text to the model hosted on an **ECS Fargate** cluster behind an **Application Load Balancer** (ALB).  
2. Results are stored in a **DynamoDB** table with versioned logs; audit trails feed into **AWS CloudTrail**.

*Bias for Action & Invent & Simplify*: I added a lightweight “confidence filter” that rerouted low‑certainty outputs to human review, reducing false positives by 30 % without adding latency.  

**Result**  
- Extraction accuracy: **97 % F1 score** (up from baseline 82 %).  
- Latency: **2.8 s average** (below SLA).  
- Cost: $0.03 per document vs. competitor’s $0.12.  
- Adoption: 4 teams onboarded within two weeks, yielding a projected $1.5 M annual uplift in data‑driven decision making.

**Learning & Bar‑Raiser Insight**  
I documented all failure modes (e.g., OCR errors on low‑contrast scans) and built automated alerts. The bar‑raiser would note my end‑to‑end ownership, quantitative impact, deep technical trade‑offs, and proactive learning loop—key Amazon qualities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
