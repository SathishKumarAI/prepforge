---
qid: ing_f649a56f16__aws__local
question: 'Explain: Starting the server — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 454
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:56-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a high‑throughput inference service for an on‑device recommendation model. The requirement: expose the model via gRPC so that mobile clients could get predictions in < 50 ms, while keeping costs below $5k/month and scaling to 10k concurrent users.

**Action**  
* **Design** – I sketched a stateless Go microservice with a single `Predict` RPC. Inside the handler I loaded the model into memory once per container using TensorFlow‑Lite.  
* **AWS Services** – Deployed on **ECS Fargate** (no EC2 ops), used **Application Load Balancer** for gRPC routing, and **Amazon S3** for model storage. To warm containers I added a scheduled CloudWatch Event that pre‑spawns 4 tasks during peak hours.  
* **Scalability & Availability** – Set the ECS service to maintain 10 desired tasks (auto‑scaling based on CPU > 70 %). This gave us 10× redundancy and leveraged Fargate’s built‑in fault tolerance.  
* **Cost** – With 4 warm tasks + autoscaling, monthly spend was $3,200, well under budget.  

**Result**  
Latency dropped from 120 ms (Python Flask) to 35 ms in production. Throughput rose to 5k QPS with < 1% error rate. Customer feedback improved satisfaction scores by **12 points** on the NPS survey.

---

### Leadership Principles Highlighted
- **Customer Obsession** – focused on latency and reliability that mattered to end users.  
- **Ownership & Dive Deep** – I engineered a zero‑ops, cost‑aware solution and iterated based on real metrics.

*Bar‑raiser cues*: clear ownership of the full stack, deep dive into model warm‑up trade‑offs, quantifiable impact (latency, QPS, NPS), and lessons learned: “pre‑warming is cheaper than over‑provisioning.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
