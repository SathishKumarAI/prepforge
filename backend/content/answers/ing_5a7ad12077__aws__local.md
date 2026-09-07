---
qid: ing_5a7ad12077__aws__local
question: 'Explain: Coarse-grained roles don’t provide enough resolution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 446
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:12-05:00'
sources: []
---

**Situation & Task**  
In a recent fraud‑detection project we used IAM policies that granted every analyst “ML‑Developer” access to the entire SageMaker domain. When we scaled from 5 to 50 analysts, the coarse‑grained role caused duplicate model training runs, accidental data leaks, and delayed production deployments—our SLA slipped from 2 hrs to 12 hrs.

**Action**  
I split the role into **data‑curator**, **model‑trainer**, **validator**, and **ops‑engineer** scopes.  
* *Data‑curator*: read‑only on raw S3 buckets, write to a dedicated “cleaned” bucket.  
* *Model‑trainer*: full SageMaker training rights but restricted to the trainer’s own experiment folder (SageMaker Experiments + tagging).  
* *Validator*: only SageMaker endpoint invoke permissions and access to CloudWatch logs.  
* *Ops‑engineer*: full deployment rights plus CloudFormation stack updates.

Implemented fine‑grained S3 bucket policies, SageMaker role chaining, and automated Lambda checks that flag policy violations. Added a **Cost Explorer** dashboard to track training spend per role.

**Result**  
- Training duplication dropped 92 % (from ~20 extra runs/month to <2).  
- Deployment latency fell from 12 hrs to 3 hrs (5× faster).  
- Data‑privacy incidents zeroed out.  
- Monthly ML spend decreased by $4,800 due to fewer unnecessary training jobs.

**Learnings & Bar‑Raiser Notes**  
*Ownership*: I owned the entire IAM audit and remediation process.  
*Dive Deep*: Analyzed CloudTrail logs to uncover hidden permissions overlap.  
*Quantified Impact*: Provided concrete metrics (latency, cost).  
*Learning from Failure*: After a pilot rollback, we added automated policy drift alerts, turning a one‑off fix into an ongoing governance practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
