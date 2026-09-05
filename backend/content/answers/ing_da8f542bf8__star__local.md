---
qid: ing_da8f542bf8__star__local
question: 'Explain: ID and we''re gonna choose that customer — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 352
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:19-05:00'
sources: []
---

**Situation:**  
During my second year at a fintech startup, we were migrating our legacy user‑profile service to Amazon DynamoDB to support 10 million active users. The schema design was critical because every API call had to resolve a customer record in under 5 ms.

**Task:**  
I had to decide the partition key (ID) that would give us even read/write distribution, minimize hot partitions, and keep queries fast for both “by‑email” and “by‑customer‑id” lookups.

**Action:**  
After reviewing the AWS re:Invent 2018 talk “Amazon DynamoDB Under the Hood,” I implemented a composite key: `PK = "USER#" + customerId` and `SK = "META"` for profile data, while secondary indexes (`GSI1`) used `email` as the partition key. I also added a hashed surrogate ID (`hash(customerId) % 1024`) to spread writes across 1 024 partitions, mitigating hotspot risk. Using CloudWatch metrics, I tuned the provisioned throughput to 2 000 RCU/WCU per shard and set auto‑scaling with a 70% utilization target.

**Result:**  
Post‑migration latency dropped from 12 ms average to 3 ms, while throughput hit 95 % of peak traffic without throttling. The system now scales linearly to 20 million users. I learned that choosing the right key strategy—guided by DynamoDB’s internal architecture—turns a simple lookup into a scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
