---
qid: ing_baa46520b5__aws__local
question: 'Explain: Background Processing — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 399
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:32-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a recommendation engine that processed user events in real time. The previous monolithic batch pipeline caused >30 min latency and a 20 % drop in click‑through rate during peak traffic.

**Action – Design**  
I introduced an event‑driven architecture using **Amazon SQS FIFO queues** to guarantee order, coupled with **AWS Lambda** for stateless workers. Each message carried a user ID and action payload; Lambda triggered downstream **Amazon SageMaker Batch Transform** jobs that updated the model incrementally. To handle bursts I leveraged **SQS dead‑letter queues** and **Auto Scaling Groups** for the Lambda concurrency limit.

I selected SQS over Kinesis because our throughput (≈ 5k events/s) was comfortably within SQS limits, and it offered lower cost ($0.40 per million requests vs $2.50). For durability I stored raw logs in **Amazon S3** with lifecycle policies to archive after 30 days.

**Result**  
Latency dropped from 30 min to <5 s, improving click‑through rate by 18 % and reducing infrastructure cost by 12 %. The system scaled to 15k events/s without manual intervention.  

**Leadership Principles**  
- **Customer Obsession:** Delivered faster recommendations that directly boosted user engagement.  
- **Ownership & Dive Deep:** I owned the end‑to‑end pipeline, measured every component, and iterated until metrics met SLA.

*Bar‑raiser notes*: The answer demonstrates ownership (owning the redesign), depth (explaining queue choice, scaling, cost trade‑offs), quantified impact (latency, CTR, cost), and learning from failure (moving from batch to event‑driven).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
