---
qid: ing_6b2fb6b4e1__fp__local
question: 'Explain: Faster recovery — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 389
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:52:25-05:00'
sources: []
---

**Disaster recovery (DR) for machine‑learning workloads is the guarantee that, if a catastrophic event knocks out a region or an entire cloud tier, your models, data and pipelines can be resumed in another location without losing training progress or inference capacity.**

The *fundamental problem* is that ML systems are stateful: they store millions of parameters, large training datasets, and incremental checkpoints. When an outage occurs, the last consistent snapshot must be available elsewhere. DR solves this by **replicating state across geographically isolated zones** so that a failure in one does not render the entire system unusable.

Why it *must* work this way:

1. **Consistency vs. Latency trade‑off** – to keep checkpoints usable, you cannot wait for synchronous writes across continents; instead you use *asynchronous cross‑region replication* with eventual consistency, then lock a consistent point in time before switchover.
2. **Cost–Recovery Time Objective (RTO)** – Google Cloud’s DR designs rely on pre‑provisioned target clusters that can be spun up from snapshots in seconds, turning RTO into minutes rather than hours.

A *non‑obvious insight* is that the real bottleneck isn’t the data transfer; it’s the *checkpointing logic*. If your training loop writes checkpoints too frequently or with large overhead, you’ll waste bandwidth and delay recovery. Designing lightweight, incremental checkpoint formats (e.g., sharded parameter files) dramatically reduces the time to restore a model in another region.

In short, DR for ML on GCP is an engineered balance between *geographic isolation*, *asynchronous replication* and *efficient checkpointing* that turns catastrophic outages into recoverable hiccups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
