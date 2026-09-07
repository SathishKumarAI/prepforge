---
qid: ing_ded82d22ac__aws__local
question: 'Explain: Requirements — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 466
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:26-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at a fintech startup, I was asked to build a **Document Intelligence Pipeline** that could ingest invoices, extract structured data, and feed downstream analytics in real time. The goal: reduce manual review from 3 hrs/day per invoice to < 5 min, with > 95 % extraction accuracy.

**Action (Technical Design)**  
I scoped the solution around *AWS* services:  

| Component | Service | Why |
|-----------|---------|-----|
| Ingestion & OCR | Amazon Textract + S3 event triggers | Handles PDFs/Scans at scale; auto‑scales with Lambda. |
| Data Normalization | AWS Glue + Athena | ETL into a star schema for BI, serverless & cost‑effective. |
| Validation & Feedback Loop | SageMaker Pipelines + DynamoDB | Continuous model retraining using user‑corrected tags; 1‑minute latency. |
| API Layer | Amazon API Gateway + Lambda (Node.js) | Exposes extraction results with 99.9 % availability SLA. |

**Result**  
- **Speed:** Invoice processing time dropped from 3 hrs to ~4 min (≈ 90 % reduction).  
- **Accuracy:** Model hit 96 % F1‑score after two training cycles.  
- **Cost:** Operated under $0.03 per invoice, a 70 % cost saving vs. manual review.  

**Leadership Principles Anchored**  
*Customer Obsession*: Built the pipeline to eliminate friction for finance teams.  
*Ownership & Dive Deep*: Took end‑to‑end responsibility, iterating on model accuracy and latency through detailed metrics.

**Bar‑raiser Takeaway**  
- Demonstrated ownership by owning data quality, latency, and cost.  
- Showed depth: I walked through each service choice, trade‑offs (serverless vs. managed), and quantified impact.  
- Learned from a failed first model run—identified OCR mis‑alignment, refined pre‑processing, and achieved the target accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
