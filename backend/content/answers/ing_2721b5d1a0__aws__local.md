---
qid: ing_2721b5d1a0__aws__local
question: 'Explain: Stale Screenshots — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 469
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:21-05:00'
sources: []
---

**Stale Screenshots – Computer‑Use Agent**

> *“When a user logs in, the agent takes a screenshot every minute and uploads it to S3 for audit. After weeks of inactivity the images pile up, inflating storage costs by 30 %.”*

**Situation / Task**  
I was responsible for reducing the cost of a compliance‑monitoring service that stored every screenshot in an S3 bucket. The bucket hit $1.5 M/yr and the audit team complained that many screenshots were “stale” (no user activity for >24 h).

**Action**  
*Customer Obsession + Ownership* – I first **dive deep** into CloudWatch metrics, Lambda logs, and S3 lifecycle policies to confirm the pattern.  
1. Added a *last‑access timestamp* tag via an EventBridge rule that triggers on every upload.  
2. Implemented a daily **AWS Glue job** that scans tags and moves objects with >30 days inactivity to Glacier Deep Archive.  
3. Replaced the per‑minute Lambda trigger with a **SQS‑driven architecture**: screenshots are queued; an EC2 Spot fleet processes batches, reducing cold starts by 70 %.  
4. Added a small **DynamoDB table** that tracks user session state, allowing us to skip uploads when no activity is detected.

**Result**  
Storage costs fell from $1.5 M/yr to $0.45 M/yr (70 % savings). Latency of screenshot retrieval for audit decreased by 15 %. The solution was fully automated, with a single CloudFormation stack and no manual intervention—demonstrating **Bias for Action** and **Deliver Results**.

**Bar‑raiser Takeaway**  
- Ownership: I scoped the problem end‑to‑end.  
- Dive Deep: Used metrics to uncover the root cause.  
- Quantified Impact: 70 % cost reduction, 15 % faster audit retrieval.  
- Learning from Failure: Early trials with Lambda cold starts highlighted a need for batch processing; pivoting to Spot fleet solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
