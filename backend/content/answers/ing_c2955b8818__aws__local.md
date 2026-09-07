---
qid: ing_c2955b8818__aws__local
question: 'Explain: Let''s call it process_workbook. It gets a'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 455
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:08-05:00'
sources: []
---

**Situation / Task**  
At my previous role I built a **process_workbook** micro‑service that ingested Excel sheets from S3, ran feature extraction with Pandas, and queued the data for downstream model training. The goal was to reduce manual ETL effort by 80 % while keeping latency under 5 s per workbook.

**Action**  
I chose a **serverless design** using AWS Lambda (Python) triggered by `ObjectCreated` events on an S3 bucket. Inside Lambda I used **AWS Glue DataBrew** for schema inference, then **Amazon SageMaker Processing Jobs** to run the heavy‑weight transformation in a managed Jupyter environment. Results were written back to another S3 prefix and a message was published to an **SNS topic** that triggers a downstream training pipeline.

Key decisions:
- **Scalability:** Lambda concurrency limits + Glue’s parallel workers → 1000+ workbooks per hour.
- **Availability:** Multi‑AZ S3 buckets + automatic retry on failures (DLQ).
- **Cost:** ~$0.0000167/second for Lambda, $0.25/hour per Glue worker; overall cost dropped from $120/day to $30/day.

**Result**  
Processing time fell from 15 s → 3 s average, throughput rose from 50 → 800 workbooks/hr (16×). Manual intervention reduced by 90 %. The solution was adopted company‑wide and later extended to CSV/JSON formats.

---

### Leadership Principles Reflected
- **Customer Obsession** – Delivered faster, more reliable data for ML teams.  
- **Ownership & Dive Deep** – Designed the end‑to‑end flow, tuned Glue workers, and debugged Lambda cold starts.  

Bar‑raisers look for measurable impact (×16 throughput), depth in trade‑off analysis (serverless vs. EC2), and a clear learning loop (moving from manual ETL to fully automated pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
