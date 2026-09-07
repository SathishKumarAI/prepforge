---
qid: ing_565461ac27__faang__local
question: 'Explain: New York Times — How do we incorporate Event Sourcing into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 448
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:04:45-05:00'
sources: []
---

**Clarify**  
The NYT asks how to embed *Event Sourcing* in a production ML pipeline—i.e., persisting every change (feature updates, model retrains, inference results) as immutable events so that state can be rebuilt or audited.  
Assumptions: we have a micro‑service architecture, a distributed event store (Kafka/Redis Streams), and need near‑real‑time inference.

**Approach**  
1. **Event Schema** – define `FeatureUpdate`, `ModelVersionCreated`, `InferenceResult`.  
2. **Write Model** – each change emits an event to the broker; services subscribe to relevant streams.  
3. **Read Model / Projection** – maintain denormalized views (e.g., user‑feature matrix) in a fast store (Redis, ClickHouse).  
4. **Rebuild / Replay** – on failure or model rollback, replay events to reconstruct state.  
5. **Governance** – versioned schemas, schema registry, and event retention policies.

**Depth**  
- *Write path*: append‑only log → O(1) per event; idempotent producers.  
- *Read path*: projections materialized with incremental updates → O(events processed).  
- *Consistency*: eventual consistency between projection and source; use CQRS to decouple read/write.  
- *Scalability*: horizontal scaling of brokers, partitioned streams, consumer groups.

**Edge Cases**  
- Schema evolution: backward‑compatible changes via schema registry.  
- Out‑of‑order events: include timestamps/sequence numbers; replay with sorting if needed.  
- Large payloads: compress or store references to S3 objects.

**Optimize & Communicate**  
Start with a pilot on a single feature (e.g., click‑through rates). Measure latency, storage overhead, and recovery time. If acceptable, roll out incrementally, adding audit logs for compliance. Communicate trade‑offs: higher write cost vs. full auditability and instant rollback capability—key benefits for NYT’s data integrity and regulatory needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
