---
qid: ing_c8258c7ce8__fp__local
question: 'Explain: Requirements Gathering — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 499
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:50-05:00'
sources: []
---

**Why we start with “requirements”**

In any distributed system the *fundamental* problem is **coordination under uncertainty**—deciding what data to act on, when, and how many replicas will see it in a consistent order. A notification service sits at the intersection of three hard constraints:

1. **Latency vs consistency** – users expect instant alerts, but we must not deliver duplicates or miss messages.
2. **Scale vs reliability** – millions of devices poll or push; a single point of failure kills credibility.
3. **Feature richness vs simplicity** – filters, prioritisation, batching, and personalization add state that can explode.

If you ignore these, you’ll either ship a system that sends spam, or one that never reaches the user.

**Deriving the core requirements**

1. **Throughput & latency targets** → dictates partitioning strategy (sharding by user ID) and choice of messaging backbone (Kafka vs Pulsar).
2. **Exactly‑once delivery semantics** → leads to idempotent handlers and per‑device sequence numbers.
3. **Multiplatform support** → pushes us toward a publish/subscribe model with device‑type tags and a fallback HTTP push.
4. **Operational observability** → requires distributed tracing, back‑pressure metrics, and an alerting pipeline.

Each requirement cascades into architectural decisions: data models (user→channels), storage layers (fast cache + durable log), routing (topic‑based vs content‑based).

**Non‑obvious insight**

Most designers over‑engineer the “notification queue” as a single monolith. The deeper principle is *temporal decoupling*: separate **generation** (what to notify) from **delivery** (how & when). By treating generation as a stateless event stream and delivery as a stateful, retry‑aware worker pool, you achieve linear scalability without complex lock‑free coordination. This split also lets you evolve notification channels independently—adding email or push is just another consumer, not a new broker.

In short: start from the uncertainty of user interaction, formalise latency/consistency trade‑offs, and decouple generation from delivery. That yields a robust, extensible notification service ready for an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
