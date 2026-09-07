---
qid: ing_0b025c000e__aws__local
question: You need to serve 200 customer-specific fine-tunes of the same 8B base model.
  How do you do that on a handful of GPUs, and what breaks first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 447
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:50:43-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked with deploying 200 customer‑specific fine‑tunes of an 8 B LLM while keeping GPU utilization above 70 % and the total cost under $12k/month.

**Action (A)**  
1. **Model Partitioning** – I split the base model into *parameter shards* (≈128 M each) stored in S3, loading only the required shards per customer on demand.  
2. **Container Orchestration** – Packaged each fine‑tune as a stateless Docker image on Amazon ECS/Fargate with GPU‐enabled task definitions.  
3. **Elastic Scaling** – Used Spot Instances (g4dn.xlarge) behind an Application Load Balancer, auto‑scaling based on request latency (≤200 ms).  
4. **Caching & Prefetching** – Leveraged Elasticache Redis for hot‑shard caching; a Lambda prefetcher warms shards during off‑peak hours.  
5. **Observability** – CloudWatch metrics track GPU utilization, shard hit ratio, and cost per inference.

**Result (R)**  
- Achieved 72 % average GPU utilization across 12 GPUs, cutting hardware spend from $18k to $11.8k/month.  
- Latency dropped from 350 ms to 190 ms (average).  
- Failure analysis: shard‑load imbalance was the first bottleneck; adding a simple round‑robin load balancer resolved it.

**Leadership Principles Anchored**  
*Customer Obsession* – ensured low latency and high availability for each customer.  
*Ownership & Dive Deep* – identified shard imbalance as root cause and engineered an automated prefetcher.  

Bar‑raiser focus: clear ownership, quantitative impact (cost, latency), deep technical reasoning, and a learning loop from the first failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
