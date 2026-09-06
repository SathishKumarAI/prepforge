---
qid: ing_97d9a4515c__fp__local
question: 'Explain: Comparing the V1 and V2 SDK (Agent SDK) — Letta V1 SDK | Letta
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 489
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:00-05:00'
sources: []
---

## Why compare V1 vs V2?

The **Agent SDK** is the bridge that turns raw telemetry into a policy‑ready stream for an ML model.  
*Problem:* In production we need **low latency**, **high throughput**, and **predictable resource use** while still being able to inject new features or models without redeploying the entire stack.  

### Fundamental design tension

| Goal | Mechanism |
|------|-----------|
| *Deterministic execution* | Static pipeline (V1) vs. dynamic graph (V2) |
| *Scalability* | Fixed‑size worker pool (V1) vs. elastic task queues (V2) |
| *Extensibility* | Hardcoded adapters (V1) vs. plugin registry (V2) |

The V1 SDK was built as a **single‑pass, hand‑crafted pipeline**: each event is processed by a hard‑wired chain of functions. This guarantees minimal overhead but makes adding a new feature a source code change.

V2 rethinks the pipeline as a **dataflow graph** where nodes are first‑class objects that can be swapped or inserted at runtime. The underlying engine schedules tasks across multiple threads, automatically scaling when traffic spikes.

### Deeper principle

Both designs embody *optimization under constraints*: V1 optimizes for **worst‑case latency** by eliminating indirection; V2 optimizes for **resource utilization** by exposing parallelism and modularity. They are two sides of the same Pareto frontier: you cannot improve one without hurting the other.

### Non‑obvious insight

The real differentiator is not just performance but *fault isolation*. In V1, a single buggy node can bring down the whole worker because it runs in a tight loop. In V2, each node is isolated behind an error boundary; a failure propagates only to its downstream consumers and never crashes the entire agent. This subtle change dramatically improves observability and makes A/B testing of new models safer.

---

**Bottom line:** choose **V1** when you need absolute minimal latency in a stable environment; choose **V2** when you must scale, experiment, and isolate faults without redeploying.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
