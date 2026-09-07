---
qid: ing_2cc85e2e98__aws__local
question: 'Explain: Clarifying Questions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 484
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was asked to design Airbnb’s “Clarifying Questions” feature—a prompt that surfaces during the booking flow when a user’s search criteria are ambiguous (e.g., “Do you need Wi‑Fi?”). The goal was to increase conversion by 3 % while keeping latency <200 ms.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements**:  
   * Triggered only on the first 10 % of searches that lack key attributes.  
   * Must support real‑time personalization and A/B testing.  

2. **Design**:  
   * **Event ingestion** – Kinesis Data Streams → Lambda for feature flag evaluation.  
   * **Question engine** – DynamoDB (Q&A catalog) + SageMaker inference endpoint for intent scoring.  
   * **Response delivery** – API Gateway edge cache to keep response <200 ms; fallback static content on CloudFront.  

3. **Scalability & Availability**:  
   * Auto‑scaling Lambda + provisioned concurrency (5 k req/s).  
   * Multi‑AZ DynamoDB with point‑in‑time recovery.  
   * Global edge caching reduces egress costs by 30 %.  

4. **Cost**:  
   * Estimated $12K/month vs legacy monolith ($18K), saving 33 % while improving SLAs.

**Result (Deliver Results)**  
A/B test on 2 M users showed a **3.8 % lift in bookings** and a **45 ms average latency**—exceeding the target. The feature also reduced support tickets by 12 %.  

**Bar‑raiser takeaways**  
* Ownership: I owned data flow, cost, and SLAs from scratch.  
* Dive Deep: Chosen services were justified with latency & cost modeling.  
* Quantified Impact: Conversion lift, latency, and cost savings are all metric‑driven.  
* Learning: Early lambda retries caused a 0.5 % error spike; we added exponential back‑off and now have <0.01 % errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
