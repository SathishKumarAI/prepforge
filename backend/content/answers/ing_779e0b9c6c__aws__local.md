---
qid: ing_779e0b9c6c__aws__local
question: 'Explain: Portfolio moves — Frontend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 392
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:36-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I joined a fintech startup where the product “Portfolio Moves” let users shift assets between portfolios in real time. The existing monolithic front‑end froze during high traffic (≈ 200 k concurrent users), causing 3 % churn.

**Action (Dive Deep + Bias for Action)**  
1. **Audit & metrics** – instrumented React components with RUM; found that a single “MoveCard” component was blocking the main thread for 250 ms per interaction.  
2. **Redesign** – split MoveCard into three micro‑front‑ends (React, Vue, Svelte) served via AWS CloudFront + Lambda@Edge to cache at edge locations, reducing latency by 60 %.  
3. **State sync** – replaced Redux with GraphQL subscriptions over AWS AppSync; now each move propagates in <30 ms across all clients.  
4. **Scalability** – deployed on Amazon ECS Fargate (auto‑scaling) and SQS for retry queues, guaranteeing 99.9 % availability.

**Result (Deliver Results)**  
- Front‑end latency dropped from 1.2 s to 350 ms (↓70 %).  
- Concurrent users handled increased by 400 %, reducing churn from 3 % to <0.5 %.  
- Cost savings: Fargate + AppSync reduced infra spend by 35 %.

**Bar‑raiser takeaways** – I owned the problem end‑to‑end, dug into telemetry to uncover root causes, delivered a measurable impact, and documented post‑mortem lessons for future feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
