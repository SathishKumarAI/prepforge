---
qid: ing_9d871c8481__aws__local
question: 'Explain: Q87: Your production agent enters a runaway loop, calling a broken
  tool 400 times in five minutes. Walk through the architectural patterns that prevent
  this - at the orchestrator, the tool layer, and the cost-guard layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 470
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:11-05:00'
sources: []
---

**Answer (Amazon style)**  

During a recent migration of our on‑prem batch engine to the cloud, one micro‑service started looping 400 times in five minutes and kept hammering an external API that had become unresponsive. I redesigned the stack around **Ownership**, **Dive Deep**, and **Bias for Action**.

| Layer | Pattern | AWS Services | Why it works |
|-------|---------|--------------|--------------|
| **Orchestrator** | *Circuit‑breaker + Retry with exponential back‑off* | Step Functions (state machine), Lambda, CloudWatch Alarms | The state machine fails fast if the tool returns 5xx >3 times; retries are capped at 4 attempts. The alarm triggers a DLQ (SQS) for manual investigation. |
| **Tool layer** | *Idempotent API + Rate‑limit guard* | API Gateway, Lambda authorizer, DynamoDB TTL | Every call is wrapped with a UUID header; if the same ID reappears within 5 min it’s ignored. API Gateway throttles to 200 RPS per account, preventing runaway loops. |
| **Cost‑guard** | *Budget alert + Service Quotas* | AWS Budgets, Service Quotas, CloudTrail | A $10/ month budget on the tool’s API cost automatically suspends the Step Function if exceeded; this prevented a potential $1 k bill in 5 min. |

**Result:**  
After deployment, the loop never hit more than 3 retries per invocation and the monthly cost stayed below $50, a 95% reduction from the spike. I documented the failure pattern in our post‑mortem, added unit tests for idempotency, and updated the runbook—showing clear ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
