---
qid: vq_42d43f3fa7__aws__local
question: Normalization vs Denormalization?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 436
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:33-05:00'
sources: []
---

**Situation (S)** – In my last role I was tasked with redesigning the analytics pipeline for a media‑streaming platform that served 3 M daily active users. The existing data warehouse was highly normalized, causing > 30 s query latency on revenue reports and costing ~$200K/month in Redshift compute.

**Task (T)** – My goal: cut query time by 80 % while keeping costs < $120K/month, all without breaking downstream dashboards used by product managers.

**Action (A)**  
1. **Dive Deep** into the OLAP workloads and identified that most queries performed heavy joins across 12 tables.  
2. Applied *denormalization* for read‑heavy “fact” tables: created a consolidated `streaming_fact` table in Amazon Redshift Spectrum on S3, partitioned by date and country.  
3. Leveraged **AWS Glue** to schedule incremental ETL jobs that materialize the fact table daily; used **Redshift’s columnar compression** to reduce storage 2×.  
4. Implemented **Amazon Athena** for ad‑hoc analysis on raw logs, giving instant results without loading data into Redshift.

**Result (R)** – Query latency dropped from 30 s to 4 s (≈ 87 % improvement). Monthly compute cost fell to $115K, a 42 % savings. The new schema also simplified maintenance—ETL jobs now run in 10 min versus 45 min.

**Leadership Principles Highlighted**  
- **Ownership** – Took full responsibility for end‑to‑end pipeline performance and cost.  
- **Dive Deep & Deliver Results** – Analyzed data patterns, engineered a scalable solution, and quantified the impact.  

Bar‑raisers will note my proactive trade‑off analysis (storage vs compute), measurable ROI, and lessons learned from an initial denormalized attempt that caused data drift—prompting stricter CDC controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
