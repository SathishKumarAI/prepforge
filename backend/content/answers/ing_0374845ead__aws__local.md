---
qid: ing_0374845ead__aws__local
question: 'Explain: Summary — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 392
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:00-05:00'
sources: []
---

**Situation & Task**  
I led a project at my previous company where we needed to ingest telemetry from ~5 M IoT devices in real time and run ML inference to flag anomalies before customers noticed service degradation. The goal was 99.9 % publish‑subscribe latency under 200 ms and 24/7 availability.

**Action – System Design**  
I chose **Amazon Kinesis Data Streams** for low‑latency ingestion, then used **AWS Lambda** (concurrency‑scalable) to transform records into a schema‑validated JSON stream. For the pub/sub layer I deployed **Amazon SNS topics** per anomaly category; each topic has multiple **SQS queues** subscribed, allowing horizontal scaling of consumer microservices.  
For ML inference I spun up an **ECS Fargate** cluster running a TensorFlow model served by **TensorRT** on GPU‑enabled tasks, auto‑scaling via CloudWatch metrics (CPU > 70 % → +1 task). Results are stored in **Amazon DynamoDB** with a TTL for 30 days.  

**Result**  
We achieved **latency <180 ms** (average 142 ms) and **99.97 % availability** over six months, reducing customer‑reported incidents by **38 %**. Cost was kept under $15k/month versus the previous $35k.

**Reflection & Learning**  
Ownership drove me to audit the entire pipeline; a deep dive into CloudWatch logs revealed that throttling on SQS caused spikes—adding dead‑letter queues mitigated this. The experience reinforced *Customer Obsession* (reducing downtime) and *Dive Deep* (continuous monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
