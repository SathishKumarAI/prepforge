---
qid: ing_b5e2797220__aws__local
question: 'Explain: Roles & titles they hire — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 604
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:27-05:00'
sources: []
---

**Situation – Challenge**

When Glean pivoted to a “search‑as‑a‑service” platform, the product team realized that *high‑quality AI models* were the new differentiator. We needed a small, cross‑functional squad that could own data ingestion, model training, deployment, and continuous improvement—all while keeping latency under 200 ms for millions of users.

**Task – What I had to do**

Define the exact roles and titles required, build a hiring plan that reflected Amazon’s **Ownership** and **Dive Deep** principles, and create a scalable architecture on AWS that would let us iterate quickly without breaking availability or overspending.

**Action – Design & Execution**

| Role | Core responsibility | Key AWS services |
|------|---------------------|------------------|
| **AI Lead (Machine‑Learning Engineer)** | Own end‑to‑end ML lifecycle; mentor junior engineers. | SageMaker, S3, Glue, Athena |
| **Data Engineer** | Build scalable pipelines for user logs & embeddings. | Kinesis, Lambda, Redshift |
| **Infrastructure/DevOps** | CI/CD for models and inference endpoints; monitor latency. | CodePipeline, CloudWatch, ECS/Fargate |
| **Product Manager (AI)** | Translate business goals into ML metrics; set SLAs. | QuickSight, DynamoDB |

*Scalability*: Use SageMaker Multi‑Model Endpoints with GPU autoscaling; Kinesis shards grow linearly with traffic.  
*Availability*: Route 53 health checks + ALB across AZs; keep a shadow inference cluster for canary releases.  
*Cost*: Spot instances for training (30 % cheaper), on‑demand only for production inference.

**Result – Impact**

- Recruited the squad in **6 weeks**, hiring 4 engineers and 1 PM—meeting the “one‑week” hiring cadence we set.  
- Deployed the first search‑augmentation model in **3 months**, reducing page load by **45 %** (from 400 ms to 220 ms) and boosting user engagement by **12 %** YoY.  
- Established a feedback loop that cut false‑positive rate from 18 % to 4 % within 2 quarters.

**Learnings**

Ownership surfaced early: the AI Lead doubled as the “product owner” for model performance, ensuring no silos. Dive Deep was critical—debugging latency required inspecting CloudWatch metrics down to individual Lambda invocations. The bar‑raiser looked for a clear data story (latency numbers, engagement lift) and evidence that we had learned from early failures (e.g., the initial over‑optimistic inference scaling plan).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
