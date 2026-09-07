---
qid: ing_1cdeb3d0d7__aws__local
question: 'Explain: Round 5: HDFS Versus S3: Performance — Storing Apache Hadoop Data
  on the Cloud - HDFS vs. S3 | Integrate.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 663
total_tokens: 917
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:32-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of an on‑prem Hadoop analytics pipeline (≈ 50 TB) to the cloud for a retail client that needed 24/7 reporting and compliance with GDPR. The key decision was whether to keep HDFS on Amazon EMR or to move data to S3 while still using Hadoop jobs.

**Action & Design**  
1. **Requirements**: low‑latency batch reads, high write throughput, strong consistency for downstream ETL, cost control.  
2. **Architecture**:  
   * **S3** as the immutable, durable store (S3 Standard‑IA + S3 One Zone‑IA for archival).  
   * **EMR with Hadoop YARN** using **Hadoop on S3** via **S3A connector**; enable **S3 Select** and **Parquet** partitioning.  
   * **Glue Catalog** for schema metastore, avoiding separate HDFS NameNode.  
   * **EMRFS Sync** to keep a small “hot” cache in EMR’s local SSD for recent writes (≈ 10 % of data).  

3. **Performance Tuning**:  
   * Parallel uploads with **S3 Transfer Acceleration**; batch size 128 MB, parallelism 64 per node.  
   * Enable **S3ObjectLock** to satisfy audit requirements.  
   * Use **EMRFS Caching Layer** (S3A‑cache) to reduce read latency for hot data.  

4. **Cost & Scalability**:  
   * S3 storage is ~ $0.023/GB/mo vs. EBS at $0.10/GB/mo → 70% savings.  
   * Auto‑scaling EMR clusters (max 100 nodes) handled peak 1,000 concurrent MapReduce jobs with < 30 s queue time.  

**Result**  
* **Throughput**: 4× faster job completion for the largest shuffle jobs compared to on‑prem HDFS.  
* **Cost**: Annual savings of $280k (storage + cluster hours).  
* **Reliability**: Uptime > 99.99% with no single point of failure; data durability 11 9’s.  

**Learnings & Bar‑raiser signals**  
* **Ownership**: I owned the migration risk, performed a detailed cost‑benefit analysis, and presented it to executives.  
* **Dive Deep**: Benchmarked HDFS vs. S3 at 10 GB scale; discovered S3A’s latency was acceptable once caching was enabled.  
* **Quantified Impact**: 4× speedup, $280k savings, 99.99% availability.  
* **Learning from Failure**: Initial pilot failed due to unoptimized partitioning; we re‑partitioned by date and product ID, which eliminated shuffle bottlenecks.

This decision showcases customer obsession (faster reports), ownership (full migration control), and a data‑driven, scalable solution that aligns with AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
