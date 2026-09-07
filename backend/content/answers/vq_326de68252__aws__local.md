---
qid: vq_326de68252__aws__local
question: Difference between schema on read vs schema on write?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 558
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:09-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a 3‑TB legacy data lake into an S3‑based analytics platform. The team debated whether to enforce a schema at ingestion (schema‑on‑write) or defer it until query time (schema‑on‑read). My goal was to maximize agility for analysts while keeping costs and latency low.

**Action**  
I conducted a *dive deep* analysis of the data volume, velocity, and downstream use cases. I built two prototypes:  
1. **Schema‑on‑write** – using Glue Crawler + Parquet + Athena table definitions.  
2. **Schema‑on‑read** – raw JSON in S3 processed by Athena/Redshift Spectrum with dynamic schema inference.

I measured write latency, storage overhead, and query performance for each. Using CloudWatch metrics I also tracked the frequency of downstream failures caused by schema drift.

**Result**  
The schema‑on‑write approach cut query runtime from 12 s to **2.3 s** on average (≈80% faster) and reduced data duplication costs by **$1,200/month**. However, it introduced a *customer obsession* risk: analysts had to wait for new crawler runs before accessing updated fields.  
To balance this, I implemented an incremental Glue job that ran every 6 hrs, giving near‑real‑time schema updates while keeping cost and performance gains.

**Learning & Ownership**  
I documented the trade‑offs in a living wiki, enabling other teams to choose the right pattern for their workloads. This ownership mindset ensured that future projects could skip the costly re‑engineering phase.

---

### Key AWS Services Used
- **Amazon S3** – durable storage  
- **AWS Glue** – cataloging & ETL  
- **Amazon Athena / Redshift Spectrum** – query layer  
- **CloudWatch** – metrics & alarms  

### Bar‑raiser Takeaways
| What they listen for | How I demonstrated it |
|----------------------|------------------------|
| Ownership | Took end‑to‑end responsibility, documented decisions, and created reusable patterns. |
| Dive Deep | Ran comparative benchmarks, analyzed CloudWatch metrics, and quantified performance gains. |
| Quantified Impact | Showed 80% query speedup & $1,200/month savings. |
| Learning from Failure | Recognized analyst pain points and built an incremental solution to mitigate them. |

This experience exemplifies **Customer Obsession** (delivering faster insights) and **Ownership** (owning the data pipeline end‑to‑end).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
