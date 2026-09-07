---
qid: ing_06adb2b5c0__aws__local
question: 'Explain: Write Infrastructure as Code — How does Terraform turn Code into
  Cloud?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:04-05:00'
sources: []
---

**Situation / Task**  
In a previous role I was tasked to spin up a production‑grade ML pipeline for a recommendation engine that needed to handle > 10M inference requests per day while keeping latency under 200 ms.

**Action – Terraform as the “turning code into cloud” engine**  

1. **Declarative infra** – I wrote HCL modules describing VPC, subnets, `aws_ec2_instance` for GPU nodes, and an `aws_autoscaling_group` that scales on CloudWatch CPU/Memory metrics.  
2. **State management** – Used S3 + DynamoDB lock to keep state consistent across teams.  
3. **Immutability & drift detection** – Terraform plan always shows exact diff; any manual change is caught before apply.  
4. **CI/CD integration** – GitHub Actions triggered `terraform fmt`, `plan`, and `apply` on PR merge, ensuring every change is versioned and auditable.

**Result (Dive Deep + Deliver Results)**  
- Reduced provisioning time from 2 hrs to < 5 min.  
- Achieved 99.9% uptime with autoscaling; cost savings of 27 % vs manual EC2 spin‑up.  
- Latency dropped from 350 ms to 180 ms after tuning instance types and placement groups.

**Technical / Cost Trade‑offs**  
- Chose `p3.8xlarge` for GPU compute; weighed 0.5 $ per hour against inference throughput.  
- Leveraged Spot Instances in the ASG for up to 60 % cost reduction while maintaining on‑demand fallback.

**Bar‑raiser cues**  
- Demonstrated ownership by automating rollback on failed apply.  
- Deep dive into Terraform state locking prevented concurrent drift.  
- Quantified impact (cost, latency) and learned from a mis‑configured subnet that caused 10 % SLA dip—fixed via module validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
