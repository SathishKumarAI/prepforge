---
qid: ing_2aa2fbb1e7__aws__local
question: 'Explain: What you''re actually expected to know — Devops Platform Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 330
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:38-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a self‑service AI/ML platform that let data scientists spin up GPU clusters on demand while keeping costs under $10k/month.

**Action**  
I *owned* the solution, using **AWS SageMaker**, **EC2 Spot Instances**, and **Elastic Container Service (ECS)**. I wrote Terraform modules to bootstrap a multi‑region VPC with private subnets, IAM roles for fine‑grained access, and a CloudWatch dashboard that auto‑scales based on GPU utilization. To simplify the user experience, I added a single “Create Model” API behind API Gateway, which internally triggers a SageMaker training job and returns a pre‑signed endpoint URL. I also implemented a cost‑alerting Lambda that shuts down idle endpoints after 30 min.

**Result**  
The platform reduced model training time from ~48 h to <4 h, cut GPU usage by 35 %, and kept monthly spend at $8.7k—well below the target. We saw a 90 % adoption rate within the first quarter.

**Learning**  
I discovered that early integration of Spot Instance termination handling prevented data loss in 2 out of 3 failure scenarios, reinforcing the *Dive Deep* principle. I also learned to trade off a bit more latency for lower cost by choosing Spot over On‑Demand, illustrating *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
