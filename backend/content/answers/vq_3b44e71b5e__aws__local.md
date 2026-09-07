---
qid: vq_3b44e71b5e__aws__local
question: Which operations is not lazy?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 657
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Which operations are *not* lazy?**  
> In Spark, *actions* (e.g., `count()`, `collect()`, `write.save()`) trigger execution; transformations (`map()`, `filter()`) are lazy.

---

### Situation  
I was leading a data‑engineering sprint to migrate our nightly ETL from on‑prem Hadoop to **Amazon EMR**. The team had been using Spark’s RDD API, but the job kept hanging because we never materialized intermediate results—our code relied solely on lazy transformations, so the cluster spun up workers that never did useful work.

### Task  
I needed to rewrite the pipeline to ensure timely execution while keeping cost and scalability in check. The goal was a 30 % reduction in nightly run time and < $1 k/month on EMR.

### Action  
1. **Identify non‑lazy points** – I added explicit `persist()` after heavy joins and replaced chained transformations with an early `count()` to force materialization of the join result.  
2. **Use DataFrames** – switched from RDDs to Spark SQL, enabling Catalyst optimizer and automatic push‑down of predicates to S3 via EMRFS.  
3. **Leverage EMR Spot Instances** – configured cluster with a 60 % spot capacity mix; added an auto‑scale policy to keep the cluster size dynamic based on job progress.  
4. **Monitoring & Alerting** – set up CloudWatch metrics for `spark.sql.execution.stage` and triggered Lambda alerts when stages exceeded expected duration.

### Result  
- Nightly ETL finished **18 min** instead of 45 min (a 60 % speed‑up).  
- Spot usage cut EMR cost from $1.8 k to **$0.9 k/month**.  
- The team now routinely checks for actions before deployment, preventing the “lazy” pitfall.

---

### Leadership Principles Highlighted  

| Principle | Why it matters here |
|-----------|---------------------|
| **Ownership** | I took end‑to‑end responsibility for the pipeline’s performance and cost. |
| **Dive Deep** | By inspecting Spark UI and CloudWatch logs, I pinpointed where laziness caused waste. |
| **Bias for Action** | I introduced actions (`persist`, `count`) to force execution early, rather than waiting for a downstream job. |
| **Deliver Results** | Quantified impact: 60 % faster runtime, $0.9 k/month savings. |

---

> **Bar‑raiser cue:** Look for evidence of *ownership* (I rewrote the pipeline), *deep dive* into Spark internals and EMR pricing, *quantified impact*, and a clear lesson—always materialize when downstream stages depend on heavy joins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
