---
qid: ing_39f696c24b__star__local
question: 'Explain: Choosing the Right DynamoDB Partition Key'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:34-05:00'
sources: []
---

**Situation**  
In a recent recommendation engine project we stored user‑interaction logs in DynamoDB. The table had over 10 million items and needed to support real‑time feature extraction for our ML pipeline. However, initial tests showed that reads were throttling because all writes went to the same partition key value.

**Task**  
I was tasked with redesigning the schema so that read/write traffic would be evenly distributed while still allowing efficient queries by user ID and time window for the downstream model training.

**Action**  
I performed a workload analysis: most queries required “get last 24 h of interactions for a specific user.” I decided to use a composite key with `user_id` as the partition key and a timestamp‑based sort key (`event_ts`). To avoid hot partitions, I added a hash prefix derived from the first three characters of the user ID (e.g., `A12#user12345`). This spread writes across multiple physical partitions. I also enabled provisioned throughput with auto‑scaling and set TTL on old events to keep table size manageable.

**Result**  
After deploying, read latency dropped from 250 ms to under 30 ms, and the request unit usage flattened by ~70%. The ML pipeline could now pull training data in near real‑time, improving model update frequency. I learned that balancing partition key design with query patterns is critical for both performance and cost efficiency in DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
