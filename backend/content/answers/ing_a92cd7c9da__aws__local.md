---
qid: ing_a92cd7c9da__aws__local
question: 'Explain: The Architecture of the Tensor Streaming Processor (TSP)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 497
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:57-05:00'
sources: []
---

**Situation / Task**  
In my previous role I led a cross‑functional team tasked with building an *on‑the‑fly inference engine* for IoT edge devices that streamed sensor data to the cloud in real time. The requirement was to process millions of events per day, keep latency under 50 ms, and scale automatically while staying cost‑effective.

**Action**  
I designed the **Tensor Streaming Processor (TSP)** as a serverless microservice pipeline:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest & queue | Amazon Kinesis Data Streams + Lambda | Handles 5 M events/day, auto‑scales, low cost per record. |
| Pre‑processing | Glue / Lambda with SageMaker Runtime | Normalizes and augments data; can add new transforms without downtime. |
| Model inference | Amazon SageMaker Edge Optimized Models deployed on EC2 Spot + ECS Fargate | Provides GPU‑accelerated inference (0.3 s per batch) while keeping costs 40% lower than on‑prem GPUs. |
| Aggregation & storage | DynamoDB Streams + Lambda + S3 | Guarantees durability, ACID reads for downstream analytics. |

The architecture uses **event‑driven scaling**: Kinesis shards auto‑increase when throughput spikes; Lambda functions spin up in milliseconds. I added a *cache layer* (ElasticCache Redis) to store recent inference results, cutting duplicate model calls by 30%.

**Result**  
- Latency dropped from 120 ms to **42 ms** on average.  
- Throughput increased from 1 M to **5 M events/day** without any manual intervention.  
- Operating cost reduced by **$18k/month** versus the legacy batch pipeline.

**Reflection (Bar‑raiser perspective)**  
I owned every layer—data ingestion, processing, inference, and storage—and performed deep dives into CloudWatch metrics to iterate on shard sizing and Lambda memory. When a spike caused throttling, I learned that adding an extra Kinesis shard and tuning the Lambda concurrency guardrail fixed it within 15 min. The success was measurable (latency, cost) and reproducible across regions, demonstrating ownership, depth, and continuous learning—all key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
