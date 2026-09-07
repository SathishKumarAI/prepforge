---
qid: ing_26e9dd601f__aws__local
question: 'Explain: OCR and Layout Analysis'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 426
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:50-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to extract structured data from millions of invoices for a retail client. The challenge was twofold: accurate OCR and preserving the document layout so downstream analytics could distinguish tables, headers, and signatures.

**Action**  
1. **Ownership + Dive Deep** – I mapped the end‑to‑end pipeline in a single CloudFormation stack to eliminate silos.  
2. **Technical design** –  
   * **S3** for raw PDFs (≥ 10 TB) with versioning and lifecycle policies.  
   * **AWS Textract** (Document Text Detection + Table & Form Analysis) for OCR, coupled with a custom **Amazon SageMaker** model that post‑processes confidence scores and corrects layout errors using a rule‑based engine.  
   * **Step Functions** orchestrates parallel jobs; each invoice triggers a Lambda that writes results to DynamoDB (partition key = invoice_id).  
3. **Scalability & Cost** – Auto‑scaling via Textract’s on‑demand mode keeps latency < 30 s per doc, while batching 100 PDFs at a time reduces per‑doc cost by ~35%. Estimated spend: $0.50/GB for storage + $1.20/10k pages OCR ≈ **$120K/month** versus legacy $300K.  
4. **Bias for Action & Deliver Results** – Deployed in 6 weeks, achieving 99.2 % text accuracy and 97 % table structure fidelity (vs 85 % baseline).  

**Result**  
The client saved **≈$180K annually**, cut downstream processing time by 70%, and gained a single source of truth for analytics. I documented lessons on model drift, adding an automated retraining trigger after every 50k invoices, ensuring sustained accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
