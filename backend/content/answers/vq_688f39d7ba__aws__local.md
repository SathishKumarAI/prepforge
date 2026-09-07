---
qid: vq_688f39d7ba__aws__local
question: How can one see who is using a temporary segment?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 462
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:55:21-05:00'
sources: []
---

**Situation & Task**  
I was asked to audit which services and accounts were consuming our *temporary* Amazon S3 “data lake” buckets that we created on‑demand for nightly analytics jobs. The bucket lifecycle policy deleted objects after 24 h, but I had no visibility into who was writing or reading during that window.

**Action (Dive Deep + Ownership)**  
1. **Enable CloudTrail event logging** on the S3 service with `ReadOnly` and `WriteOnly` events turned on for the bucket’s ARN.  
2. Configure an **Amazon Athena** table over the CloudTrail logs stored in a dedicated log bucket.  
3. Write a simple SQL query that groups by `userIdentity.principalId`, `eventName`, and `awsRegion`.  
4. Push the result to an **Amazon QuickSight** dashboard that refreshes every 5 minutes, so the ops team sees real‑time usage.  
5. For cost control, add a **S3 Inventory** report that flags any objects older than 24 h (they should be deleted).  

**Result (Deliver Results)**  
- Within two days we identified that **12% of our temporary bucket traffic came from an internal analytics service** that had a mis‑configured IAM role.  
- We tightened the policy, reducing unnecessary writes by **$1,200/month** and cutting the 24 h retention window from 3 days to 1 day without impacting downstream jobs.  
- The QuickSight dashboard is now part of our nightly runbook; it has been used in 4 subsequent incidents, preventing a potential data breach.

**Bar‑raiser Takeaways**  
*Ownership*: I took full responsibility for the audit and built an automated monitoring pipeline.  
*Dive Deep*: Leveraged CloudTrail + Athena to uncover hidden usage patterns instead of guessing.  
*Quantified Impact*: Saved $1.2k/month and improved security posture.  
*Learning from Failure*: The incident taught us that temporary resources need lifecycle visibility; we now enforce it across all transient buckets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
