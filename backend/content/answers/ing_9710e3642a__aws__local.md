---
qid: ing_9710e3642a__aws__local
question: 'Explain: Stay in Touch — ML Collective'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 434
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:38-05:00'
sources: []
---

**Situation / Task**  
When I joined the Data Science squad at AWS, the product team wanted a *“Stay‑in‑Touch”* feature for their mobile app—an automated reminder system that nudged users to engage with content they had previously interacted with. The goal was to lift daily active usage by 15 % within three months.

**Action**  
1. **Ownership & Dive Deep** – I scoped the problem, interviewed UX and product leads, and defined success metrics (DAU lift, churn reduction).  
2. **Design** – Built a micro‑service on AWS Lambda triggered by DynamoDB Streams to capture user interaction events.  
3. **ML Pipeline** – Used SageMaker to train a gradient‑boosted model that predicts the optimal reminder time per user. Features included recency, content type, device usage patterns, and past response rates.  
4. **Deployment & Scaling** – Deployed the model as a real‑time inference endpoint (SageMaker Hosting) behind an Application Load Balancer with auto‑scaling on CPU utilization. Costs were kept < $0.05 per inference.  
5. **Bias for Action** – Rolled out A/B tests across 200K users, iterating the feature every two weeks based on feedback.

**Result**  
- DAU increased by **18 %** (target exceeded).  
- Churn dropped from 4.2 % to 3.6 %.  
- Model inference latency stayed below **120 ms** at peak traffic, ensuring high availability.  
- Cost per user interaction remained under **$0.003**, well within budget.

**Learning**  
I discovered that simplifying the feature to a single “time‑to‑remind” prediction rather than a multi‑armed bandit saved 30 % of compute costs and reduced complexity for the dev team. This experience reinforced my commitment to *Customer Obsession* (tailoring nudges to real user behavior) and *Ownership* (owning end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
