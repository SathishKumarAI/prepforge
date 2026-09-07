---
qid: ing_a0bd995d31__aws__local
question: 'Explain: What CDC Captures — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 483
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:39-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to rebuild their real‑time analytics pipeline. The data warehouse lagged 30 min behind the operational database, causing stale risk scores and delayed fraud alerts. I needed a low‑latency CDC system that could ingest every insert/update/delete from PostgreSQL into Redshift without compromising availability.

**Action (Design)**  
* **Capture** – Use *AWS DMS* with PostgreSQL source to stream binlog changes. DMS emits JSON events directly to an *Amazon Kinesis Data Stream*.  
* **Transform & Enrich** – A Lambda function consumes the stream, applies schema‑based validation and enriches records with a user‑lookup from DynamoDB (low‑latency key/value store).  
* **Load** – The enriched payload is batched into S3 (Parquet) for durability, then a scheduled Glue job writes to Redshift via *COPY*. For near‑real‑time alerts I also push critical events to an SNS topic that triggers another Lambda writing to a DynamoDB Streams‑backed table.

*Scalability*: Kinesis shards auto‑scale with traffic; DMS can handle 10 Gbps of change volume.  
*Availability*: All services are multi‑AZ, and the Lambda retries on transient failures.  
*Cost*: Estimated $0.02 per GB for DMS + $0.015 per MB for Kinesis + $1.00 per 100k Lambda invocations → <$15/month for our traffic.

**Result**  
Latency dropped from 30 min to <5 s for 95% of changes, improving fraud‑detection accuracy by 12%. The new pipeline also cut operational costs by 18% compared to the legacy batch job.  

**Reflection (Bar‑raiser lens)**  
I owned every layer—schema design, error handling, and cost monitoring. I dove deep into DMS metrics to tune binlog retention. After a failed first run that missed deletes, I added a “tombstone” marker and re‑ran the pipeline, learning that CDC must capture all CRUD ops, not just inserts. This iterative approach exemplifies *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
