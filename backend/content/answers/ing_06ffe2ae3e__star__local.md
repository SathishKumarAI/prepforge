---
qid: ing_06ffe2ae3e__star__local
question: 'Explain: And then a scan allows you to — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 364
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:04-05:00'
sources: []
---

**Situation:**  
I was building a recommendation engine for an e‑commerce platform that had to ingest and analyze 12 million user interaction records daily. Our existing PostgreSQL cluster couldn’t keep up with the read traffic during nightly feature extraction.

**Task:**  
Select a NoSQL store that would let us perform large, ad‑hoc scans efficiently while still supporting fast point lookups for real‑time personalization.

**Action:**  
I evaluated DynamoDB and MongoDB Atlas. DynamoDB’s native Scan operation could retrieve all items in a table with parallelism, and its on‑demand capacity avoided throttling during peak loads. I implemented a paginated Scan using the `ExclusiveStartKey` pattern, combined with AWS Lambda to stream results into an Amazon Kinesis Data Firehose that fed into an Apache Spark cluster for feature engineering. To reduce scan cost, I added a global secondary index on `user_id` so most scans were narrow and could use Query instead of full Scan when possible.

**Result:**  
The nightly extraction time dropped from 90 minutes to 12 minutes (an 86% reduction). Storage costs fell by ~30% because we avoided over‑provisioned RDS instances. I learned that understanding the underlying scan mechanics—pagination, parallelism, and cost per read—can turn a seemingly expensive operation into a scalable backbone for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
