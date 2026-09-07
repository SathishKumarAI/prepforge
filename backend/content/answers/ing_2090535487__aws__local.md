---
qid: ing_2090535487__aws__local
question: 'Explain: Idempotency — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 451
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:51-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my last role I led a payments micro‑service for a fintech startup that processed ~3 M transactions daily. A recurring bug caused double‑billing during high traffic spikes, eroding customer trust and inflating refunds by 12 % of revenue.

*Task:* Design an idempotent API to guarantee each payment is applied exactly once, even under retries or network glitches.

*Action:*  
1. **Idempotency Key** – Require a client‑generated UUID per request; store it in DynamoDB with the transaction state (`PENDING → SUCCESS`).  
2. **Optimistic Concurrency** – Use `ConditionExpression` to ensure a key is written only once (`attribute_not_exists(id)`), rejecting duplicates immediately.  
3. **Atomic Ledger** – Persist each successful payment to an SQS FIFO queue that feeds an EventBridge rule, triggering a Lambda that updates the customer’s balance in RDS (Aurora Serverless). The FIFO guarantees order and deduplication.  
4. **Circuit Breaker & Retry Policy** – Expose a simple “retry‑on‑conflict” header; clients can safely retry without re‑charging.

*Result:* After deployment, double‑billing incidents dropped to 0.01 % of transactions (≈30 transactions/month). Refunds fell by $1.8M annually, and customer churn decreased by 4 %. The system scales to >10 k TPS with <$0.02 per request cost.

*Learnings:*  
- **Dive Deep** into the retry path revealed that race conditions in DynamoDB were the root cause.  
- **Bias for Action**: We rolled out a phased feature flag, monitored via CloudWatch metrics, and adjusted the idempotency window based on real traffic patterns.  

This solution balances **scalability** (DynamoDB & SQS FIFO), **availability** (multi‑AZ Aurora Serverless), and **cost efficiency**, while keeping the customer’s experience frictionless—exactly what Amazon expects from a solutions architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
