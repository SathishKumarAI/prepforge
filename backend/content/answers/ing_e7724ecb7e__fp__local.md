---
qid: ing_e7724ecb7e__fp__local
question: 'Explain: Eliminate polling — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 404
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:31-05:00'
sources: []
---

**Why “polling” is wasteful**

In a client‑server world the simplest way for an application to learn that something happened on the server is to keep asking (“Is there new data?”).  
Polling turns every request into two operations: *send* and *receive*. Each poll costs network bandwidth, latency, and CPU. Worse, it introduces **latency jitter** – you only see an event when your next request lands, which can be seconds or minutes apart.

---

### Pub/Sub from first principles

1. **Decouple producer & consumer**  
   - A **publisher** emits a message to a *topic*.  
   - A **subscriber** registers interest in that topic without knowing who the publisher is.  

2. **Event‑driven communication**  
   The system pushes the message to every subscriber as soon as it arrives, not when the subscriber asks for it. This removes the “request” step entirely.

3. **Scalable fan‑out**  
   Each message can be delivered to *many* subscribers in parallel, and each subscriber processes messages independently. The load on the publisher is constant regardless of how many consumers exist.

---

### Deeper principle: *Information locality*

Pub/Sub keeps information where it was produced until a consumer needs it. Rather than repeatedly transferring the same data across the network (polling), the system only transmits once and propagates locally to interested parties. This matches the **information‑theoretic** idea that communication should minimize redundancy.

---

### Non‑obvious insight

Because subscribers receive messages asynchronously, they can *buffer* or *batch* them before processing. This means a slow consumer does not block the entire system; it only delays its own downstream pipeline, preserving overall throughput—something polling cannot guarantee without complex back‑pressure mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
