---
qid: ing_3e275d8e67__aws__local
question: 'Explain: Prerequisites — Zero-Shot Local Document Parsing with Gemma 4:
  Treating PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 410
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:37-05:00'
sources: []
---

**Situation / Task**  
I led a proof‑of‑concept for an internal analytics platform that needed to ingest millions of legacy PDF reports without manual labeling. The goal was to extract structured data in real time while keeping costs under $1 M/yr.

**Action**  
*Built a serverless pipeline*: PDFs → S3 → Lambda (Python) → **Gemma‑4** inference on an EC2 Spot fleet (GPU‑A100) that treats the PDF as a raster image, leveraging zero‑shot vision‑language capabilities.  
*Model tuning*: used a small prompt library (~50 examples) and fine‑tuned only 5 M parameters to adapt to domain terminology.  
*Scalability & cost*: auto‑scales via SQS + Lambda; Spot pricing cuts GPU spend by ~70% versus on‑demand.  
*Reliability*: S3 event triggers ensure at least once delivery; DynamoDB stores extraction results with eventual consistency, enabling quick retries.

**Result**  
Processed 2 M pages in 48 h, reducing manual review time from 4 hrs/page to <5 min. Accuracy hit 92% F1 on a held‑out test set, exceeding the target of 85%. Cost stayed at $0.95 M/yr, below budget by 15%.

**Reflection**  
I owned the end‑to‑end flow, dived deep into Gemma’s prompt mechanics, and iterated fast (bias for action). The bar‑raiser would note my ownership, quantitative impact, and learning curve: initially misestimated GPU memory; resolved it by profiling with NVIDIA Nsight, saving 30 M tokens of wasted compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
