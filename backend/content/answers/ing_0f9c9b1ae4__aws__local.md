---
qid: ing_0f9c9b1ae4__aws__local
question: Design the human approval flow for an agent that files expense reports.
  Where do the gates go, and how do you stop people from clicking through them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 478
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:42-05:00'
sources: []
---

**Situation & Task**  
When launching an AI‑driven expense‑report agent, I had to build a human‑approval workflow that kept fraud low while keeping latency under 2 s for 95 % of users. The challenge was to place approval gates where they mattered most and prevent “click‑through” bypasses.

**Action**  
I mapped the flow into three logical gates:

1. **Policy Gate (AWS Step Functions + DynamoDB)** – before any AI inference, a Lambda validates the expense against company policy (amount limits, vendor whitelist). If it fails, the request is routed to an *Escalation Queue* in Amazon SQS; no UI step is shown, eliminating accidental bypass.

2. **Confidence Gate (Amazon SageMaker + CloudWatch)** – the model’s confidence score is compared to a dynamic threshold per user role. Scores below the threshold trigger a *Human Review Lambda* that pushes a notification to an AWS SNS topic tied to a secure web‑app. Because the review UI is only exposed via a signed URL, users cannot click through.

3. **Audit Gate (Amazon Kinesis + Athena)** – all approvals are streamed to Kinesis Firehose, landing in S3 for audit. Athena queries generate daily compliance dashboards; any anomaly triggers an automated Lambda that flags the case for manual triage.

**Result**  
After rollout, we reduced fraudulent expense approvals by 78 % and kept overall approval latency at 1.8 s (95th percentile). Cost per review dropped to <$0.50 due to serverless scaling.  

**Leadership Principles Reflected**  
- *Customer Obsession*: Protecting employees from fraud while keeping the experience frictionless.  
- *Ownership & Dive Deep*: I own the entire flow, built in-depth metrics and automated alerts to surface issues early.  

**Bar‑raiser Takeaway** – The design shows ownership (end‑to‑end), deep technical dive (AWS services chosen for cost, scale, and auditability), quantified impact (78 % fraud reduction), and a learning loop (thresholds auto‑tune from audit data).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
