---
qid: ing_df5fc6a99c__star__local
question: 'Explain: Using sort keys for version control — Best practices for using
  sort keys to organize data in DynamoDB - Amazon DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 347
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:26-05:00'
sources: []
---

**Situation:**  
When building a multi‑tenant recommendation engine, our team stored user interaction logs in DynamoDB. Each record had an immutable `user_id` and a mutable `event_timestamp`. We discovered that queries for the latest interactions were slow because items were scattered across partitions; the primary key was `user_id#timestamp`, but we kept appending new timestamps without any ordering strategy, leading to hot spots.

**Task:**  
Design a sort‑key schema that keeps recent events in a predictable range, limits write amplification, and still supports efficient queries for both “latest N” and “events within a time window.”

**Action:**  
I introduced a composite sort key: `sort_key = <year-month> + #<timestamp>`. For example, `2024-09#1694102400`. This groups items by month, ensuring each partition holds roughly the same number of writes. I added an auxiliary GSI with `user_id` as partition key and a descending‑sorted sort key (`-timestamp`) so that fetching the most recent events requires only one range scan. I also implemented TTL on old months to automatically purge data older than 12 months, keeping storage costs low.

**Result:**  
Read latency for “latest 50 interactions” dropped from ~250 ms to <30 ms, and write throughput stabilized at 200 WCU with no hot spots. The system now scales linearly as user base grows. I learned that thoughtful sort‑key partitioning combined with GSIs can turn DynamoDB into a high‑performance time‑series store when you need both freshness and historical queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
