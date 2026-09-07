---
qid: ing_1706d897a0__aws__local
question: 'Explain: 125: System Design Interview — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 521
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:54-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a production‑grade ChatGPT‑style service for a global e‑commerce platform that must handle 5 M QPS, provide sub‑200 ms latency, and support 10 k concurrent users per region.

**Action – System Design**  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **API Gateway + Lambda@Edge** | API Gateway, Lambda@Edge | Low‑latency edge routing; auto‑scales to spikes. |
| **Inference Engine** | Amazon SageMaker endpoint (multi‑node, GPU instances) with *Model Registry* | Enables blue/green deployments and rollback. |
| **Cache & Context Store** | Amazon ElastiCache‑Redis (clustered, read replicas) | Keeps conversation context; reduces model calls by 70 %. |
| **Message Bus** | Amazon MQ (Kafka) | Decouples request ingestion from inference workers for back‑pressure handling. |
| **Observability** | CloudWatch metrics + X-Ray traces | Detect latency spikes within 5 s, trigger auto‑scaling. |

*Scalability*: Auto‑scaling groups on Lambda@Edge and SageMaker endpoints react to traffic in <30 s.  
*Availability*: Multi‑AZ deployment with active‑standby Redis; SageMaker endpoints use *Multi‑Model* hosting for zero‑downtime updates.  
*Cost*: Spot GPU instances (50 % cheaper) + cache hit rate 70 % → $0.12 per inference vs $0.35 on on‑demand.

**Result**  
Pilot with 100k users reduced average latency from 350 ms to 180 ms, cut inference cost by 45 %, and increased user satisfaction scores by 18 pts (CSAT 4.6 → 4.8).  

**Reflection (Bar‑raiser cues)**  
- **Ownership**: Took full responsibility for end‑to‑end latency & cost.  
- **Dive Deep**: Benchmarked Redis hit rates, modeled GPU utilization curves.  
- **Quantified Impact**: Delivered concrete metrics (latency, cost, CSAT).  
- **Learning from Failure**: Early prototype over‑provisioned GPUs; switched to spot and multi‑model hosting after observing 30 % waste.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
