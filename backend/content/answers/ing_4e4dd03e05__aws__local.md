---
qid: ing_4e4dd03e05__aws__local
question: 'Explain: that we''re probably hosting like a number'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 464
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:29-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to design an on‑premises inference service for a recommendation engine used by our e‑commerce platform. The team had no pre‑existing ML infrastructure and the business required < 50 ms latency for 99.9% of requests while keeping costs under $200k per month.

**Action (Dive Deep + Invent & Simplify)**  
1. **Requirements Clarification** – I mapped out key metrics: request volume (~30 K RPS), model size (≈ 120 MB, TensorFlow SavedModel), and SLA.  
2. **Design Choices** – I proposed a container‑based microservice stack on Amazon ECS (or Fargate for no‑ops) with **Amazon SageMaker Edge Optimized Models** packaged as Docker images.  
3. **AWS Services** –  
   * **ECS + Application Load Balancer** for horizontal scaling and health checks.  
   * **Elastic Container Registry (ECR)** to store model artifacts.  
   * **CloudWatch Alarms** on latency/CPU metrics, auto‑scaling based on target utilization 70%.  
   * **AWS Nitro Enclaves** for data protection during inference.  
4. **Cost & Availability Trade‑offs** – Spot instances reduce compute cost by ~30% but add potential interruptions; I mitigated with an On‑Demand baseline and a graceful shutdown hook that pushes the model to S3 if interrupted.  
5. **Metrics‑Driven Validation** – After deployment, latency dropped from 120 ms to **48 ms** (60% improvement) and cost fell to $165k/month.

**Result (Deliver Results + Ownership)**  
The solution met all SLAs, reduced latency by 60%, and saved the business $35k annually. I also authored a run‑book that automated model rollouts, which cut deployment time from days to minutes.  

**Bar‑raiser takeaways** – I owned the end‑to‑end pipeline, dove deep into latency bottlenecks, quantified every improvement, and learned that automating rollback logic is as critical as scaling strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
