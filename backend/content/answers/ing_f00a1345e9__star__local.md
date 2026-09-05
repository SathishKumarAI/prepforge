---
qid: ing_f00a1345e9__star__local
question: 'Explain: So what happened on a PC or — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 360
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:22-05:00'
sources: []
---

**Situation:**  
At the AWS re:Invent 2021 conference I was leading a prototype for a real‑time analytics platform that would ingest millions of sensor events per second from IoT devices in a smart factory. The data had high write throughput, varied schema, and needed sub‑millisecond query latency for dashboards.

**Task:**  
Select the NoSQL database that could handle the write scale, flexible schema, and low‑latency reads while staying within our $5k/month budget and allowing easy migration to production in 12 weeks.

**Action:**  
I compared DynamoDB, MongoDB Atlas, and Amazon DocumentDB. I set up a benchmark script using `wrk` and AWS SDKs to simulate 2M writes/sec with 100‑byte documents. For read latency I used CloudWatch metrics and added caching layers (DAX for DynamoDB, Redis for others). I also evaluated consistency models, TTL support, and backup costs. After testing, DynamoDB’s on‑demand mode met the write load, offered single‑digit millisecond reads, auto‑scaling, and native integration with AWS services like Lambda and Kinesis.

**Result:**  
We deployed DynamoDB in production; write latency dropped from 50 ms to <10 ms, read latency stayed below 5 ms even under peak traffic, and the total cost was 30% lower than projected. I learned that real‑time benchmarks combined with a clear cost‑benefit matrix are essential when choosing NoSQL for high‑scale IoT workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
