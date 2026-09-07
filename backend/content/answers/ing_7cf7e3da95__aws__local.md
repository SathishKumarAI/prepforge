---
qid: ing_7cf7e3da95__aws__local
question: 'Explain: Common agent patterns — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 415
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to architect a production‑grade recommendation engine that could serve millions of users while keeping latency under 50 ms. The team had only a handful of ML engineers, so we needed an “agentic” pattern—an autonomous, self‑optimizing component that would reduce ops overhead.

**Action (Design)**  
I introduced the **Agentic Engineering** pattern from Neo Kim & Paul Hoekstra:  
1. **Data‑Driven Agent** – a lightweight Lambda function that polls CloudWatch metrics and S3 model checkpoints every 5 min.  
2. **Self‑Healing Loop** – if inference latency spikes, the agent automatically triggers an Auto Scaling group of EC2 Spot instances running SageMaker Neo‑optimized models.  
3. **Policy Engine** – uses AWS Step Functions to enforce A/B tests and rollback on failure.

Key services: *SageMaker* (for training), *Lambda*, *Step Functions*, *CloudWatch*, *EC2 Spot* for cost control, and *ECS Fargate* for stateless inference containers. I added a DynamoDB table as the agent’s decision store, ensuring eventual consistency and low read latency.

**Result**  
- Latency dropped from 120 ms to **48 ms** (≈60% improvement).  
- Monthly cost decreased by **35%** through spot‑instance usage.  
- Mean time to recovery fell from 1.2 h to <5 min, satisfying our SLA.

**Reflection**  
I learned that the agent’s “policy engine” must be auditable; I added CloudTrail logging and a weekly review cadence. This experience reinforced *Ownership* (taking full responsibility for the end‑to‑end pipeline) and *Dive Deep* (profiling every component to identify bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
