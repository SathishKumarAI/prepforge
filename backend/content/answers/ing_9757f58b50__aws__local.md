---
qid: ing_9757f58b50__aws__local
question: 'Explain: Vision-LLM Layout Extraction — Ocr And Layout'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to build an end‑to‑end “Vision‑LLM Layout Extraction” pipeline that could ingest scanned PDFs, extract text and layout, then feed the structured data into a large language model for downstream analytics. The goal was to reduce manual review time by 70 % while keeping accuracy above 95 %.

**Action**  
1. **Architecture** – Built a serverless micro‑service using Amazon Textract (OCR + layout) → S3 event triggers → AWS Lambda that normalizes the JSON and calls an Amazon Bedrock LLM for semantic enrichment.  
2. **Scalability & Availability** – Leveraged S3’s high durability, Lambda’s concurrency scaling, and API Gateway throttling to handle 50k documents/day with < 200 ms latency per document.  
3. **Cost Optimization** – Adopted a “pay‑as‑you‑go” model; used Textract’s on‑demand pricing and reserved Lambda instances for peak hours, cutting spend by 30 % versus a monolithic EC2 solution.  
4. **Quality & Monitoring** – Implemented CloudWatch metrics (OCR confidence, LLM token usage) and automated rollback to the last stable extraction if accuracy dipped below 93 %.  

**Result**  
- Cut manual review from 8 hrs/day to 1.5 hrs (92 % time savings).  
- Achieved 96.3 % overall extraction accuracy.  
- Reduced infrastructure cost by $18k annually.

**Learning & Ownership**  
I owned the full lifecycle, iterating on feedback loops and documenting a playbook that other teams adopted for their own document pipelines. This experience exemplifies **Customer Obsession**, **Ownership**, and **Dive Deep**—key Amazon principles I bring to every technical challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
