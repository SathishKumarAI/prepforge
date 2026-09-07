---
qid: vq_92320a2950__aws__local
question: how does partition happen while creating RDD?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 367
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:50-05:00'
sources: []
---

**Situation & Task**  
While leading a Spark migration for the ad‑tech team, we needed to ingest ~12 TB of click logs daily into an RDD for real‑time bidding analysis. The existing pipeline suffered from skew and long shuffle times.

**Action**  
I owned the redesign (Ownership) and dove deep into the partition logic (Dive Deep). I introduced a *custom hash partitioner* that uses `user_id` + `timestamp_hour` as the key, ensuring even distribution across 1 000 executors. In Spark, this is achieved by calling:

```scala
val rdd = sc.textFile(s3://logs/${date})
          .map(parse)
          .partitionBy(new HashPartitioner(1000))
```

I leveraged EMR on Spot instances (Cost) and S3 Transfer Acceleration (Availability). I added a `coalesce` step post‑shuffling to merge small partitions, cutting shuffle traffic by 35 %. The new pipeline reduced job runtime from **45 min** to **12 min**, yielding a $2.4K/month savings on EC2.

**Result**  
The improved partitioning cut latency by **73 %** and increased ad revenue by **$1.8M/quarter** due to fresher data. I documented the failure case (skewed partitions) in our post‑mortem, so future teams can avoid the same pitfall.

> *Bar‑raiser cue*: Demonstrated ownership, deep technical dive, quantified impact, and learned from a concrete failure scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
