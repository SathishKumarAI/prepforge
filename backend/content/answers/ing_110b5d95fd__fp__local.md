---
qid: ing_110b5d95fd__fp__local
question: 'Explain: were optional maybe an email or i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 466
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:10-05:00'
sources: []
---

**Optional Feature: Email/Push Notifications for Spot Availability**

| **Why it’s optional** | **When it matters** |
|-----------------------|---------------------|
| Adds user convenience but not essential to core parking‑garage operation. | In high‑traffic malls or city centers where users are willing to pay a premium for real‑time updates. |

### Fundamental Problem Solved
The core system guarantees a *guaranteed* spot at checkout. Optional notifications reduce the **search time** and **user friction** by informing drivers of free slots before they arrive.

### Why it Must Work That Way

1. **Event‑driven architecture** – The parking sensor network publishes “spot freed” events. A lightweight message broker (Kafka/Redis Streams) decouples this from downstream services, ensuring scalability.
2. **Stateless notification service** – Keeps the user interface responsive; the service only stores a subscription list and forwards messages to an email/SMS gateway. This follows *separation of concerns* and keeps the core parking logic lean.
3. **Rate‑limiting & batching** – Prevents spamming users during peak times (e.g., lunch hour). The service aggregates events per user every 30 seconds, then sends a single digest, satisfying both user experience and API quota constraints.

### Deeper Principle
This is an instance of **information‐theoretic efficiency**: by sending *only* the delta (a spot just became free) instead of polling the entire state, we reduce bandwidth and improve latency. The notification channel acts as a *predictive cache* for user decisions.

### Non‑obvious Insight
Most designers think notifications are merely an added feature; in fact, they can **drive architectural choices**—forcing a publish/subscribe pattern that naturally scales to many concurrent users. Moreover, the same messaging backbone can later support other services (e.g., dynamic pricing or maintenance alerts) without extra wiring.

Thus, optional email/push notifications provide user value while compelling an efficient, event‑driven design that remains lightweight and extensible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
