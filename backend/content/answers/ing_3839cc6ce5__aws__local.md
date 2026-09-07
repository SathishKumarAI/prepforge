---
qid: ing_3839cc6ce5__aws__local
question: 'Explain: Surviving Churn: Pin, Lock, Isolate — Navigating Framework Churn'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 416
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:49-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional squad building an AI‑driven recommendation engine for a subscription video platform that was losing 12 % of users monthly due to “framework churn” – customers switching between competing content libraries.

**Task (T)**  
Our goal: reduce churn by 4 % in six months while keeping latency under 200 ms and cost < $0.02 per recommendation.

**Action (A)**  
1. **Pin** the core model: deployed a single, versioned SageMaker endpoint behind an Application Load Balancer with weighted routing to A/B test new features without impacting production.  
2. **Lock** user state in DynamoDB using optimistic locking and conditional writes; this guarantees consistency when users switch libraries.  
3. **Isolate** the recommendation microservice on ECS Fargate, scaling based on CloudWatch metrics (CPU % > 70 % → +1 task).  
4. Implemented an EventBridge pipeline to capture “library‑switch” events and trigger a Lambda that recalculates user embeddings in real time, ensuring fresh recommendations.

**Result (R)**  
Churn dropped from 12 % to **8.5 %** within four months—a 30 % relative improvement—while latency stayed at ~150 ms. The cost per recommendation fell by 15 %, and the system handled a 3× traffic spike during a new library launch with zero downtime.

> **Bar‑raiser notes:**  
> *Ownership*: I owned end‑to‑end reliability.  
> *Dive Deep*: Used CloudWatch traces to pinpoint latency spikes.  
> *Quantified Impact*: 4 % churn reduction, cost savings.  
> *Learning*: Initial Lambda timeout caused missed updates; fixed by adding retry logic and a DLQ.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
