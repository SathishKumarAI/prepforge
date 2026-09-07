---
qid: ing_86d4a8c4a8__aws__local
question: 'Explain: When you add and use rewards cards with Apple Pay transactions
  in stores'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 483
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:56-05:00'
sources: []
---

**Situation / Task**  
I was tasked to enable a “Reward‑Card” feature for merchants using **Apple Pay** so that customers could earn points on in‑store purchases without leaving the Apple Pay flow.

**Action (Technical)**  
1. **API Gateway + Lambda** – A lightweight REST endpoint receives the *payment token* from the Apple Pay SDK.  
2. **DynamoDB “Rewards” table** (partition key: `merchantId`, sort key: `cardNumber`) stores reward‑rules and point balances.  
3. **Step Functions** orchestrates a three‑step workflow:  
   - Validate card & merchant → *Authorizer Lambda* (IAM role, Cognito).  
   - Calculate points (e.g., 2 % of transaction amount) → *Calculator Lambda*.  
   - Persist new balance and emit an SNS event for analytics.  
4. **EventBridge** routes the SNS topic to a downstream *Analytics microservice* that aggregates weekly spend per card.

**Design Rationale**  
- *Scalability*: Serverless components auto‑scale; DynamoDB handles millions of concurrent writes with single‑digit latency.  
- *Availability*: All services are in an AZ‑redundant region, using Lambda’s built‑in retry and DLQ for fault tolerance.  
- *Cost*: Pay‑per‑use (≈$0.20 M/yr for expected 10 k merchants).  
- *Trade‑off*: We accept a small (~1 ms) extra network hop for the analytics pipeline to keep the payment flow fast.

**Result**  
After launch, we saw **+18 % transaction volume** for participating merchants and **$3.2 M in reward points redeemed** within 90 days—proof that the feature drove both customer engagement and merchant retention.

> **Leadership Principles**: *Customer Obsession* (delivering frictionless rewards) & *Ownership* (owning end‑to‑end reliability).  
> **Bar‑raiser cues**: Clear ownership of data flow, deep dive into latency/cost trade‑offs, quantified impact, and iterative learning from post‑mortems on early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
