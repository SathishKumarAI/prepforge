---
qid: ing_1e67e4d969__aws__local
question: 'Explain: IX. Disposability — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 393
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:20-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy recommendation engine to a 12‑Factor “disposable” microservice so that we could spin up dozens of inference workers on demand during peak shopping events.

**Action**  
- **Disposability (12‑Factor App)**: I re‑architected the service into an immutable container image, stored in Amazon ECR. All configuration moved to environment variables and Secrets Manager; no local state was persisted.  
- Deployed via AWS ECS Fargate with task definitions that auto‑scale on CloudWatch metrics (CPU/Memory).  
- Integrated a serverless inference layer using SageMaker endpoints behind an Application Load Balancer, so workers could be torn down after each batch.  
- Employed **AWS Step Functions** to orchestrate the lifecycle: provision → run → terminate, ensuring no leftover resources.

**Result**  
During the Black Friday sale we spun up 480 Fargate tasks in <2 minutes, reducing inference latency from 1.8 s to 0.4 s (a 78% improvement). Because workers were disposable, cost dropped by **35%** compared to our previous on‑prem cluster, and we eliminated the risk of stale state or configuration drift.

**Reflection**  
This exercise reinforced *Ownership*—I took full responsibility for both design and post‑mortem. The deep dive into container immutability taught me that even a small misconfiguration (e.g., hard‑coded DB URLs) can cascade into costly outages. I now routinely audit our pipelines for 12‑Factor compliance before any deployment, ensuring scalability, availability, and cost efficiency align with Amazon’s high standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
