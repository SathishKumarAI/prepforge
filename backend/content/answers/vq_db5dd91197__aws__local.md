---
qid: vq_db5dd91197__aws__local
question: How do you express your creativity?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 365
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:07-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: At my previous role as a senior backend engineer, the product team noticed that user onboarding was dropping after the first three steps, hurting conversion rates by **12 %**.

*Task*: I had to redesign the onboarding flow while staying within the same feature budget and keeping latency under 200 ms.

*Action*:  
1. **Dive Deep** – I pulled telemetry (click‑through, session length) from CloudWatch and identified a bottleneck in the recommendation engine that ran on a single Lambda instance.  
2. **Creativity in Architecture** – Instead of re‑implementing the engine, I proposed an event‑driven microservice pattern using **Amazon EventBridge** + **DynamoDB Streams** to decouple recommendation logic from the onboarding flow.  
3. I added a lightweight AI model hosted on **SageMaker**, served via **API Gateway**, and cached results in **ElastiCache for Redis** to keep response times low.  
4. To showcase ownership, I built an automated test suite that ran nightly, validating both latency and recommendation quality.

*Result*: The new onboarding flow lifted conversion by **18 %** within two weeks of deployment, while latency stayed at 180 ms. Costs increased only **3 %** because the microservice scaled automatically with EventBridge rules.  
*Learned*: Rapid prototyping with serverless can unlock creative solutions that meet both customer needs and operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
