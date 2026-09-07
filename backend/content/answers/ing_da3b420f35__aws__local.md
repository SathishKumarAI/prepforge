---
qid: ing_da3b420f35__aws__local
question: How do you make tables and charts in documents actually retrievable and
  answerable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 538
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:52-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a project to enable *search‑able* analytics for our marketing team’s quarterly reports—PDFs with dozens of tables and charts that were otherwise only viewable in a static viewer. The goal was to reduce the time analysts spent hunting data from 3 hrs to <30 min.

**Task (T)**  
Build an end‑to‑end pipeline that extracts, stores, indexes, and serves table/chart data so any question can be answered via a simple query interface.

**Action (A)**  

1. **Capture & OCR** – Ingest PDFs into S3; run AWS Textract + Comprehend to extract tabular data and chart metadata.  
2. **Data Lake & Schema** – Load JSON blobs into Glue catalog → partitioned Athena tables for ad‑hoc SQL.  
3. **Indexing** – Push extracted key columns into DynamoDB with a GSI on `report_id`+`column_name`.  
4. **API Layer** – Lambda + API Gateway exposes a `/query` endpoint that translates natural language to Athena queries (via QuickSight SDK).  
5. **Cost & Scale** – Athena charges per‑scan; we pre‑aggregate 10 % of scans by partitioning, cutting query cost from $0.30/hr to $0.03/hr. Availability is 99.99% via S3 + DynamoDB global tables.

**Result (R)**  
After deployment, analysts could retrieve any table value in <2 sec; query volume grew 8× while cost stayed below $50/month. The pipeline also fed data into a Power BI dashboard that reported a 25% increase in campaign ROI within 6 months—directly attributable to faster insights.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering instant answers for analysts.  
- **Ownership & Dive Deep** – Designing the entire stack, from OCR to API, and iterating on schema based on real usage metrics.  

*Bar‑raiser takeaway*: I own the end‑to‑end solution, dive into every layer’s performance, quantify impact (time saved, cost reduced), and learn from failed OCR runs by retraining Textract models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
