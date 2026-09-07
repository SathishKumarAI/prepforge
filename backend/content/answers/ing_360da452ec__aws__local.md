---
qid: ing_360da452ec__aws__local
question: 'Explain: 🧑‍🔧 Role Guides'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 383
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:57-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* My team launched a new “AI Role Guide” tool to help non‑technical stakeholders understand how to assign and govern IAM roles for ML workloads on AWS.  
> *Task:* Deliver a self‑service portal that reduces manual approvals, speeds model deployment, and enforces least‑privilege.  
> *Action:*  
> 1. **Requirements & Design** – Defined a schema: role name, required permissions, data access level, compliance tags. Built a REST API (API Gateway + Lambda) backed by DynamoDB for fast read/write.  
> 2. **AWS Services** – Used AWS Cognito for auth, Amazon SageMaker Pipelines to trigger validation jobs, and EventBridge to audit changes. Implemented serverless architecture to auto‑scale with zero admin overhead.  
> 3. **Scalability & Cost** – Lambda concurrency capped at 5 k per day; DynamoDB provisioned throughput 200 RCU/WCU → < $0.10/month. No EC2 instances, eliminating idle capacity.  
> 4. **Result** – Cut role‑assignment time from 3 days to < 30 min (≈ 93 % reduction). Enabled 25 teams to deploy models 4× faster while maintaining compliance audit logs.  
> *Reflection:* The biggest lesson was early integration of security reviews; a single overlooked permission would have blocked 15 downstream pipelines.  

**Bar‑raiser cues:** clear ownership, data‑driven impact (93 % time reduction), deep dive into AWS services, and candid acknowledgment of the security learning curve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
