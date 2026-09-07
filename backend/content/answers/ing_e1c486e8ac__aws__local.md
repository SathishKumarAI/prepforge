---
qid: ing_e1c486e8ac__aws__local
question: 'Explain: Devin can now Manage Devins — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:57-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing fintech, our data science team was using a custom “Devin” notebook service that let developers run experiments locally. When we migrated to the cloud, Devin had to expose its training jobs to the same CI/CD pipeline as the rest of the stack. The challenge: enable *any* developer (“Devin”) to launch and monitor ML workloads from a single web console while preserving security, cost control, and auditability.

**Action – Design & Implementation**  
1. **Infrastructure** – Deployed an Amazon SageMaker JumpStart‑based inference endpoint behind an API Gateway with Lambda authorizers.  
2. **Orchestration** – Used Step Functions to chain training → hyper‑parameter tuning → model registration in Model Registry (S3 + DynamoDB).  
3. **Security & Cost Control** – Enforced IAM roles per developer, tagged resources for cost allocation, and set Sagemaker Spot Instances with a 30 % price cap.  
4. **Observability** – Integrated CloudWatch Logs, X-Ray tracing, and SageMaker Experiments to surface metrics (accuracy, loss, GPU utilization).  

**Result**  
- Reduced model rollout time from *5 days* to *12 hours*.  
- Cut per‑model training cost by **42 %** via automated spot instance usage.  
- Achieved 99.9 % uptime for the web console; zero incidents in the first six months.  

**Reflection & Learnings**  
I took full ownership of the end‑to‑end pipeline, iterating on failure modes (e.g., spot interruption handling). By diving deep into SageMaker’s API limits and cost models, I balanced scalability with budget constraints—illustrating *Ownership*, *Dive Deep*, and *Deliver Results* in Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
