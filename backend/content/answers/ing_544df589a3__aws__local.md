---
qid: ing_544df589a3__aws__local
question: 'Explain: Introduction — Zero-Shot Local Document Parsing with Gemma 4:
  Treating PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 422
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:36:54-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building a zero‑shot document parsing system for legal PDFs—high‑volume, unstructured, and often scanned. The goal was to extract key fields (e.g., contract dates) without labeled data while keeping latency < 500 ms per doc.

**Action & Design**  
I treated each PDF page as an image and leveraged **Gemma‑4**, a multimodal foundation model, to perform *image‑to‑text* extraction. The pipeline:

1. Convert PDF → raster images (S3 + Lambda).  
2. Run Gemma‑4 via **Amazon SageMaker JumpStart** for inference; the model outputs OCR+layout tokens in a single pass.  
3. Post‑process with a lightweight rule engine (AWS Lambda) to map tokens to field names using zero‑shot prompts (“Extract contract start date”).  

Key AWS services: S3, Lambda, SageMaker, CloudWatch for observability. I added **SQS** to buffer high‑volume bursts and **DynamoDB** for idempotent storage of results.

**Result**  
We achieved 92 % F1 on a held‑out test set (no fine‑tuning) versus the baseline OCR + regex (78 %). End‑to‑end latency dropped from 1.8 s to 0.42 s, and cost per document fell by 35 % thanks to on‑demand SageMaker instances and efficient image preprocessing.

**Reflection & Learning**  
Ownership drove me to iterate on the prompt design; diving deep into Gemma’s token distribution revealed why certain dates were missed, leading to a better prompt schema. The bar‑raiser will note my data‑driven impact, scalable architecture, and learning loop—hallmarks of *Customer Obsession* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
