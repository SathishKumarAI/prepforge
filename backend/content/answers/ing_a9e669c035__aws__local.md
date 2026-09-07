---
qid: ing_a9e669c035__aws__local
question: 'Explain: Composition Pattern: Support Agent Delegating Refunds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 384
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:23-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of our e‑commerce refund workflow after customer surveys showed a 27 % drop in satisfaction when agents had to manually approve refunds.

**Action (Design)**  
I introduced a **Composition Pattern**: each `SupportAgent` object composes a `RefundProcessor` strategy that delegates the heavy lifting to an AWS Lambda chain.  
* **Lambda 1 – Validation** (`AWS Step Functions`) checks eligibility against DynamoDB (refund policy, fraud score).  
* **Lambda 2 – Chargeback** calls the Stripe API via `API Gateway`.  
* **Lambda 3 – Notification** pushes a SNS topic that triggers an SES email and updates a CloudWatch metric.

The agent’s UI simply invokes the “Process Refund” button; behind the scenes the composed strategy handles retries, idempotency (using DynamoDB conditional writes), and audit logs in S3. This keeps the agent lightweight while preserving full control.

**Result**  
- **Refund turnaround dropped from 48 hrs to <4 hrs** (99 % faster).  
- Customer CSAT for refund cases rose from 68 % to 92 %.  
- Operational cost fell by 35 % due to serverless scaling and reduced agent time.

**Reflection**  
I owned the end‑to‑end flow, dove deep into each Lambda’s cold‑start profile, and iterated on error handling after a 2 % failure spike. The pattern proved that delegating complex logic through composition can deliver speed, reliability, and measurable business impact—exactly what Amazon expects from its engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
