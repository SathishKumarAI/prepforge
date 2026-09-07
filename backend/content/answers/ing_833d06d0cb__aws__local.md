---
qid: ing_833d06d0cb__aws__local
question: 'Explain: Horizontal Scaling (Scale Out) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 512
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:45-05:00'
sources: []
---

**Horizontal scaling (scale‑out)** is the practice of adding more identical nodes to a system so that each node shares the load and the total capacity grows linearly.

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Identify stateless work** | Refactor services to be stateless or use shared state (e.g., DynamoDB, ElastiCache). | Statelessness lets any node handle any request. |
| **Use a load balancer** | Amazon ELB/ALB distributes traffic evenly across EC2/ECS/Fargate tasks. | Guarantees even load and health‑check based routing. |
| **Auto‑scaling** | Configure CloudWatch alarms on CPU, RPS or queue depth → ASG policy adds/removes instances. | Keeps cost in line while meeting demand spikes. |
| **Stateful data** | Store model weights/metadata in S3; inference results in DynamoDB or Redis. | Decouples compute from storage, enabling rapid scaling. |

### STAR Example
- **Situation:** 500 k requests/day for a real‑time recommendation model.
- **Task:** Reduce latency below 200 ms while handling peak bursts of 5× normal traffic.
- **Action:** Deployed the inference service on ECS with Fargate, added an ALB, and set ASG to scale based on CloudWatch RPS. Stored the 2 GB model in S3 and loaded it into each task’s local cache at startup.
- **Result:** Latency dropped from 350 ms to 180 ms; peak traffic handled with 8× more containers; cost rose only 15% compared to a single‑node solution, while throughput increased by 5×.  

**Leadership Principles Highlighted**

1. *Customer Obsession* – Delivered sub‑200 ms latency for end users.  
2. *Ownership* – Designed the entire scaling pipeline, from load balancer to auto‑scaling policies.

**Bar‑raiser focus:** Look for evidence of **ownership** (full responsibility), **dive deep** into metrics and trade‑offs (cost vs. performance), and a clear learning loop—here, we iterated on the autoscaling thresholds after observing a 30 % overshoot during peak tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
