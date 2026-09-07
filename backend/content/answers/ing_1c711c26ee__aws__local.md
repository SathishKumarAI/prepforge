---
qid: ing_1c711c26ee__aws__local
question: 'Document parsing at scale: PDFs, HTML, spreadsheets, email, scans. What
  breaks and how do you build for it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 465
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:23-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to ingest ~2 M documents per day (PDFs, HTML, XLSX, EML, scanned images) for an enterprise analytics platform. The system had to handle malformed PDFs, corrupted CSV headers, and OCR‑heavy scans without manual intervention.

**Action**  
1. **Ownership & Dive Deep** – I mapped failure modes: 35 % of PDFs failed at the parser level; 18 % of spreadsheets triggered schema errors; 12 % of scans exceeded OCR confidence thresholds.  
2. **Design** – Built a serverless pipeline on **AWS Lambda** + **Step Functions**:  
   * S3 triggers → Lambda parses with Apache Tika (PDF/HTML), Pandas (XLSX), and Amazon Textract for scans.  
   * If parsing fails, the step function routes to an “error bucket” and sends a CloudWatch event to a SNS topic that auto‑creates a JIRA ticket.  
3. **Scalability & Cost** – Lambda concurrency throttling (reserved 10 k) plus SQS buffering keeps costs at ~$0.12 per 1,000 docs vs $5 if we used EC2 clusters.  
4. **Availability** – Deploy in two AZs; use S3 Cross‑Region Replication to a secondary bucket for disaster recovery.  
5. **Bias for Action & Deliver Results** – After 30 days, parsing success rose from 62 % to 97 %, reducing manual triage time by 4× and cutting ops costs by $70k/month.

**Result**  
Document ingestion latency dropped to <2 s per file; error‑rate fell below 1 %. The pipeline now supports real‑time analytics for the sales team, delivering insights within minutes of upload.  

*Leadership Principles highlighted: Customer Obsession (fast, reliable data), Ownership (end‑to‑end solution), Dive Deep (root‑cause analysis), Bias for Action, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
