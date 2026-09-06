---
qid: ing_f06cd5cedd__fp__local
question: 'Explain: System Design Fundamentals — System Design Academy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 395
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:30:16-05:00'
sources: []
---

**System‑Design Fundamentals for Machine‑Learning Platforms**

At the core of any production ML system is a *data pipeline* that turns raw observations into predictions with bounded latency and cost. The fundamental problem is **scalable, consistent data flow under uncertainty**: data arrives at irregular rates, features drift over time, models must be retrained without downtime, and predictions must be served in milliseconds.

From this problem arise three invariants:

| Invariant | Why it holds |
|-----------|--------------|
| **Statelessness of compute nodes** | Allows horizontal scaling; each request can hit any node because all state is stored externally (e.g., feature store, model registry). |
| **Immutable artefacts** | Models and feature transforms are versioned objects. They never change in place, guaranteeing reproducibility and safe rollback. |
| **Event‑driven data movement** | Instead of polling, producers emit events; consumers subscribe. This decouples components and gives backpressure control, essential when training jobs (GPU‑heavy) must not starve inference traffic. |

These invariants are a direct application of *information theory* (entropy minimization by caching feature vectors) and *distributed systems*’ CAP theorem: we choose **Consistency + Availability** for inference, while tolerating partitioning during model updates.

A non‑obvious insight: **Treat the model as a first‑class resource, not an ancillary component.** By exposing models through a lightweight REST or gRPC interface with version tags and health checks, you can treat them like any other microservice—deploy, scale, monitor, and replace without touching application code. This abstraction turns the traditionally monolithic “ML pipeline” into a composable system that scales organically as data and users grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
