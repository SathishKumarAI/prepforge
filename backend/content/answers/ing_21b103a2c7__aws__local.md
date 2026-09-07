---
qid: ing_21b103a2c7__aws__local
question: 'Explain: which makes more sense operation transformation at'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 480
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:31-05:00'
sources: []
---

**Situation**

In a previous role I was asked to decide whether we should run our recommendation model *training* in‑house on an EC2 cluster or move it to SageMaker Pipelines, and similarly for the inference layer – either a self‑hosted microservice or API Gateway + Lambda.

**Task**

My goal was to pick the architecture that maximized **customer value** (low latency, high accuracy) while keeping ops overhead minimal.

**Action**

| Layer | Option | AWS Services | Trade‑offs |
|-------|--------|--------------|------------|
| Training | In‑house EC2 + EMR | EC2 Spot, EBS, EMR | Full control but 30 % higher MTTR, manual patching |
| Training | SageMaker Pipelines | SageMaker, S3, CloudWatch | Zero ops, auto‑scaling, 15 % higher cost but 80 % faster turnaround |
| Inference | Lambda + API Gateway | Lambda, API GW, CloudFront | Cost‑effective for <10k RPS, cold start latency 200 ms |
| Inference | ECS Fargate with ALB | Fargate, ALB, EFS | Lower latency (50 ms), higher cost but auto‑scaling across zones |

I ran a **cost‑benefit analysis**: training pipelines in SageMaker saved $18k/year and cut deployment time from 4 days to 12 hours. For inference, the Fargate + ALB combo reduced mean latency by 35 % (from 90 ms to 58 ms) while staying within the $7k/month budget.

**Result**

The chosen mix increased recommendation click‑through rate by **13 %** and reduced operational incidents by **70 %**. The decision was later adopted company‑wide, saving an additional $12k annually.

---

### Leadership Principles

- **Customer Obsession** – Delivered lower latency & higher accuracy for end users.
- **Ownership** – Conducted a full cost/benefit audit, owned the trade‑off matrix, and championed the migration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
