---
qid: ing_2137b5a349__aws__local
question: 'Explain: Why a database is not always the right tool for a queue based
  system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 421
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:17-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked with building a real‑time order‑processing pipeline that ingested 200 k orders per second and routed them to downstream microservices. The initial plan was to use an RDS database as the “queue” by inserting rows and polling for unprocessed records.

**Task (T)**  
I needed to prove whether a relational DB could handle the load without becoming a bottleneck, while keeping latency < 50 ms per order.

**Action (A)**  
I ran a **dive‑deep** benchmark: 200 k writes + 200 k reads per second on an Aurora cluster. The write throughput hit 90 % of the limit and read latency spiked to 120 ms after 10 min, exceeding our SLA.  
I then redesigned the flow using **Amazon SQS (Standard)** for decoupling and **DynamoDB Streams** to trigger Lambda workers. SQS offered > 300 k msg/s with sub‑50 ms latency; DynamoDB handled state updates at 1 M req/s with consistent read performance. Cost dropped from $12,000/month (Aurora) to $2,400/month.

**Result (R)**  
The new architecture reduced order‑to‑processing time by **70%**, cut infrastructure cost by **80%**, and improved reliability (99.999% SLA). I documented the trade‑offs: DB queues suffer from lock contention, scaling limits, and higher latency; message brokers excel at decoupling, horizontal scaling, and built‑in retries.

**Leadership Principles**  
- **Customer Obsession** – delivering orders faster for end users.  
- **Ownership & Dive Deep** – I owned the performance issue, benchmarked, and iterated until metrics met SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
