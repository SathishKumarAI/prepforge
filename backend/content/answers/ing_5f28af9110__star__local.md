---
qid: ing_5f28af9110__star__local
question: 'Was DynamoDB the right choice? — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 316
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:31-05:00'
sources: []
---

**Situation:**  
When I joined the media ingestion team at Canva, we were hitting a plateau—our legacy RDBMS could only support about 1 million upload requests per day before latency spiked to 400 ms and throttling kicked in.

**Task:**  
I had to architect a new persistence layer that would comfortably handle 50 million uploads daily while keeping read/write costs under $200k/month and ensuring sub‑100 ms latencies for the most active users.

**Action:**  
I evaluated NoSQL options, settled on DynamoDB because of its single‑digit millisecond performance at scale, built a sharded key design (partition key = user_id + upload_date, sort key = file_hash), and enabled auto‑scaling with a 30 % buffer. I added DynamoDB Streams to trigger Lambda for thumbnail generation and used DAX caching for frequent metadata reads. To keep costs in check, I turned on on‑demand capacity during peak launches and reserved capacity afterward.

**Result:**  
Within three months we hit 50 million uploads/day with average latency at 85 ms and an $180k/month bill—30% cheaper than the projected RDS cost. The exercise taught me to balance throughput, cost, and consistency by picking the right data model rather than forcing a relational schema onto a write‑heavy workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
