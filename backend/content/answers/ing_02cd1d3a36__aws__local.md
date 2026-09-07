---
qid: ing_02cd1d3a36__aws__local
question: 'Explain: Q31: Describe CI/CD for LLM applications'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:36-05:00'
sources: []
---

**Customer Obsession | Ownership**

> *Situation:* Our team needed to deploy a new LLM‑based chatbot that answered customer support queries in real time. The model was updated nightly with fresh domain data, and any downtime directly impacted user satisfaction.

> *Task:* Build a CI/CD pipeline that guarantees 99.9 % uptime while delivering updates within 10 minutes of code commit.

> *Action:*  
> 1. **Source & Build** – GitHub → AWS CodeCommit → CodeBuild (Docker build, unit tests, LLM inference container).  
> 2. **Artifact Store** – Push image to Amazon ECR; tag with semantic version and SHA.  
> 3. **Deployment** – Use SageMaker Endpoint “Blue/Green” strategy: deploy new model to a staging endpoint, run A/B traffic split via AWS AppConfig + Lambda for real‑time routing.  
> 4. **Automated Validation** – Step Functions trigger integration tests (latency < 200 ms, accuracy > 92%) against SageMaker sandbox; if pass, promote to production.  
> 5. **Rollback & Observability** – CloudWatch alarms on latency/CPU spikes auto‑invoke a Lambda rollback to the previous stable endpoint. All stages logged in CloudTrail for audit.

> *Result:* Reduced deployment cycle from 4 hours to 12 minutes; downtime dropped from 2 % to <0.1 %. Monthly cost saved $3,200 by using SageMaker’s managed inference and eliminating manual scaling.  
> 
> **Dive Deep** – I ran a post‑mortem on the first failure (traffic split misconfiguration) and adjusted the Lambda logic, which cut false positives by 70 %.

> *Bar‑raiser focus:* Ownership of full pipeline, deep dive into metrics (latency, accuracy), quantified business impact (downtime reduction, cost savings), and lessons learned from rollback failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
