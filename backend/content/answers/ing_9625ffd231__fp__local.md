---
qid: ing_9625ffd231__fp__local
question: 'Explain: Event-Driven Systems — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 402
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:32-05:00'
sources: []
---

**Event‑driven systems for ML workloads**

The *fundamental problem* is that a model’s input pipeline, training loop and inference API must all react to data arriving at irregular intervals while remaining scalable and fault‑tolerant.  
Instead of polling or tight loops, an **event**—a small, immutable record (e.g., “new image uploaded”)—is emitted into a broker (Kafka, Pulsar). A consumer subscribes to that topic, pulls the event, and triggers downstream logic: feature extraction → model inference → storage.  

Why this works:

| Principle | Manifestation |
|-----------|---------------|
| **Decoupling** | Producers and consumers do not need to know each other’s state; they only agree on the event schema. |
| **Back‑pressure & buffering** | The broker stores events until consumers are ready, turning bursty traffic into smooth throughput. |
| **Scalability by partitioning** | Each topic can be split across partitions; parallel consumers process distinct slices without conflict. |
| **Event sourcing** | The immutable log of events is a single source of truth; replaying it rebuilds state or retrains models. |

A *non‑obvious insight* is that the broker’s ordering guarantees (per‑partition) become the only mechanism to preserve causality in an otherwise distributed system. By carefully designing partition keys—e.g., hashing by user ID—you ensure that all events for a given logical entity are processed sequentially, eliminating race conditions without locking.

In a system‑design interview, articulate this flow: event → broker → consumer → ML component → sink, and justify each layer with the principles above. This shows mastery of both distributed systems theory and practical ML engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
