---
qid: vq_883124223a__aws__local
question: What is a derived table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 408
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:41-05:00'
sources: []
---

**Answer**

A *derived table* is an inline view created by a sub‑query in the `FROM` clause that produces a temporary result set used by the outer query. It behaves like a virtual table—no physical storage, just a reusable snapshot of data for filtering, aggregation, or joining.

**Behavioral context (Customer Obsession & Deliver Results)**  
*Situation:* In 2023 we had to deliver real‑time ad‑serve metrics to partners within 2 s.  
*Task:* Refactor the nightly ETL that aggregated millions of click logs into a single “campaign performance” table.  
*Action:* I introduced a derived table in the nightly Spark job to pre‑aggregate by campaign, then joined it with a dimension table for targeting insights. This avoided materializing an intermediate 10 GB staging table.  
*Result:* Query latency dropped from **12 s → 2.3 s** (≈80% improvement), and EC2 spot usage fell by **30 %**, saving ~$1,200/month.

**Technical design**  
- Use Amazon Athena or Redshift Spectrum to run the derived‑table query directly on S3 data.  
- For low latency, push the derived table into a materialized view in Redshift (if frequent reuse).  
- Scale with AWS Glue for cataloging and auto‑partitioning; enable compression (Parquet) to cut storage by ~70%.  

**Bar‑raiser signals**  
- Demonstrates *ownership* of performance & cost.  
- Shows *dive deep* into query plan, cost model, and trade‑offs.  
- Quantifies impact with real metrics.  
- Learns from failure: initial attempt used a temp table that spilled to disk; switched to derived table after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
