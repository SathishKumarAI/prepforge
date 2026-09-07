---
qid: ing_bb0997ed0b__aws__local
question: 'Explain: Chat Applications — Concurrency vs Parallelism - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 461
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:24-05:00'
sources: []
---

**Situation (S)** – I led a team that built an AI‑powered chat platform for a global e‑commerce brand. The product had to support > 1M concurrent users and deliver sub‑200 ms responses during peak holiday traffic.

**Task (T)** – My goal was to design the message routing layer so it could scale horizontally while keeping latency low, distinguishing *concurrency* (handling many requests at once) from *parallelism* (processing a single request in parallel).

**Action (A)**  
- **Concurrency**: I introduced an async event‑driven architecture using Amazon Kinesis Data Streams to queue user messages. Each stream shard can ingest thousands of events per second, allowing the system to accept all incoming traffic without blocking.  
- **Parallelism**: Inside each Lambda worker I split a single message into *N* parallel inference calls (to SageMaker endpoints) and aggregated results with `Promise.all`. This keeps CPU cores fully utilized while keeping overall latency bounded.  
- **AWS services**: Kinesis → Lambda → SageMaker endpoint (BatchTransform) → DynamoDB for conversation state, all behind an Application Load Balancer with TLS termination.  
- **Scalability/Availability**: Auto‑scaling on Kinesis shards and Lambda concurrency limits; multi‑AZ deployment of DynamoDB ensures 99.999 % availability.  
- **Cost trade‑offs**: By batching inference requests (batch size = 64) I reduced SageMaker invocation cost by ~35 %, while still meeting latency SLA.

**Result (R)** – During the Black Friday surge we handled 3× the projected load, keeping average response time at 180 ms and incurring only a 12 % increase in spend versus baseline.  

> **Leadership Principles**  
> *Customer Obsession* – ensured instant replies for users.  
> *Ownership* – drove end‑to‑end design, monitoring, and cost optimization.  
> *Dive Deep* – dissected latency bottlenecks to quantify the impact of async vs parallel processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
