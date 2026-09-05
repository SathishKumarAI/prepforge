---
qid: ing_68278719c4__star__local
question: 'Explain: Scenario – The Canadian census — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 386
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:50-05:00'
sources: []
---

**Situation:**  
During a data‑engineering sprint for a Canada Census analytics platform, our team was ingesting raw demographic records into Amazon DynamoDB while simultaneously running real‑time dashboards that queried the same table. The access pattern was highly uneven: certain regions (e.g., Ontario) were read 80% of the time, whereas rural provinces contributed only sporadic writes.

**Task:**  
I had to design a schema and provision strategy that would keep latency low for hot keys without overspending on capacity for cold data, all while staying within our $2k monthly budget.

**Action:**  
I re‑structured the table into two partitions: a “hot” partition using the region code as hash key and an “cold” partition keyed by a composite of province and census year. For the hot partition I enabled *DynamoDB Adaptive Capacity* with on‑demand mode, letting AWS automatically shift read/write units between shards as traffic skewed toward Ontario. I also added a global secondary index for age groups to support ad‑hoc queries. To avoid sudden cost spikes, I set up CloudWatch alarms that triggered an auto‑scaling policy to cap provisioned throughput at 500 RCU/WCU during off‑peak hours.

**Result:**  
Read latency dropped from 120 ms to under 20 ms for the top 10% of keys, while overall monthly spend stayed within $1.9k. The adaptive capacity feature proved essential; it eliminated manual shard tuning and allowed us to handle unpredictable spikes during election periods without service degradation. I learned that in DynamoDB, thoughtful partitioning combined with Adaptive Capacity can turn uneven traffic into a cost‑efficient, low‑latency solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
