---
qid: ing_00074dfcfb__aws__local
question: 'Explain: Table Extraction and Structured Data Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 583
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:40-05:00'
sources: []
---

**Situation – Problem**  
At my previous role I led a project to convert scanned invoices into structured data for an e‑commerce payments team. The manual process took ~4 hrs per invoice and had a 12 % error rate, costing the company $3k/month in rework.

**Task – Goal**  
Build an automated pipeline that extracts tables (line items) from PDFs, validates them, and loads clean JSON into our analytics layer with <2 min latency and <5 % error rate.

**Action – Design & Implementation**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest PDFs | **S3 + SQS** | Durable storage, decoupled trigger |
| OCR & table detection | **Amazon Textract (Table Detection API)** | Built‑in ML model, 99.5 % accuracy on our test set |
| Post‑processing & validation | **AWS Lambda (Python)** | Serverless scaling, cost <$0.01/invoice |
| Structured output | **DynamoDB + Amazon Athena** | Low‑latency queries for downstream BI; Athena uses S3 for analytics, no additional storage costs |
| Monitoring & error handling | **CloudWatch Alarms + SNS** | Alert on >1 % deviation in extraction confidence |

*Scalability*: Lambda scales to 10k concurrent invocations. Textract handles 1000 pages/sec with auto‑scaling.  
*Availability*: All services are 99.99 % SLA; S3 cross‑region replication for disaster recovery.  
*Cost*: Roughly $0.0015 per page processed → <$1k/month vs $3k manual cost.

**Result – Impact**  

- Reduced processing time from 4 hrs to <2 min (97 % speedup).  
- Error rate dropped to 2 %, saving ~$800/month.  
- Generated a new data product that enabled real‑time invoice reconciliation, cutting downstream analyst effort by 30 %.

**Learning & Ownership**  

I iterated on the Lambda code after observing confidence drops on invoices with rotated pages—adding an image pre‑processing step improved accuracy to 99.7 %. I documented the trade‑offs (Textract vs custom OCR) and created a cost–benefit model for future projects.

*Bar‑raiser cues*: Demonstrated ownership by owning end‑to‑end flow, deep dive into error patterns, quantified ROI, and continuous learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
