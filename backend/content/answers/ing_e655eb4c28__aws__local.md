---
qid: ing_e655eb4c28__aws__local
question: 'Explain: High Scalability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 596
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:57-05:00'
sources: []
---

**High‑Scalability ML System Design – A Quick Cheat Sheet**

> **Leadership Principles:** *Customer Obsession* (design for real user load) & *Ownership* (own the end‑to‑end pipeline).

### STAR

- **Situation:** 1M daily users upload images; model inference latency < 200 ms.  
- **Task:** Build a fault‑tolerant, auto‑scalable inference service.  
- **Action:**  
  - *Data ingestion:* S3 + Kinesis Data Streams → Glue ETL.  
  - *Model serving:* TensorFlow Serving in ECS Fargate behind an Application Load Balancer (ALB).  
  - *Auto‑scale:* Target tracking on CPU / GPU usage; spot instances for cost.  
  - *Cache:* ElastiCache Redis to store recent predictions (TTL = 5 min).  
  - *Observability:* CloudWatch metrics + X-Ray tracing; alarms trigger Lambda to rollback if error > 2%.  
- **Result:** Latency dropped from 1.4 s to 180 ms, throughput increased 6×; cost savings of 35% using spot instances; SLA ≥ 99.9%.

### Design Highlights

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingestion | S3 + Kinesis | Durable storage + real‑time stream |
| ETL | Glue | Serverless, scales with data size |
| Serving | ECS Fargate + TensorFlow Serving | No servers to manage; auto‑scales |
| Load Balancing | ALB | 5 k requests/sec, path‑based routing |
| Cache | ElastiCache Redis | Reduces model calls by ~70% |
| Observability | CloudWatch & X-Ray | Detect anomalies within 1 min |

### Trade‑offs

- **Cost vs. Latency:** Spot instances reduce cost but add risk of sudden termination; mitigated with graceful shutdown hooks.
- **Simplicity vs. Flexibility:** Fargate eliminates cluster ops but limits GPU types; consider EKS if custom GPUs needed.

**Bar‑raiser Checklist**

| What I’ll Listen For | Why It Matters |
|----------------------|----------------|
| Ownership of end‑to‑end flow | Shows full responsibility |
| Dive deep into metric thresholds | Indicates technical depth |
| Quantified impact (latency, cost) | Validates business value |
| Lessons from a failure (e.g., spot loss) | Demonstrates learning mindset |

*This cheat sheet keeps the architecture lean, highly available, and cost‑effective while delivering measurable customer‑centric results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
