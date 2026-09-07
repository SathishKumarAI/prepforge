---
qid: ing_da357703cc__aws__local
question: 'Explain: Batch API usage — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 507
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:52-05:00'
sources: []
---

**Batch API usage – Document Intelligence Pipeline**

**Situation:** In my previous role I was tasked with processing 200 k invoices per month for a fintech client that required end‑to‑end OCR and data extraction within 24 h, while keeping the cost below $2k/month.

**Task:** Build a fully automated, scalable pipeline that ingests PDFs, extracts structured fields, validates them against business rules, and exposes a REST endpoint for downstream systems.

**Action:**  
1. **Ingest → S3 Event + Lambda**: PDFs landed in an S3 bucket; an event‑driven Lambda triggered the workflow.  
2. **OCR & Data Extraction → Amazon Textract**: Used `AnalyzeDocument` with custom blocks for line items, ensuring 98 % accuracy on a test set.  
3. **NLP Validation → Amazon Comprehend Custom Entities**: Extracted vendor names and dates; cross‑checked against a DynamoDB whitelist (99.5 % hit rate).  
4. **Orchestration → Step Functions**: Serialized the steps, added retry logic, and captured metrics in CloudWatch.  
5. **API Exposure → API Gateway + Lambda**: Returned JSON payloads with a 200 ms latency SLA.

**Result:** Reduced processing time from 48 h to <2 h, cut cost by 35 % (from $3k to $1.9k/month), and achieved an error rate of <0.5 %.  

**Leadership Principles Anchored:**  
- **Customer Obsession & Deliver Results** – Delivered a faster, cheaper solution that met the client’s SLA.  
- **Ownership & Dive Deep** – Designed from ingestion to API, continuously tuned Textract models based on real‑world data.

**Bar‑raiser Expectations:**  
- Demonstrated *ownership* by owning the entire pipeline lifecycle.  
- Showed *depth* with concrete metrics and iterative model improvements.  
- Quantified impact through cost savings and SLA attainment.  
- Learned from initial 48 h failures, iterating on retry logic and validation rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
