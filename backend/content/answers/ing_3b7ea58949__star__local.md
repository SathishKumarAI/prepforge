---
qid: ing_3b7ea58949__star__local
question: 'Explain: Start building in the console — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 345
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:30-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with refactoring the customer‑support ticketing system for a SaaS product that handled ~15k tickets per day. The legacy polling API caused latency spikes and missed updates during traffic surges.

**Task**  
I needed to design an event‑driven architecture so that new ticket events were instantly propagated to all downstream services (notification, analytics, SLA monitoring) without overloading any single component.

**Action**  
I introduced AWS SNS/SQS as a Pub/Sub messaging layer. First I defined topics for “TicketCreated”, “TicketUpdated” and “TicketClosed”. Each microservice subscribed via SQS queues with separate visibility timeouts to allow independent scaling. I added dead‑letter queues to capture transient failures, and used message attributes (e.g., priority) to enable prioritized processing. To guarantee at‑least‑once delivery, I configured SNS FIFO topics and enabled deduplication in SQS. Finally, I wrote a small Lambda that acted as a bridge between the legacy REST endpoint and the SNS topic, ensuring backward compatibility.

**Result**  
The new system cut ticket‑processing latency from 2 s to <200 ms for 99th percentile events, reduced duplicate notifications by 95%, and allowed each downstream service to scale independently—handling peak loads of 25k messages per second without any downtime. I learned that decoupling via Pub/Sub not only improves performance but also makes the system resilient to individual component failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
