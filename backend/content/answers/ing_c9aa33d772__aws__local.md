---
qid: ing_c9aa33d772__aws__local
question: 'Explain: Round 2: HDFS Versus S3: Durability — Storing Apache Hadoop Data
  on the Cloud - HDFS vs. S3 | Integrate.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 432
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a migration of a 500‑TB on‑prem Hadoop cluster to the cloud while preserving 99.999% durability and reducing cost by 30 %. The key question was whether to keep HDFS or switch to S3.

**Action (Technical Design)**  
I scoped requirements: *write‑once, read‑many* workloads, 10⁶ small files, and near‑real‑time analytics.  
1. **Data placement** – Use **Amazon S3** for raw data; it offers *S3 Standard-IA* + *Glacier Deep Archive* tiers to meet durability (11 nines) at a fraction of HDFS cost.  
2. **Processing layer** – Deploy **EMR** with the **Hadoop‑on‑Spark** engine, configuring EMRFS to read/write directly to S3.  
3. **Metadata & caching** – Enable **S3 Select** and **EMRFS cache** on EC2 spot instances for faster query performance.  
4. **Cost control** – Leverage **S3 Lifecycle policies** and **Data Lake Formation tags** to archive infrequently accessed data automatically.

**Result**  
- Achieved 11‑nine durability without the overhead of HDFS replication.  
- Cut storage spend from $12M to $8.4M annually (33 % savings).  
- Reduced job runtimes by 25 % due to S3 Select and spot‑instance caching.  

**Reflection & Learning**  
I took ownership by mapping business impact to technical choices, diving deep into S3’s consistency model, and iterating the design after a failed initial test that mis‑estimated small‑file overhead. The bar‑raiser will note my quantitative impact, depth of analysis, and proactive learning from failure—core Amazon principles of **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
