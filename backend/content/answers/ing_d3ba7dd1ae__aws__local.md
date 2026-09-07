---
qid: ing_d3ba7dd1ae__aws__local
question: 'Explain: Appeals loop — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 457
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:17-05:00'
sources: []
---

**Situation & Task**  
While leading the new marketplace for user‑generated video, I was tasked with building a **content‑moderation appeals loop** that kept our policy compliance at 99.9 % while reducing user churn by <1 %.  

**Action (Design)**  
* **Ingest**: Kinesis Data Streams → Lambda parses moderation flag.  
* **Automated Review**: SageMaker endpoint runs a custom NLU model; results go to DynamoDB for state.  
* **Human Escalation**: If confidence < 0.7 or flag is “Appealable”, the item is queued in SQS and an SNS topic notifies the moderation team.  
* **Appeals UI**: API Gateway + Cognito authenticates users; they submit evidence → stored in S3, versioned.  
* **Decision Engine**: Lambda aggregates human review, evidence metadata, and policy rules (using AWS Step Functions) to produce a final verdict.  
* **Audit & Feedback**: All decisions are logged in CloudTrail; metrics fed into Grafana dashboards.

**Result**  
Within 6 months:  
- Appeal resolution time dropped from 48 h to **4 h average**.  
- User‑reported false positives fell by **35 %**, decreasing churn by **0.8 %**.  
- Cost per appeal handled was <$0.12, a **40 % reduction** over the legacy system.

**Learnings (Bar‑raiser focus)**  
*Ownership*: I owned end‑to‑end latency and cost.  
*Dive Deep*: Identified that 18 % of appeals were noise; tuned confidence threshold to balance speed vs accuracy.  
*Quantified Impact*: Directly linked faster resolution to measurable churn reduction.  

This architecture balances **scalability** (Kinesis, Lambda), **availability** (S3 versioning, multi‑AZ DynamoDB), and **cost efficiency**, aligning with Amazon’s *Customer Obsession* and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
