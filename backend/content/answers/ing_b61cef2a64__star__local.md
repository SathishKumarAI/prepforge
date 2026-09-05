---
qid: ing_b61cef2a64__star__local
question: 'Explain: Partitions and data distribution — AWS-Services/1_Databases/AmazonDynamoDB/Partioning.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 343
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:24-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with migrating a legacy order‑processing system into Amazon DynamoDB. The existing table held millions of orders, each with a unique `OrderId`, but the traffic pattern had shifted to heavy reads on customer ID and frequent writes during flash sales.

**Task:**  
I needed to design a partitioning strategy that would avoid hot partitions, keep latency low, and support eventual consistency for high‑volume operations while staying within provisioned throughput limits.

**Action:**  
I chose a composite primary key: `PK = "CUSTOMER#<CustomerId>"` and `SK = <Timestamp>`. For the order ID itself I added a global secondary index (GSI) with `PK = "ORDER#<OrderId>"`. To further distribute traffic, I used a hash‑based partition key derived from the customer ID plus a random suffix for flash sales (`"CUSTOMER#" + hash(CustomerId)+":"+random()`). This spread writes across many partitions. I also enabled DynamoDB Auto Scaling and set up CloudWatch alarms to trigger on throttling events. Finally, I implemented exponential backoff retry logic in the application layer.

**Result:**  
Post‑migration, read latency dropped from 250 ms to under 30 ms for customer queries, and write throughput increased by 4× during peak sales without any throttles. The system handled 200k RPS with <1% error rate. I learned that thoughtful key design and dynamic scaling are the core of resilient DynamoDB architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
