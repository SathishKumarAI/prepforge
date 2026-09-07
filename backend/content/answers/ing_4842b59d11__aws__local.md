---
qid: ing_4842b59d11__aws__local
question: 'Explain: Test mode — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 394
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:54-05:00'
sources: []
---

**Situation / Task**  
When our internal “Test Mode” feature was launched to let developers re‑send emails without affecting production traffic, 12% of the support tickets were still complaining about missing or duplicated messages. I owned the incident and drove a fix that cut those tickets by 78 %.  

**Action**  
1. **Dive Deep** – I profiled the Lambda that triggered SES via API Gateway. The code was re‑using the same message ID for every resend, causing SES to deduplicate requests.  
2. **Design & AWS Services** – Rewrote the flow:  
   * **API Gateway** → **Lambda** (stateless) → **SQS FIFO** (deduplication by `MessageDeduplicationId`) → **SES**.  
   * Added a CloudWatch metric for “ResendFailures” and an SNS alarm to auto‑scale the Lambda concurrency.  
3. **Bias for Action & Ownership** – Implemented a test harness in CI that fires 1,000 resend requests per minute; observed latency < 120 ms and zero deduplication errors.  

**Result**  
- Ticket volume dropped from 200/day to 44/day (78 % reduction).  
- Cost of the new pipeline is $0.10/month vs the old $0.02, but the ROI is > 3× due to reduced support effort (~$12k/yr saved).  

**Learnings** – Always validate idempotency when re‑using external APIs; a small change in message ID logic can eliminate an entire class of bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
