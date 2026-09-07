---
qid: vq_9d760b61e3__aws__local
question: How to remove duplicates from an array of elemets?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 469
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:58-05:00'
sources: []
---

**Situation (S)** – I was tasked to clean a nightly ETL pipeline that ingested ~2 M user events from an event‑driven IoT platform into Redshift for downstream analytics. Duplicate records were inflating the dataset by 18 % and skewing KPI calculations.

**Task (T)** – Build a scalable, cost‑efficient deduplication step that guarantees idempotent inserts while keeping latency < 2 min to meet real‑time reporting SLAs.

**Action (A)** –  
1. **Extract & Stage**: Use Kinesis Data Firehose → S3 (partitioned by hour).  
2. **Deduplicate**: Launch an AWS Glue job that reads the raw Parquet, creates a temporary Redshift table with `DISTKEY(event_id)` and `SORTKEY(timestamp)`, then runs `INSERT INTO clean_events SELECT DISTINCT * FROM raw_events`.  
3. **Cost & Availability**: Glue’s serverless compute scales to 10 DPUs on demand; we set `maxConcurrency=5` to avoid throttling. Redshift Spectrum queries the S3 data directly, eliminating additional storage costs.  
4. **Monitoring**: CloudWatch metrics track job duration and duplicate rate; alarms trigger if duplicates > 2 % of total.

**Result (R)** – Duplicate rate dropped from 18 % to < 0.5 %, reducing storage by ~350 GB/month (~$1,200/yr). Pipeline latency stayed below the 2‑min SLA, and downstream dashboards now reflect accurate user metrics.  

---

### Leadership Principles  
- **Ownership**: Took end‑to‑end responsibility for data quality and cost.  
- **Dive Deep**: Analyzed raw event logs to pinpoint duplication patterns; iterated Glue script until 99.9 % accuracy.

> *Bar‑raiser cue*: I quantified the impact (storage & cost savings), demonstrated deep technical knowledge of AWS services, and learned from an initial false assumption that duplicates were caused by client retries—later corrected by inspecting event payloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
