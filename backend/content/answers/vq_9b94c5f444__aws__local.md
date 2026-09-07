---
qid: vq_9b94c5f444__aws__local
question: Spark transformations & actions are evaluated lazily?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 465
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:27-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to redesign the nightly ETL pipeline that processed ~1 TB of log data daily for our recommendation engine. The goal was to cut run‑time by 40 % while keeping cost below $200/month.

**Action**  
I rewrote the pipeline in PySpark and leveraged Spark’s *lazy evaluation* model: **transformations** (`map`, `filter`, `join`) are only registered, not executed; **actions** (`count`, `write`) trigger a single optimized DAG. This meant I could chain 12 transformations without incurring intermediate shuffles, then call `write` once to S3.  
I also introduced **broadcast joins** for small dimension tables and used **partition pruning** on the date key, all orchestrated via AWS Glue and Spark on EMR.

**Result**  
The new pipeline completed in 45 min versus 75 min (‑40 %). Cost dropped from $310 to $185/month. The data quality remained 99.9 % accurate—validated by cross‑checking with the legacy system.

---

### Leadership Principles

- **Ownership** – I took full responsibility for the end‑to‑end pipeline, from design to monitoring.
- **Dive Deep** – By inspecting Spark UI and executor logs, I identified unnecessary shuffles and eliminated them.
- **Deliver Results** – Quantified impact: 40 % faster runtime, $125/month savings.

### Technical Takeaway

*Lazy evaluation* lets you compose transformations into a single DAG, reducing intermediate data materialization. In AWS terms:
- Use **EMR Serverless** or **Glue Spark** for cost‑effective scaling.
- Store results in **S3** (durable, cheap) and register them as **AWS Glue Data Catalog** tables for downstream services.

Bar‑raisers look for: clear ownership narrative, depth of technical understanding, measurable impact, and a reflection on what could have gone wrong (e.g., missing a broadcast join would have caused OOM errors).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
