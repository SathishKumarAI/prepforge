---
qid: ing_d3afd6678a__fp__local
question: 'Explain: Step 8: Sending the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 452
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:08-05:00'
sources: []
---

**Step 8: Sending the Notification – Why a Decoupled, Event‑Driven Service Must Exist**

At this point we have an *intent* (user A should be notified about event X). The fundamental problem is **“how to deliver that intent reliably and scalably without forcing the core business logic to wait for I/O.”**  
If we were to embed the send‑logic inside the user service, every write would become a synchronous HTTP call to an external provider (e.g., Firebase, SES). That serializes traffic, multiplies latency, and couples failure modes.  

The solution is a **notification microservice that consumes a *notification event* from a message bus**:

| Reason | Design choice |
|--------|---------------|
| **Isolation of I/O‑bound work** | Queue → worker pool; workers can scale independently. |
| **Guaranteed delivery / retries** | Dead‑letter queue, exponential backoff, idempotent handling. |
| **Multi‑channel support** | A single event can be routed to email, push, SMS, or WebSocket via a *routing table* stored in Redis (fast lookup). |
| **Back‑pressure & throttling** | Token bucket per user/channel; if exceeded, events are dropped or marked as “queued”. |

A non‑obvious insight: **use a Bloom filter to de‑duplicate notification bursts before they hit the worker pool.**  
The core system writes an event only once; the filter quickly tells workers whether this user has already received a similar notification in the last *N* minutes, saving bandwidth and preventing notification fatigue.

In short, decouple intent from execution via an asynchronous channel, add idempotency & routing logic, and sprinkle probabilistic de‑duplication for efficiency. This architecture satisfies latency, scalability, and reliability—key goals of any production‑grade notification service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
