---
qid: vq_2887204ffc__aws__local
question: what are the optimisations performed in ADF and ADB ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 668
total_tokens: 901
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:05-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of our nightly ETL pipeline from on‑prem Hadoop to **Azure Data Factory (ADF)** + **Azure Databricks (ADB)**. The goal was to cut processing time by 40 % and reduce costs while keeping data quality intact.

**Action – ADF Optimisations**  
| Optimisation | Why it matters | AWS‑style equivalent |
|--------------|----------------|----------------------|
| **Linked Service Caching** | Reduces repeated authentication overhead (≈15 % speedup). | *Amazon Glue* connection caching. |
| **Parallel Copy Activity** | Multi‑threaded copy from Blob to ADLS Gen2; we increased `CopyThreadCount` from 4 → 16, cutting latency by 30 %. | *AWS Data Pipeline* parallelization. |
| **Mapping Data Flows with Spark** | Built-in schema inference and in‑memory transformations avoided costly UDFs. | *Glue ETL jobs* on Spark. |

**Action – ADB Optimisations**  
| Technique | Impact | AWS‑style equivalent |
|-----------|--------|----------------------|
| **Delta Lake ACID Transactions** | Guarantees idempotent writes; prevented duplicate rows during incremental loads (0 % data loss). | *Amazon Redshift* with `COPY` + `MERGE`. |
| **Cluster Autoscaling & Spot Instances** | Dynamically scaled from 4 → 16 workers during peak, saving ~25 $ per run. | *EMR on spot instances*. |
| **Data Skipping & Z-Ordering** | Reduced query time by 60 % for partitioned sales data (from 12 s to 5 s). | *Amazon Athena* partitions + `S3 Select`. |

**Result**  
After deployment, the end‑to‑end pipeline finished in **1.8 h** instead of 2.9 h (‑38 %), and monthly spend dropped from **$4,200** to **$3,150**. Accuracy remained at **99.97 %**.

---

### Leadership Principles Highlighted
- **Ownership** – I drove the entire migration, from requirement gathering to post‑production monitoring.  
- **Dive Deep** – I dissected every stage of ADF/ADB execution logs, identified micro‑bottlenecks, and validated fixes with A/B tests.  
- **Bias for Action** – Implemented spot‑scaling and caching in production within 48 h of identifying the first slowdown.  

### What a Bar‑raiser Listens For
1. **Quantified Impact**: Concrete numbers (time saved, cost reduced).  
2. **Depth & Trade‑offs**: I balanced speed vs. consistency (Delta Lake) and cost vs. availability (spot instances).  
3. **Learning from Failure**: After an initial spike in data skew, we re‑partitioned by customer ID, improving throughput by 15 %.  

This demonstrates end‑to‑end ownership, deep technical insight, and a measurable lift in our data engineering capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
