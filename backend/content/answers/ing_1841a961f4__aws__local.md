---
qid: ing_1841a961f4__aws__local
question: 'Explain: Retry — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 437
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:23-05:00'
sources: []
---

**Situation / Task**

In a fintech startup I led the migration of our payment micro‑service to AWS. The new architecture had to guarantee *no double charge* even when network glitches triggered retries from the client or downstream services.

**Action**

I introduced **idempotency keys** stored in DynamoDB (partition key = `payment_id`, sort key = `request_id`). Each Lambda that processes a payment first checks this table; if an entry exists, it returns the cached response instead of re‑executing the charge.  
To surface failures to the caller quickly, I wrapped the Lambda in **Step Functions** with a *catch* state that retries only on transient errors and fails after three attempts.  

For asynchronous flows (e.g., webhook callbacks), I used **SQS FIFO queues** with `MessageGroupId` set to the payment ID—AWS guarantees at‑most‑once delivery, eliminating duplicate processing. All services run behind **Application Load Balancers** in multiple AZs for high availability.

**Result**

After deployment, our double‑charge rate dropped from 3 % to <0.01 %. The retry logic cut failure latency by 25 %, and the cost of DynamoDB read/write capacity stayed under $200/month due to low write volume (≈1 k writes/sec).  

**Leadership Principles Highlighted**

- **Customer Obsession** – ensured a flawless user experience with zero duplicate charges.  
- **Ownership & Dive Deep** – engineered end‑to‑end idempotency, validated through chaos testing and real metrics.  

**Bar‑raiser Takeaway**

The answer demonstrates ownership (full lifecycle design), depth (idempotency table schema, retry policy, cost analysis), quantified impact (percent reduction, latency), and learning from failure (chaos engineering to confirm resilience).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
