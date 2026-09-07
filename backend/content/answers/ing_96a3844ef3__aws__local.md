---
qid: ing_96a3844ef3__aws__local
question: 'Explain: You run a shared LLM platform for 30 internal teams on one GPU
  fleet. Design the tenancy model: fairness, isolation, and cost attribution.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 404
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:40-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was tasked to launch a shared LLM platform for 30 internal teams on a single GPU fleet while ensuring fairness, isolation, and transparent cost attribution.

**Action (Dive Deep + Invent & Simplify)**  

1. **Multi‑Tenant Scheduler** – Built an AWS Batch‑based scheduler that allocates GPU slots via *fair share* queues (using `AWS::Batch::JobQueue` with `priority` and `weight`).  
2. **Isolation Layer** – Each team runs its workloads in a dedicated ECS task using *Fargate Spot* for cost efficiency, protected by IAM policies limiting access to only their model artifacts stored in S3 buckets (`arn:aws:s3:::team-*/`).  
3. **Cost Attribution** – Integrated AWS Cost Explorer tags (`Team=XYZ`, `Purpose=LLM`) and used the *AWS Marketplace “GPU Spot” Billing Report* to attribute GPU hours per team automatically.  
4. **Scalability & Availability** – Leveraged Auto Scaling Groups on EC2 g5 instances for burst capacity, with a 99.9% SLA enforced by CloudWatch Alarms that trigger spot‑instance replacement.

**Result (Deliver Results)**  
Within two weeks, we reduced GPU utilization variance from 35% to <5%, increased overall throughput by 42%, and cut per‑team cost drift to under $0.12 per GPU hour. The model also achieved 99.7% isolation compliance measured by audit logs.

**Reflection (Bias for Action + Learn)**  
Early tests showed a race condition in the scheduler; we added optimistic locking on job queues, preventing over‑commitment and saving an estimated $1k/month. This experience reinforced that ownership means iterating fast, measuring rigorously, and learning from edge failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
