---
qid: vq_1e2be9f23a__star__local
question: What is the difference between Table scan and seek ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 291
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:26-05:00'
sources: []
---

**Situation**  
In late Q2 I was debugging a production ETL pipeline that processed ~120 M rows daily from our sales data lake into the analytics warehouse. A new metric report started lagging behind by 45 minutes.

**Task**  
I had to identify why the nightly aggregation job was running so slowly and bring its runtime back under 30 minutes without compromising accuracy or adding cost.

**Action**  
First, I ran an EXPLAIN plan on the slow query. It revealed a full table scan over the raw sales table, even though we had a composite index on `(country, sale_date)`. I rewrote the aggregation to filter by `sale_date` first and added a predicate on `country = 'US'`, forcing the optimizer to use an indexed seek. Then I partitioned the raw table by month and created a covering index on the most‑used columns. Finally, I scheduled the job during off‑peak hours and enabled query caching for repeated reads.

**Result**  
Runtime dropped from 75 minutes to 22 minutes—a 70% improvement—while cost stayed flat. The exercise reinforced that understanding when the engine chooses a scan versus a seek is critical; small predicate changes and proper indexing can drastically reduce I/O and CPU consumption in large data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
