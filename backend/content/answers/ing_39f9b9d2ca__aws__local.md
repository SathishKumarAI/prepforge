---
qid: ing_39f9b9d2ca__aws__local
question: 'Explain: you fixed the bug you can''t verify — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 473
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:24-05:00'
sources: []
---

**Context – Leadership Principles:**  
*Customer Obsession* (the bug broke the data‑pipeline users rely on) & *Dive Deep* (understanding a distributed system’s hidden state).

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| A nightly ML model training job failed intermittently. The error log showed “unknown error in deterministic simulation” but reproducing it locally was impossible. | Identify and fix the non‑deterministic bug in a distributed simulation used to validate training data. | 1. **Instrumentation** – Added fine‑grained CloudWatch metrics (task start/stop timestamps, RNG seeds, node IDs). <br>2. **Deterministic replay** – Built an SQS‑driven replay service that replays the exact sequence of events using captured seeds and logs. <br>3. **Root cause analysis** – Discovered a race condition in the `StateAggregator` component where two workers updated shared memory without proper lock ordering, causing inconsistent RNG outputs. <br>4. **Fix & test** – Introduced a distributed lock via DynamoDB’s conditional writes and added unit tests that simulate high contention. | • 100% reduction in job failures (from 3/24 to 0). <br>• Training pipeline latency dropped from 12 h to 8 h, delivering models 33 % faster to customers. <br>• New metrics now flag >5σ deviations within 2 min, enabling proactive alerts. |

**Technical take‑away:**  
- Leveraged **AWS Step Functions** for orchestrating deterministic replay, **DynamoDB** for lightweight distributed locking, and **CloudWatch Logs Insights** for anomaly detection.  
- The solution scales to thousands of workers by sharding locks per data shard, keeps cost < $0.05/hr, and maintains 99.9 % availability.

**Bar‑raiser signal:** I owned the problem end‑to‑end, dove deep into hidden concurrency issues, quantified impact with real SLA metrics, and learned that deterministic testing must be baked into CI for distributed ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
