---
qid: ing_7dbb4be9de__aws__local
question: 'Explain: Scenario 2: Design a document processing pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 423
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:45-05:00'
sources: []
---

**Scenario 2 – Design a Document Processing Pipeline**

*Leadership Principles:* **Customer Obsession & Ownership**  
I started by interviewing the end‑users (legal, finance) to quantify pain points: 80% of manual reviews took >4 h per contract and errors cost ~$12k annually.  

**S – Situation:** Our legacy OCR + spreadsheet workflow was fragile; every new document format broke the pipeline.  
**T – Task:** Build a scalable, self‑healing system that reduces review time to <30 min with 99.9% accuracy.  

**A – Action (Design):**  
1. **Ingest**: S3 bucket + EventBridge → trigger Lambda for metadata extraction (Textract).  
2. **Pre‑process**: AWS Step Functions orchestrate OCR, format‑specific parsers, and a SageMaker inference model that normalizes fields.  
3. **Store**: DynamoDB for structured data; Athena on S3 for audit queries.  
4. **Alert & Retries**: CloudWatch alarms + SNS to notify ops if confidence <90%.  

I added a *fallback* rule set in Lambda (regex) so 95% of documents finish without model inference, cutting costs by 30 %.  

**R – Result:** Pilot on 10k contracts cut processing time from 4 h → 25 min and reduced errors from 3.5 % to <0.2 %, saving ~$1.6M/yr. The pipeline now auto‑scales via Lambda concurrency, ensuring 99.9 % availability with an average cost of $0.02 per document.

*Bar‑raiser cues:* clear ownership (I led cross‑functional design), deep dive into metrics (time, error %, cost), and learning loop (fallback rule set after first failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
