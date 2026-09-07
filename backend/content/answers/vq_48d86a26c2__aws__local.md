---
qid: vq_48d86a26c2__aws__local
question: What is a Clustering Key?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 449
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:47-05:00'
sources: []
---

**Clustering key**  
*Customer Obsession | Ownership*

> **Situation:** In a recent migration of our data warehouse from on‑prem Hadoop to Redshift, we observed that query latency for sales analytics was >30 s, hurting the product team’s ability to deliver real‑time dashboards.  
> **Task:** I had to redesign the table layout so that aggregations ran in under 5 s without increasing storage costs.  
> **Action:** I chose a clustering key (`region_id, sale_date`) after profiling query predicates and data skew. In Redshift, this key physically sorts rows on disk, enabling the engine to skip large blocks during scans. I also set up automated vacuuming via AWS Glue jobs and scheduled re‑cluster every 30 days.  
> **Result:** Query latency dropped from 32 s to 3.8 s (an 88% improvement). Storage cost increased by only 4 GB (~0.5 %) because the data distribution remained balanced, keeping our monthly spend below $1,200.  

**Design insights**

* **AWS services:** Redshift for analytics; Glue for ETL & vacuum scheduling; CloudWatch for monitoring.  
* **Scalability:** Clustering key scales linearly with data size; we can add more keys if new query patterns emerge.  
* **Availability:** Redshift’s automatic snapshotting protects against accidental deletions of sorted metadata.  
* **Trade‑offs:** A poorly chosen clustering key can worsen performance; therefore I validated with a 10 % sample before production rollout.

**What the bar‑raiser looks for**

* Ownership: I owned the end‑to‑end migration and continuous improvement loop.  
* Dive Deep: I examined query plans, data distribution, and storage overhead.  
* Quantified impact: 88 % latency reduction with minimal cost increase.  
* Learning from failure: Initial attempt with a single key (`sale_date`) caused hot spots; pivoting to composite keys resolved the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
