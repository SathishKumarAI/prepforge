---
qid: vq_dfe3e5b592__star__local
question: Explain about sort Merge Bucket Join?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 351
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:45-05:00'
sources: []
---

**Situation:**  
At a media analytics firm we had to merge two daily fact tables—user activity logs and ad impressions—to generate a campaign performance report. Each table was partitioned by date, but the user‑activity table had 120 M rows while the ad table only had 12 M. The existing hash join pipeline was choking on memory and taking over an hour to finish.

**Task:**  
I needed to redesign the merge so that it would run in under 15 minutes, keep resource usage bounded, and preserve accurate joins across the two partitions without materializing entire tables in RAM.

**Action:**  
I implemented a **Sort‑Merge‑Bucket Join**. First, both tables were bucketed on the foreign key (user_id) into 256 buckets using Spark’s `repartitionByRange`. Within each bucket I sorted rows by `event_timestamp`. Then, during the join phase, Spark streamed through each bucket pair, merging the sorted streams with a two‑pointer algorithm that only kept one row from each side in memory at any time. This eliminated shuffling of the large activity table and allowed us to process each bucket independently on local executors.

**Result:**  
The job runtime dropped from 65 minutes to 12 minutes, and peak executor memory fell by 40 %. The final report showed a 0.02% difference in metrics compared to the legacy hash join, confirming correctness. I learned that careful bucketing plus streaming merge can turn an otherwise infeasible large‑scale join into an efficient, scalable operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
