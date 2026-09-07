---
qid: ing_7b6640c221__aws__local
question: 'Explain: Interview Follow-Up Questions — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 436
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:22-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional sprint for a Fortune‑500 client who needed to ingest > 10 M pages of legacy contracts into a searchable knowledge base within six months. The goal was to cut manual review time from 3 days per contract to under 30 minutes while keeping F1‑score ≥ 92%.

**Action**  
* **Design** – I architected an end‑to‑end pipeline: S3 for immutable ingestion, Lambda + Step Functions for orchestration, Amazon Textract (Document Text & Forms) → Amazon Comprehend Medical for entity extraction, and DynamoDB for indexed metadata.  
* **Scalability/Availability** – Used S3 EventBridge triggers to decouple producers; step‑functions state machine ensured idempotent retries; all services were in an isolated VPC with IAM roles for least privilege.  
* **Cost Control** – Enabled Textract’s “on‑demand” mode only for high‑complexity pages, falling back to batch on cheaper “standard” jobs; leveraged Spot Instances for Lambda concurrency where possible.  
* **Bias for Action & Ownership** – I personally ran a 48‑hour test harness, identified a 5 % OCR drop in scanned PDFs, and patched the preprocessing step with custom Tesseract models.

**Result**  
The solution processed 10 M pages in 4 weeks, reduced review time to 25 minutes (≈ 90 % reduction), achieved an F1‑score of 93.7%, and cut document processing costs by 38 %. I presented the architecture at AWS re:Invent, earning a “Customer Obsession” badge from my manager.

**Learnings**  
I realized that early data‑driven validation (sampling 10 % of PDFs) saves time; I now always prototype with a realistic subset before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
