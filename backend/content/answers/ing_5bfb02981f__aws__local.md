---
qid: ing_5bfb02981f__aws__local
question: 'Explain: Heap — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 503
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:13-05:00'
sources: []
---

**Situation / Task**

I was asked to build a micro‑service that returns the *k* most frequent words from a large, continuously streamed text corpus (the “TopLeetCodeProblems” use case). The service had to process millions of lines per day with sub‑second latency and support dynamic updates.

**Action – Design & AWS Services**

1. **Data ingestion** – Kinesis Data Streams fed raw logs into an *AWS Lambda* that parsed each line, emitted word counts to a *DynamoDB* table (partition key: word).  
2. **Aggregation & Heap** – A scheduled Lambda (every 5 min) scanned the DynamoDB table and built a **min‑heap** (`heapq` in Python) of size *k*.  
3. **Result store** – The top *k* list was persisted to an *ElastiCache Redis* cluster for O(1) read latency.  
4. **API layer** – API Gateway + Lambda returned the cached result instantly.

The heap algorithm runs in **O(n log k)** time, keeping memory bounded to *k* entries regardless of corpus size. Using DynamoDB’s on‑demand capacity avoided over‑provisioning; Redis provided high availability with automatic failover.

**Result**

- Latency < 200 ms for API responses (99th percentile).  
- Cost: <$30/month versus $120/month if we used EC2 + manual scaling.  
- Scalability: The system handled a 10× spike in input volume without degradation, thanks to Kinesis’s auto‑scaling.

**Leadership Principles**

- **Ownership & Deliver Results** – I took full responsibility for end‑to‑end performance and cost, delivering a production‑ready service within two weeks.  
- **Dive Deep** – I profiled the heap operation, identified that *k* was the bottleneck, and tuned memory usage accordingly.

**Learning from Failure**

An earlier prototype used an in‑memory list; when the stream volume doubled, the Lambda ran out of memory. Switching to a heap + DynamoDB prevented that failure and taught me the value of incremental, data‑driven optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
