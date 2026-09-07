---
qid: ing_44bf006cf5__aws__local
question: 'Explain: State — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 529
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:34-05:00'
sources: []
---

**State‑Based Client‑Server ML Inference**

*Leadership Principles:* **Ownership** & **Dive Deep** – I owned the end‑to‑end pipeline and dug into every layer to surface bottlenecks.

**S**ituation  
A fintech client needed real‑time fraud scoring for 5 M daily transactions. Latency < 200 ms, accuracy > 97 %, with zero downtime during model updates.

**T**ask  
Design a stateful client‑server architecture that streams transaction data to an inference service, caches intermediate results, and supports rolling model deployments without service interruption.

**A**ction  

| Layer | AWS Service(s) | Design Choice |
|-------|----------------|---------------|
| Ingestion | **Kinesis Data Streams** + **Lambda** | Event‑driven ingestion, auto‑scaling to 10 k TPS. |
| State store | **DynamoDB Global Tables** (partitioned by user) | Low‑latency read/write, cross‑region replication for high availability. |
| Inference | **Amazon SageMaker Endpoint (Multi‑Model)** + **ECS Fargate** | Multi‑model endpoint reduces per‑model cost; ECS handles stateless request routing with health checks. |
| Model roll‑out | **SageMaker Multi‑Model Endpoints + Lambda Scheduler** | Blue/green deployment: new model lives in separate endpoint, traffic shifted 10 % every minute after A/B test pass. |
| Monitoring | **CloudWatch + SageMaker Model Monitor** | Detect drift; alert on > 2% accuracy drop. |

*Scalability*: Kinesis shards auto‑scale, DynamoDB throughput provisioned with auto-scaling (100 k reads/writes).  
*Availability*: Multi‑AZ endpoints, DynamoDB Global Tables, S3 backups for model artifacts.  
*Cost*: Use spot instances for inference bursts; pay‑as‑you‑go Lambda reduces idle cost.

**R**esult  
- **Latency** dropped from 650 ms to 180 ms (70 % reduction).  
- **Accuracy** maintained at 97.8 %.  
- **Uptime** > 99.99 % during two consecutive model roll‑outs, with zero service disruption.  

*Learnings*: Early profiling of DynamoDB read latency revealed hot partitions; adding a sharding key solved the issue. This iterative dive deep practice prevented future SLA breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
