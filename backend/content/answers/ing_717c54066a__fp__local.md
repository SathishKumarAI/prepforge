---
qid: ing_717c54066a__fp__local
question: 'Explain: Queues versus streams — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 350
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:05:47-05:00'
sources: []
---

**Queues vs. Streams in Meta’s Asynchronous Fabric**

At its core, an ML training pipeline is a *resource‑constrained optimization loop*: data must be transformed into gradients, which are then applied to model parameters while the system stays responsive to new jobs.  
*Queues* treat each request as a discrete token that sits idle until a worker pulls it. This guarantees isolation and bounded memory but introduces *latency spikes*—a worker may sit empty for minutes if no task arrives, or back‑pressure can cascade when many tasks queue up.

*Streams*, by contrast, view work as a continuous flow: data is shuttled through a pipeline in small batches that never stop. The system’s throughput is bounded by the *throughput–latency trade‑off*: increasing batch size reduces per‑sample latency but raises memory pressure and risk of stale gradients.  

Meta’s insight was to **decouple scheduling from execution**: a lightweight “queue” decides *when* to pull a stream segment, while the stream itself guarantees that data never stalls between transforms. This mirrors the *information bottleneck* principle—each stage compresses information just enough to preserve predictive power but not so much that it blocks downstream processing.

The non‑obvious payoff is **predictable tail latency**: by ensuring streams always have a buffer of pre‑processed samples, the probability of long wait times drops from \(O(N^2)\) (in pure queues) to near‑constant, allowing Meta’s massive distributed training to hit tight SLA targets while still scaling linearly with added GPU nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
