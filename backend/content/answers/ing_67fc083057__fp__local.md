---
qid: ing_67fc083057__fp__local
question: 'Explain: 5.4 Monitoring and Logging — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 457
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:47-05:00'
sources: []
---

### From the Core Problem

A notification system is **a queue‑based publisher–subscriber pipeline** that must guarantee *delivery* (at least once, sometimes exactly once) while handling millions of events per second.  
The fundamental trade‑off is between **latency** and **reliability**: a fast path can drop messages; a durable path incurs extra hops.

### Why Monitoring & Logging Must Be Structured

1. **Observability ≠ Logging** – logs are snapshots, metrics are aggregates.  
   *Metrics* (throughput, error rate, latency percentiles) let us detect anomalies *before* they hit users.  
2. **Eventual Consistency** demands *audit trails*: every message’s journey must be traceable from publisher to consumer for compliance and debugging.
3. **SLO‑driven design**: Service Level Objectives (e.g., 99.9 % delivery within 200 ms) translate directly into target metrics; monitoring turns these objectives into actionable alerts.

### Deep Principle: Information Bottleneck

Treat each notification as a *symbol* that carries information about its state (queued, sent, acked).  
The **information bottleneck** principle says the system should preserve only the *relevant* part of this symbol for downstream consumers.  
Thus, logs should be *compressed* into *structured events* (e.g., `NotificationSent{ id, userId, timestamp }`) rather than raw payloads. This reduces storage while retaining all causal links.

### Non‑Obvious Insight

Most designs log every message as a plain text line.  
**Instead, embed a deterministic correlation ID in the event header and propagate it through all services.**  
This allows *exactly‑once* reconstruction of a notification’s path by joining logs on that single key—no ad‑hoc heuristics, no duplicate work, and no loss of traceability even when failures happen out of order.

By grounding monitoring and logging in this principled view, the service scales gracefully while meeting stringent SLOs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
