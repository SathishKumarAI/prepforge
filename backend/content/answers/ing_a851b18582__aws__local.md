---
qid: ing_a851b18582__aws__local
question: 'Explain: Meta Dynamic Programming — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:20-05:00'
sources: []
---

**Situation** – In my last role I led a team that had to implement **Meta‑Dynamic Programming (MDP)** for an internal recommendation engine used by > 1 M daily users. The goal was to reduce latency from 200 ms to < 80 ms while keeping model accuracy above 0.92.

**Task** – Design a scalable, low‑cost system that trains MDP models on streaming click data and serves predictions with sub‑100 ms response time.

**Action** –  
1. **Data ingestion**: Kinesis Data Streams → Lambda (data enrichment) → S3 for raw & processed logs.  
2. **Feature store**: DynamoDB + ElasticCache Redis to cache the latest state vectors; TTL set to 5 min to keep freshness.  
3. **Training**: SageMaker Pipelines orchestrated by Step Functions, using an AutoML hyper‑parameter sweep on GPU instances (p3.2xlarge). Models are serialized to S3 and registered in SageMaker Model Registry.  
4. **Serving**: SageMaker RealTimeInference endpoints behind an Application Load Balancer with target group health checks; autoscaling policy based on CPU utilization (≤ 70 %).  
5. **Observability**: CloudWatch metrics + X-Ray tracing for end‑to‑end latency, and a custom dashboard in Grafana.

**Result** – Latency dropped to 65 ms (+ 35 % improvement), accuracy stayed at 0.93, and the monthly cost decreased from $12K to $7.5K (≈ 37 % savings). The solution also reduced model rollout time from weeks to days.

---

### Leadership Principles  
- **Customer Obsession** – Delivered a faster, more accurate recommendation experience for millions of users.  
- **Ownership & Dive Deep** – Designed the end‑to‑end pipeline, tuned every component, and iterated on failures (e.g., cache eviction strategy).  

*Bar‑raiser listens:* depth of technical trade‑offs, quantified impact, proactive learning from a failed cache hit that initially caused 200 ms spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
