---
qid: vq_cf262d45b0__aws__local
question: How do you import a CSV file?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 337
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:07-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation:* A client needed to ingest a 5 TB sales‑history CSV nightly into an analytics pipeline for real‑time dashboards.  
*Task:* Build a robust, cost‑effective ingestion process that never drops rows and supports ad‑hoc queries in Athena.  
*Action:* I leveraged **Amazon S3** as the landing zone (server‑side encryption, versioning). Using **AWS Glue** I created a crawler to infer schema automatically, then wrote a Python ETL job that partitions data by `year/month/day` and writes Parquet files via **Spark on EMR**. The job includes validation checks (row counts, checksum) and logs to CloudWatch. For failures, an SNS topic triggers a Lambda that retries the failed partition up to three times before alerting Ops.  
*Result:* Daily ingestion completed in under 10 minutes with <0.01 % error rate, reducing storage cost by 35 % compared to raw CSVs and cutting query latency in Athena from 3 min to 12 sec. I documented the workflow in a Confluence page and conducted a knowledge‑share session, enabling the data science team to self‑serve future imports.

**Key Learnings:**  
- Partitioning + Parquet = huge cost & performance win.  
- Automated validation prevents silent data loss.  
- Cross‑team documentation turns a one‑off solution into a reusable pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
