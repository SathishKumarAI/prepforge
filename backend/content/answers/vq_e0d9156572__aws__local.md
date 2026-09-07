---
qid: vq_e0d9156572__aws__local
question: Difference between Hadoop & spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 403
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:21-05:00'
sources: []
---

**Situation (S)**  
In my last role at a media‑streaming company, we had an on‑prem Hadoop cluster that processed 10 TB of log data nightly for real‑time recommendation scoring. The batch pipeline was taking ~12 hrs, causing stale recommendations and a 4% drop in click‑through rate (CTR).

**Task (T)**  
I was tasked to reduce processing time while keeping cost under the $15K/month budget.

**Action (A)**  
- **Dive Deep & Invent & Simplify**: I evaluated Spark’s in‑memory execution versus Hadoop MapReduce.  
- Implemented a *Spark on EMR* cluster with 20 m5.xlarge workers, using Kryo serialization and broadcast joins for the user‑profile table.  
- Rewrote the ETL as a single Spark job (instead of three MapReduce stages), adding checkpointing to avoid full recomputation.  
- Integrated **AWS Glue** for cataloging and **Amazon S3** for durable storage, eliminating the need for HDFS.  

**Result (R)**  
Processing time dropped from 12 hrs to **1.5 hrs**—a **87% speed‑up**—and CTR improved by **2.3%** within a month. Cost stayed below budget due to auto‑scaling and spot instances, saving ~$4K annually.

---

### Key Takeaway  
Hadoop MapReduce is disk‑centric and slow for iterative workloads; Spark’s in‑memory model and richer APIs make it ideal for large, real‑time analytics when paired with AWS managed services.  

*Leadership Principles:* **Customer Obsession** (improved CTR), **Ownership** (led migration), **Dive Deep**, and **Bias for Action** (quick prototyping on EMR).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
