---
qid: ing_b23c00f5d1__fp__local
question: 'Explain: Disadvantages — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 521
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:54-05:00'
sources: []
---

**Why EDA can hurt machine‑learning pipelines**

Event‑driven architecture (EDA) was invented to *decouple* producers from consumers, allowing each component to scale and evolve independently. In a ML system it promises loose coupling between data ingestion, feature extraction, model training, and inference services. However, that very flexibility introduces **hidden coupling through state**.

1. **Event ordering & idempotence** – ML models depend on the *sequence* of observations (e.g., time‑series). EDA treats events as independent messages; if they arrive out of order or are replayed, downstream stages may train on corrupted sequences, violating the assumption that data is a stationary stream.

2. **Event loss & durability** – Distributed message brokers provide “at least once” guarantees by default. Duplicate events force consumers to implement idempotent logic; missing events silently corrupt training labels or feature statistics, leading to biased models.

3. **Observability bottleneck** – Debugging a failure in an EDA pipeline requires replaying the exact event history and correlating it across services. The *causal chain* is no longer local, making root‑cause analysis exponentially harder than in request‑driven setups.

4. **Stateful vs stateless tension** – Feature stores or model servers often keep internal state (e.g., rolling windows). In an EDA world that state must be reconstructed from events, which introduces *eventual consistency*—a well‑known trade‑off under the CAP theorem that is rarely acceptable for low‑latency inference.

### Non‑obvious insight
The real cost of EDA in ML is **state drift**: because each service rebuilds its view from an event log, any discrepancy (missing, reordered, or duplicated events) accumulates silently. Over time the local state diverges from the true data distribution, and a model that once performed well suddenly degrades without any obvious signal. Addressing this requires either strong ordering guarantees, global transaction support, or a hybrid architecture that retains some synchronous control for critical ML components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
