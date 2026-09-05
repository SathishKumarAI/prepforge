---
qid: ing_31829e4e4c__eli5__local
question: 'Explain: 5.3 Reliability — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 250
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:14-05:00'
sources: []
---

Imagine you’re running a bakery that sends out baking‑time alerts to customers who ordered cookies online.  
**Reliability** is the guarantee that every customer receives their alert exactly when they expect it, even if some ovens break or the phone line hiccups.

1. **Redundant servers (multiple ovens)** – If one server fails, another can instantly take its place so no message stalls.  
2. **Message queue (delivery list)** – Every notification is first put into a safe “to‑deliver” pile. The system keeps trying until it’s confirmed delivered, so nothing gets lost if a network glitch occurs.  
3. **Acknowledgment and retry (customer confirms receipt)** – When the app acknowledges the alert, the message disappears from the queue; otherwise it’s retried after a short wait.  
4. **Monitoring & alerts (bakery staff checking ovens)** – Continuous health checks detect failures early and trigger automatic fail‑over or human intervention.

Together, these steps make the notification service as dependable as a bakery that always delivers fresh cookies on time, no matter what hiccups arise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
