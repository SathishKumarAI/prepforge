---
qid: ing_926d652f0e__think__local
question: 'Explain: Push — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 655
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:46:27-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - *What is “Push – Pub/Sub”?* We’re talking about a messaging pattern where a publisher sends messages to subscribers without waiting for them (push semantics).  
   - *Scope:* Focus on high‑level system design (components, flows, trade‑offs), not code.  
   - *Assumptions:* Distributed environment, many publishers/subscribers, eventual consistency acceptable, message durability required.

**2️⃣ Mental model / framework**  
   Use the classic **Producer–Broker–Consumer** triad:  
   1. **Publisher** writes to a **Topic** (logical channel).  
   2. **Message broker** persists and routes messages.  
   3. **Subscriber** receives messages via an endpoint (HTTP, WebSocket, etc.).  
   Add layers: *Load balancer*, *Authentication/Authorization*, *Monitoring*, *Back‑pressure handling*.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to design | Key decisions |
|------|----------------|---------------|
| **Topic & partitioning** | Partition by key for ordering. | How many partitions? Hash strategy? |
| **Message format & schema registry** | JSON/Avro + versioning. | Schema evolution rules. |
| **Broker choice** | Kafka, Pub/Sub (GCP), RabbitMQ, etc. | Throughput vs latency trade‑off. |
| **Push mechanism** | Pull‑based clients polling or broker pushes via HTTP/WebSocket. | Use of long‑polling or push notifications. |
| **Scaling & fault tolerance** | Replication factor, leader election. | How to handle node failures? |
| **Back‑pressure & QoS** | Acknowledge patterns (ACK/NACK), retry policies. | Avoid message loss vs duplication. |
| **Security** | TLS, IAM roles per topic. | Who can publish/subscribe? |
| **Observability** | Metrics (latency, drop rate), logs, tracing. | Alerting thresholds. |

**4️⃣ Common traps to avoid**  

- *Assuming zero latency:* Push still has network hop; design for acceptable delay.  
- *Over‑partitioning:* Too many partitions cause overhead and ordering issues.  
- *Ignoring schema drift:* Without a registry, deserialization errors explode downstream.  
- *Underestimating back‑pressure:* Fast publishers + slow consumers → out‑of‑memory crashes.

**5️⃣ Sanity‑check & communicate**  

1. **Walk through a sample flow:** “Publisher X sends event Y → Broker stores in partition 3 → Subscriber A receives via webhook.”  
2. **Check invariants:** Durability, ordering per key, at‑least‑once delivery.  
3. **Explain trade‑offs:** e.g., Kafka offers high throughput but requires consumer groups; Pub/Sub is managed and easier to scale but may hide some tuning knobs.  

Present this as a concise diagram + bullet list so the interviewee can quickly reference each layer and its responsibilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
