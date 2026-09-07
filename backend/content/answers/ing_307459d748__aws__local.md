---
qid: ing_307459d748__aws__local
question: 'Explain: It can now if it is the — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 553
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:50-05:00'
sources: []
---

**S – Situation:**  
In a recent project I was asked to design an ML‑driven traffic prediction layer for a next‑generation navigation app (think Google Maps). The goal was to provide real‑time ETA updates with a 99% accuracy rate while keeping latency below 200 ms per user.

**T – Task:**  
I had to architect a scalable, highly available system that ingests live sensor streams, trains models on historical data, and serves predictions to millions of concurrent users worldwide.

**A – Action (Technical Design):**  

| Component | AWS Service(s) | Why |
|-----------|----------------|-----|
| Ingestion | **Kinesis Data Streams** + **Lambda** | Near‑real‑time capture of GPS & road sensor data. |
| Feature Store | **DynamoDB + S3** | Low‑latency reads for live features; S3 for bulk historical data. |
| Training | **SageMaker Pipelines** on **EC2 Spot + EFA** | Cost‑efficient GPU training, automated hyper‑parameter tuning. |
| Serving | **SageMaker Endpoint (GPU inference)** behind **ALB** with **Auto Scaling** | Low latency, global edge via CloudFront. |
| Monitoring | **CloudWatch + SageMaker Model Monitor** | Detect drift; trigger retraining automatically. |

*Scalability:* Kinesis shards auto‑scale by traffic volume; SageMaker endpoints use GPU instances that can be scaled horizontally per region.  
*Availability:* Multi‑AZ deployments, ALB health checks, and failover to backup endpoints.  
*Cost:* Spot instances for training, Lambda for ingestion, reserved instances for serving reduce spend by ~35% vs on‑demand.

**R – Result:**  
After deployment, ETA accuracy rose from 85 % to **97 %**, latency dropped to **120 ms**, and we cut operational costs by **30 %**. The system handled a 10× traffic spike during a city marathon without degradation.

---

> **Leadership Principles Highlighted**
> *Customer Obsession* – delivering more accurate routes directly improves user experience.  
> *Ownership & Dive Deep* – I drove the end‑to‑end design, debugged latency bottlenecks, and iterated on feature engineering until metrics met targets.  

**Bar‑raiser takeaways:** Look for evidence of ownership, deep technical decisions backed by data, measurable impact, and a clear learning loop from failure (e.g., early latency spikes led to re‑architecting the ingestion pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
