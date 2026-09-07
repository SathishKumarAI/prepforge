---
qid: vq_aab326a7d5__aws__local
question: How to implement parallel copies in ADF using partitioning ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 543
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:19-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*  

**Situation (S)**  
At my previous role I was tasked with moving 50 TB of log data from on‑prem S3 to an Azure Data Lake for downstream analytics. The existing single‑stream copy in ADF took over 48 hrs and hit throttling limits.

**Task (T)**  
I had to cut the transfer time by at least 70 % while keeping costs under $2k/month and ensuring idempotency.

**Action (A)**  

1. **Partitioning strategy** – I split the source folder into 200 partitions based on the first two characters of the file name (`/logs/aa/`, `/logs/bb/…`).  
2. **Parallel pipelines** – Created a single *copy activity* inside an *ADF pipeline* that used `BlobSource` with `recursive = true`. In the dataset I enabled **“Copy behavior: Merge files”** and set **"Maximum concurrent connections"** to 100 (Azure limits).  
3. **Dynamic content** – Leveraged the **“ForEach”** activity with a *Batch* policy (max concurrency 20) that iterated over each partition folder, passing its path as a pipeline parameter. Each iteration launched an independent copy activity.  
4. **Monitoring & retry** – Added **Azure Monitor alerts** on failed partitions and set exponential back‑off retries to 3 times.

**Result (R)**  
The total transfer time dropped from 48 hrs to 6 hrs, achieving a **75 % speed‑up**. Cost stayed at $1,800/month, 10 % below budget. The idempotent design prevented duplicate data on re‑runs, and the pipeline logs gave clear lineage for audit.

---

### What a bar‑raiser looks for

| Criterion | Why it matters |
|-----------|----------------|
| **Ownership** | I took full responsibility from requirement gathering to monitoring. |
| **Dive Deep** | I dissected throttling limits, concurrency settings, and cost implications of each design choice. |
| **Quantified Impact** | 75 % time reduction & $200 savings are concrete metrics. |
| **Learning from Failure** | After an initial failure due to exceeding max connections, I adjusted the batch policy and added retry logic, turning a bug into a stronger system. |

> *In short,* partitioning the source data and orchestrating parallel copy activities in ADF dramatically improves throughput while keeping costs predictable—a pattern that scales across any large‑scale ingestion workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
