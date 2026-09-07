---
qid: vq_c4aeee815c__aws__local
question: How do you find gaps in a sequence in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 600
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:22-05:00'
sources: []
---

**Situation (S)**  
In my previous role as a data engineer for a fintech startup, we had an audit table that recorded every transaction ID and its timestamp. The business required us to flag *gaps* in the sequence of transaction IDs—missing numbers could indicate fraud or system errors. A naïve scan across millions of rows was taking 12 hrs per run, blocking our nightly data pipeline.

**Task (T)**  
I needed to design a scalable, cost‑effective solution that would detect gaps in real time and surface them for downstream compliance workflows within 5 minutes of ingestion.

**Action (A)**  

1. **Requirements & Design** –  
   *Input:* Parquet files on S3 (100M rows/day).  
   *Output:* List of missing ID ranges with counts.  
2. **Implementation** –  
   * Use **Amazon Athena** to run a windowed `LAG()` query that compares each row’s ID to the previous one, flagging where `current_id - prev_id > 1`.  
   * Store results in an **Athena partitioned table** on S3 for fast incremental queries.  
   * Trigger the Athena job via **AWS Glue** crawlers and a **Step Functions** state machine that runs every 5 min.  
3. **Scalability & Availability** –  
   * Athena scales automatically with the amount of data processed; we set a concurrency limit to avoid throttling.  
   * Step Functions guarantees idempotent retries, ensuring no gaps are missed if an invocation fails.  
4. **Cost Optimization** –  
   * By partitioning on date and using S3 Select for small scans, we reduced query time from 12 hrs to ~30 s, cutting Athena costs by 95%.  

**Result (R)**  
Within two weeks of deployment, gap detection latency dropped from 12 hrs to **<5 min**, and the daily cost fell from $120 to **$4**. The compliance team flagged 3,200 missing transactions in real time, preventing a potential $2M fraud loss.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for end‑to‑end pipeline performance.  
- **Dive Deep & Deliver Results** – Analyzed query plans, re‑architected with Athena, and quantified cost savings and latency improvement.

### What a Bar‑Raiser Listens For
1. **Quantified Impact** – Clear before/after metrics (latency, cost).  
2. **Depth of Understanding** – Knowledge of Athena’s execution model, Glue integration, Step Functions orchestration.  
3. **Learning from Failure** – Acknowledged initial 12‑hour scan failure and pivoted to a serverless solution that aligns with AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
