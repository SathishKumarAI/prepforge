---
qid: vq_2baf956b5a__aws__local
question: Why do we use Hdfs for files with large data sets but not when there are
  lot of small files?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 443
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent migration project I led the decision to replace an on‑prem Hadoop cluster with Amazon EMR for processing terabyte‑scale logs.  
- **Situation:** The legacy system stored millions of 1 KB log files in HDFS, but each file was processed independently, causing high metadata overhead and long job runtimes.  
- **Task:** Reduce per‑file latency while keeping cost low and ensuring high availability.  
- **Action:** I performed a *Dive Deep* analysis of the HDFS block size (128 MB) versus the average file size (≈1 KB). Because HDFS allocates a 4 KB block for each file, our cluster was storing ~2 GB of “empty” space per million files.  
  - I proposed consolidating small files into larger *Parquet* containers using AWS Glue to batch‑write 10 MB partitions.  
  - Leveraged **Amazon S3** (object store) for durability and cost efficiency, and used **EMRFS** to mount the data so Spark could read it directly.  
  - Implemented a **serverless Athena** layer for ad‑hoc queries, eliminating the need for a dedicated cluster.  
- **Result:** Metadata overhead dropped from ~2 GB per million files to <50 MB, job runtimes fell by 70%, and storage costs decreased by 45%. The system now scales elastically—S3 handles any number of objects without performance loss.

**Why HDFS is unsuitable for many small files:**  
- **Scalability:** Each file incurs a separate block allocation; the namenode becomes a bottleneck.  
- **Availability:** Small files increase the risk of corruption and require more frequent checkpoints.  
- **Cost:** The storage overhead of empty blocks outweighs the benefits of distributed processing.

**Leadership Principles highlighted:** *Customer Obsession* (delivering faster insights for business users) and *Ownership* (taking full responsibility for end‑to‑end performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
