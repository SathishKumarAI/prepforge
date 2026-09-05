---
qid: ing_e112186b1e__star__local
question: 'Explain: imbalance in your key space in my — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 350
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:47-05:00'
sources: []
---

**Situation:**  
During a migration project for our e‑commerce platform, we moved from a legacy SQL store to Amazon DynamoDB. The primary key was the user ID, but traffic revealed that only 5% of users generated more than 90% of the read/write load—an extreme key space imbalance.

**Task:**  
I had to design a schema and access pattern that would prevent hot partitions, keep latency under 10 ms, and maintain cost efficiency while preserving data integrity.

**Action:**  
1. I introduced a composite sort key by hashing the user ID with a per‑day timestamp (`userID#YYYYMMDD`).  
2. Implemented **partition sharding**: each day’s data was distributed across 50 logical partitions using a consistent hash of the date string.  
3. Added a global secondary index on `orderDate` to support analytics queries without touching hot keys.  
4. Leveraged DynamoDB Streams and Lambda to pre‑aggregate metrics into a separate “summary” table, reducing read pressure on the primary table.  
5. Monitored Hot Partition metrics via CloudWatch, tuning the shard count until the percentile latency dropped below 8 ms.

**Result:**  
The read/write throughput stabilized at ~1.2 M RCU/WCU with no hot partitions detected. Latency improved from 35 ms average to 7 ms, and we reduced costs by 18% compared to a naïve single‑partition design. I learned that proactive sharding and secondary indexes are critical when facing key space skew in DynamoDB deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
