---
qid: vq_5aafbbd970__aws__local
question: is the renaming the output file possible?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 490
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:52-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:**  
> In my last role I built an S3‑based batch ETL that processed 5 TB of transactional logs nightly. The job used EMR Spark to produce a partitioned Parquet file named `output_YYYYMMDD_HHMM`. The downstream BI team required the file name to match their ingestion convention (`sales_parquet_YYYY-MM-DD`).  
> **Task:**  
> I had to add an “auto‑rename” step without breaking the existing pipeline, keeping cost and latency low.  
> **Action:**  
> 1. **Requirement dive** – I mapped the rename rule to a deterministic Lambda function triggered by S3 `ObjectCreated` events.  
> 2. **Design** – The Lambda reads the key from the event, constructs the target name, copies the object via `CopyObject` (which is server‑side and free for same‑region moves), then deletes the source. This keeps the rename atomic to downstream consumers.  
> 3. **AWS services used:** S3 Event Notifications, Lambda (Python 3.11), CloudWatch Logs, IAM least‑privilege role.  
> 4. **Scalability & cost** – Each rename is <200 ms and costs <$0.000016 per invocation; for ~10 k files/day the annual cost stays under $5. Availability is 99.9% due to Lambda’s built‑in retries.  
> 5. **Result:**  
> *Customer Obsession* – BI team reported a 30 % reduction in ingestion errors (from 15/1000 jobs to <1/1000).  
> *Deliver Results* – Throughput stayed at 5 TB/day with no added latency, and the solution was adopted across all ETL workflows.  
> **Reflection:** I initially considered renaming during EMR output, but that introduced a hard dependency on Spark’s executor lifecycle. Moving it to Lambda decoupled concerns, increased resilience, and simplified rollback if needed.

**Leadership Principles Highlighted:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
