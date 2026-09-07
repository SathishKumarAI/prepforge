---
qid: ing_ab07f0db45__aws__local
question: 'Explain: Database/Storage — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:22-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to build a notification service that would push up‑to‑100 k events per second to mobile, web and email channels while guaranteeing **99.999% availability** and sub‑200 ms latency for critical alerts.

**Action (Design)**  
1. **Event ingestion** – an API Gateway + Lambda front‑end writes to a *Kafka* cluster (MSK) for decoupling and replayability.  
2. **Processing & routing** – each partition is consumed by a Kinesis Data Analytics job that enriches the payload (user preferences, geo‑region).  
3. **Storage** – deduplicated events are persisted in DynamoDB with a TTL of 7 days; the primary key is `notificationId#timestamp`.  
4. **Dispatch** – a fleet of ECS Fargate tasks poll DynamoDB Streams and invoke SNS topics per channel (SMS, Push, Email).  
5. **Monitoring & scaling** – CloudWatch metrics feed an Auto Scaling policy on the Lambda concurrency and ECS task count; alerts are sent back through the same pipeline.

**Result**  
- Throughput increased from 20 k/s to 120 k/s (+500%) without new hardware.  
- Latency dropped to 140 ms average, meeting SLA.  
- Cost stayed under $12k/month versus an estimated $18k if we had used a monolithic EC2 solution.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dove deep into partition key design to avoid hotspots, quantified impact with clear metrics, and learned that early Kafka tuning was critical—without it we’d have hit backpressure during traffic spikes.  

*Leadership Principles:* **Customer Obsession** (fast, reliable alerts), **Ownership** (full lifecycle ownership), **Dive Deep** (partitioning & cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
