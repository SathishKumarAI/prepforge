---
qid: ing_5b8eaec010__star__local
question: 'Explain: Partitioning Key Tips - DynamoDB — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:34-05:00'
sources: []
---

**Situation** – In a server‑less e‑commerce app I was tasked to redesign the order history table in DynamoDB after the read latency spiked from 5 ms to over 200 ms during peak sales. The table stored millions of orders and had a single hot partition because every query used the same user‑id as the key.

**Task** – My goal was to redistribute traffic evenly across partitions while keeping the query pattern (user → recent orders) intact, and reduce read latency below 10 ms.

**Action** – I introduced a hashed composite partition key: `PK = USER#<hash(userId)>` where `<hash>` was an MD5 of the user ID. The sort key stayed as `SK = ORDER#<timestamp>`. To preserve the ability to fetch all orders for a user, I added a global secondary index (GSI) with `USER_ID` as its partition key and `ORDER_TIMESTAMP` as the sort key. I also updated the application layer to compute the hash on read/write, using AWS SDK v3 in Node.js, and ran a migration script that rebuilt items incrementally.

**Result** – The table now spreads writes across ~200 partitions, cutting write throughput costs by 35 %. Read latency dropped from 200 ms to 8 ms under load, and the hot‑partition warning disappeared. I learned that a simple hash trick can dramatically improve scalability, but it requires careful migration planning and secondary indexes for legacy query patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
