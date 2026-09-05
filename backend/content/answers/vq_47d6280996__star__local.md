---
qid: vq_47d6280996__star__local
question: How to find counts based on age group?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:25-05:00'
sources: []
---

**Situation** – In my last role at a health‑tech startup we were launching a new analytics dashboard for our patient portal. The product team wanted a quick view of how many users fell into each age bracket (18–25, 26–35, etc.) to tailor content and compliance notices.

**Task** – I had to design an efficient pipeline that would ingest the raw user table (over 3 million rows), compute counts per age group, refresh every hour, and expose the result as a lightweight REST endpoint for the front‑end.

**Action** – First, I wrote a PySpark job on Databricks that joined the `users` table with our `demographics` lookup to calculate age from birthdate. Using Spark’s built‑in `bucketBy` I pre‑aggregated counts into 10-year buckets (`age_bucket = (age/10)*10`). The job ran in under two minutes, thanks to partition pruning on the `created_at` column and caching of the demographics table. I stored the aggregated result in a Delta Lake table with time travel enabled, then exposed it via an Azure Function that queried only the latest snapshot, returning JSON.

**Result** – The dashboard now updates every hour with sub‑second latency. We cut the query time from 15 seconds to <200 ms for end users and reduced our Spark cluster cost by ~30% by using Delta Lake’s efficient storage. I learned how careful bucketing and partitioning can turn a costly full scan into a fast, incremental aggregation that scales with data growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
