---
qid: ing_9430adb2da__star__local
question: 'Explain: Main Terms - SQL vs DynamoDB vs Document-DB vs Search-Index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 351
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:25-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a recommendation engine that had to pull user interaction data in real time while also storing long‑term click logs for batch training. The existing SQL database was slow on ad‑hoc joins, and our NoSQL cluster kept growing out of control.

**Task:**  
I needed to decide which storage solution would best support both low‑latency reads for the live service and flexible schema for analytics, while keeping costs predictable.

**Action:**  
I mapped each technology: SQL (relational tables) was great for ACID guarantees but lacked horizontal scaling; DynamoDB offered key‑value access with auto‑scaling but limited secondary indexes; Document‑DB let us store semi‑structured logs in JSON and query by fields; Search‑Index (Elasticsearch) enabled full‑text search and aggregations. I set up a hybrid pipeline: DynamoDB for real‑time user state, Document‑DB to ingest raw click streams, and Elasticsearch to surface top items via faceted search. I wrote Lambda functions to stream from S3 into the index and used AWS Glue to transform logs for batch training.

**Result:**  
The live recommendation latency dropped from 350 ms to under 80 ms, while storage costs fell by 25% thanks to tiered pricing in DynamoDB. Analytics jobs finished 40% faster, and we could iterate on models twice as often. I learned that no single database fits all use cases; a thoughtful mix of SQL, NoSQL, document stores, and search indices can deliver both performance and flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
