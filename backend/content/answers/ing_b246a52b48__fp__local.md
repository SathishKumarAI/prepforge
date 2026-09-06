---
qid: ing_b246a52b48__fp__local
question: 'Explain: Durability and Replay — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 409
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:23:02-05:00'
sources: []
---

**Durability & Replay in Pub/Sub**

At its core a publish‑subscribe system must guarantee that *every* message reaches all intended subscribers **at least once**, even when the network or nodes fail.  
The first principle is *information preservation*: if a publisher emits an event, the system’s job is to keep that bit of information until every interested subscriber has consumed it.  

**Durability** follows from this: we must store messages on stable media (disk, replicated log) before acknowledging receipt to publishers. Without persistence a crash erases data, violating the “at least once” contract.  
The *why* is simple—publishers cannot be forced to wait for all subscribers; they only need the message persisted. Thus durability decouples production from consumption latency.

**Replay** arises from the same principle of preservation but addresses *consistency*. Subscribers may miss messages due to outages or back‑pressure. By exposing a *cursor* (offset, timestamp) into the durable store, the system lets consumers seek to any point and re‑process events. This is essentially an index over a log—an implicit snapshot of state that can be replayed to rebuild in‑memory caches or recover from partial failures.

**Non‑obvious insight:**  
Durability *and* replay together turn the pub/sub bus into a **temporal database**. The log becomes a versioned, append‑only data store where every consumer can view the system’s history as if it were querying a time‑series table. This duality is why many modern event‑driven architectures (Kafka, Pulsar) treat the topic as both a messaging queue and a persistent storage layer—simplifying downstream analytics, stateful stream processing, and fault recovery in one unified fabric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
