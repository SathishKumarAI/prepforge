---
qid: ing_125fa64a66__aws__local
question: Design a customer-facing agent for an airline that can cancel and rebook
  flights. How do you keep it from violating fare policy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 372
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:06-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation (S)** – While leading the automation team for an international airline, we were asked to build a virtual agent that could cancel and re‑book flights on behalf of passengers without breaching complex fare rules.

**Task (T)** – Deliver a customer‑facing bot that honors every fare class’s cancellation penalties, upgrade conditions, and revenue‑management constraints while keeping latency under 2 s.

**Action (A)**  
1. **Rule Engine + Policy Service** – Built a microservice (`FarePolicyEngine`) on AWS Lambda with DynamoDB tables for each fare code, capturing penalty windows, refundable amounts, and rebooking eligibility.  
2. **Pre‑Validation Layer** – The agent calls the engine before any booking API call; if the policy flags a violation, it returns an explicit “cannot cancel” message with the exact penalty.  
3. **Event‑Driven Retry & Compensation** – If a cancellation fails due to a dynamic rule change (e.g., sudden fare hike), SQS queues the request and Lambda retries after 5 min, ensuring eventual consistency.  
4. **Observability** – CloudWatch metrics (`policy_violation_count`, `api_latency`) trigger alerts; dashboards show real‑time compliance heatmaps.

**Result (R)** – In a pilot of 30k requests/month, policy violations dropped from 7% to <0.1%, and customer NPS rose by 12 points. Cost stayed <$200/month due to serverless scaling.  

*Bar‑raiser notes:* The answer shows ownership of compliance, dives deep into rule representation, quantifies impact, and learns from the initial high violation rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
