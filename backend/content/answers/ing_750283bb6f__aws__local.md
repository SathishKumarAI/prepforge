---
qid: ing_750283bb6f__aws__local
question: 'Explain: incorrect assumptions so to start off i — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:46-05:00'
sources: []
---

**Situation & Task**  
During a recent system‑design mock at Amazon I was asked to build an *Amazon Parking Garage* that supports real‑time spot allocation, payment, and analytics across multiple cities. The interviewer expected me to surface hidden assumptions before jumping into architecture.

**Action – Uncovering Incorrect Assumptions**  

| # | Assumption | Why it’s wrong | Corrected view |
|---|------------|----------------|----------------|
| 1 | “All cars are the same size.” | Ignoring compact vs. large spots skews capacity & revenue. | Model spot dimensions; expose API for vehicle type. |
| 2 | “Customers will only use a single payment method.” | Limits adoption and customer obsession. | Support credit, mobile wallets, Amazon Pay, and loyalty credits. |
| 3 | “The system can be built as a monolith.” | Tight coupling hampers scalability & availability. | Adopt micro‑services: Spot‑API, Billing, Analytics. |
| 4 | “Real‑time updates aren’t critical.” | Misses the user’s expectation for instant availability. | Use Amazon Kinesis + DynamoDB Streams for low‑latency state changes. |

**Result**  
After surfacing these assumptions I redesigned the solution using:

* **Amazon EC2 & Auto Scaling** – to handle variable peak demand (up to 10× traffic).  
* **DynamoDB Global Tables** – for multi‑region, highly available spot status.  
* **AWS Lambda + API Gateway** – for serverless payment processing and instant updates.  
* **Kinesis Data Streams + Athena** – for real‑time analytics on occupancy trends.

The new design cut projected latency from 200 ms to <30 ms, increased capacity utilization by 18%, and reduced cost per transaction by 12% through better spot allocation algorithms.

**Leadership Principles Highlighted**  
* **Customer Obsession** – tailoring services to diverse vehicle types & payment preferences.  
* **Dive Deep** – rigorously questioning every “obvious” assumption to surface hidden constraints.  

The bar‑raiser will note my ownership of the entire problem space, depth in uncovering pitfalls, and data‑driven impact on performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
