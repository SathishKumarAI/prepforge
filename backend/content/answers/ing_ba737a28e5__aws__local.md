---
qid: ing_ba737a28e5__aws__local
question: 'Explain: Auditor pack — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 491
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:15-05:00'
sources: []
---

**Situation & Task**  
At my previous role we launched a new “AI‑powered audit” platform that shipped code every day. The client demanded *zero risk* – every change had to pass automated compliance checks before it could be merged into production. I was tasked with building an **Audit Pack – Eval Gated CI/CD** pipeline that would evaluate models, datasets, and code in a single gated workflow.

**Action**  
I designed a serverless CI/CD flow using **CodePipeline**, **CodeBuild**, and **Step Functions**:

1. **Trigger** – Git commit → CodeCommit → Pipeline start.  
2. **Evaluation Stage** – Lambda pulls the model artifacts from S3, runs a custom *Eval* job in a Docker container (ECR) that checks accuracy thresholds, drift metrics, and data‑quality tests. Results are stored back to DynamoDB.  
3. **Gate** – Step Functions reads DynamoDB; if any metric falls below the threshold (e.g., accuracy < 0.92 or drift > 5%), it invokes a Slack notification and aborts the pipeline.  
4. **Deploy Stage** – Successful gates trigger CodeDeploy to an ECS‑Fargate cluster, rolling out the new model version.

I added **CloudWatch dashboards** for real‑time visibility and set up **SNS alerts** for failures. The entire process is fully auditable via CloudTrail logs.

**Result**  
- Reduced manual review time by **85 %**, allowing 3× faster feature releases.  
- Zero production incidents caused by model drift over a six‑month period (0/10 deployments).  
- Cost stayed under $1,200/month thanks to serverless execution and spot‑instance usage for heavy eval jobs.

**Leadership Principles Highlighted**  
*Customer Obsession* – delivering reliable AI models that meet strict compliance.  
*Ownership & Dive Deep* – architecting a fault‑tolerant pipeline and digging into metric thresholds to prevent failures.  

**Bar‑raiser Takeaway**  
Showcased ownership, quantified impact, deep technical insight, and lessons from initial failure (early tests ignored drift), leading to the robust gated CI/CD design above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
