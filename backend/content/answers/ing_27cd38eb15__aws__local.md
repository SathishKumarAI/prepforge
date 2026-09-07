---
qid: ing_27cd38eb15__aws__local
question: 'Explain: Subscribe to updates — Self-host Langfuse (Open Source LLM Observability)
  - Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 440
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:42-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a real‑time notification pipeline for our AI platform so that data scientists could subscribe to model‑performance updates from Langfuse (the open‑source LLM observability stack). The goal: deliver updates within 2 s of an event, support 10k concurrent users, and keep cost < $200/month.

**Action**  
1. **Architecture** – I chose EventBridge + Lambda + SNS to decouple ingestion from delivery.  
   *Langfuse* emits CloudWatch Events → EventBridge rule → Lambda that pushes the payload into an SQS FIFO queue.  
2. **Subscription Service** – A lightweight Node.js microservice on ECS Fargate manages user subscriptions (CRUD) and publishes to an SNS topic per user group.  
3. **Scaling & Cost** –  
   * EventBridge handles millions of events/second with 0 ops overhead.  
   * Lambda auto‑scales; each invocation processes one event → <$0.000016 per inv.  
   * SNS fan‑out to HTTP endpoints (our front‑end websockets) costs <$0.50/month for 10k users.  
4. **Observability** – All logs go to CloudWatch, and I added a custom metric “update_latency” to trigger alarms if >2 s.

**Result**  
- Latency dropped from 5 s (previous polling loop) to <1 s for 95 % of updates.  
- 10k concurrent users handled without throttling; cost stayed at $180/month.  
- Customer satisfaction score improved by 18 pts (measured via internal survey).

**Reflection**  
I learned that *Customer Obsession* drives us to obsess over latency, while *Dive Deep* pushed me to pick the right AWS services and tune them. The bar‑raiser will note my ownership of end‑to‑end flow, quantified impact, and rapid iteration after the first pilot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
