---
qid: ing_b34cf2c7e1__aws__local
question: 'Explain: Applied, vertical and forward-deployed — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:16-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to lead the rollout of an AI‑driven credit scoring platform. The product had three deployment modes: *Applied* (batch scoring for risk analysts), *Vertical* (real‑time fraud detection in banking), and *Forward‑deployed* (embedding models into partner apps). I needed a unified architecture that could support all three with minimal operational overhead.

**Action**  
1. **Design** – Adopted a *model‑as‑a‑service* pattern on AWS: trained models on SageMaker, packaged them in Docker containers, and deployed to ECS Fargate for batch (Applied) and Lambda for low‑latency inference (Vertical). For Forward‑deployed partners, exposed an API Gateway endpoint that throttles requests via DynamoDB quotas.  
2. **Scalability & Cost** – Leveraged Spot Instances for training (↓ 70 % cost), used Auto Scaling for Fargate to handle peak fraud spikes, and implemented caching with ElastiCache to reduce Lambda invocations by 45 %.  
3. **Observability** – Integrated CloudWatch metrics + X-Ray tracing; set up a CI/CD pipeline in CodePipeline that automatically promoted models after A/B testing against a holdout dataset.

**Result**  
- Reduced inference latency from 350 ms to < 50 ms for Vertical use‑case (20× improvement).  
- Cut monthly operating cost by $120k through Spot & Fargate optimizations.  
- Enabled 15 partner apps (Forward‑deployed) within 3 months, boosting revenue by 12%.

**Learnings**  
Ownership drove me to iterate on the API gateway throttling logic after a traffic surge; deep dive into Lambda timeout logs revealed a hidden cold‑start issue, leading to a new warm‑up strategy.

> **Leadership Principles:** *Customer Obsession* (fast, reliable scoring), *Ownership* (end‑to‑end delivery), and *Dive Deep* (profiling latency & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
