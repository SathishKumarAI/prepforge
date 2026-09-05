---
qid: ing_8494437919__star__local
question: 'Explain: Examples — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 357
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:24-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were building a real‑time fraud detection model that ingested millions of transaction events per day from our Kafka streams and stored them in Azure Cosmos DB for batch training.

**Task:**  
I needed to design the data partitioning strategy so the ingestion pipeline could scale horizontally, queries stayed fast, and our Spark jobs could efficiently read only relevant slices during retraining without exhausting I/O.

**Action:**  
We chose a composite partition key: `customer_id + transaction_date`. The customer ID ensured that all events from the same user lived on one logical partition, which prevented hot‑spots when a few high‑volume merchants pushed many transactions. Adding the date (YYYYMM) bounded each partition to a 30‑day window, keeping individual partitions below Cosmos DB’s 10 GB limit and enabling us to prune older data during nightly training jobs. In Spark we used `filter(partition_key = 'customer_id=12345 AND transaction_date=202410')` so the executor only pulled 2 MB of relevant rows instead of scanning the entire collection.

**Result:**  
Throughput increased from ~8k TPS to >35k TPS, query latency dropped 70%, and our training pipeline ran 40% faster. I learned that a well‑thought‑out partition key balances write locality with read efficiency, and that incorporating business logic (customer + time) can dramatically reduce contention in distributed databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
