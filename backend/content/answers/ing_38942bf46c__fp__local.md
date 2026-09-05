---
qid: ing_38942bf46c__fp__local
question: 'Explain: Trigger-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 418
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:04:57-05:00'
sources: []
---

## Trigger‑Based CDC – The Why and How

At its core a change data capture (CDC) system must **observe state transitions** in a source database and emit them to downstream consumers *without* disturbing normal OLTP workloads.  
The most principled way to do this is to attach a **trigger**—a tiny, deterministic piece of code that runs *immediately* after an insert/update/delete. Triggers solve the fundamental optimization problem: **“how to guarantee 100 % capture latency while incurring minimal overhead?”**

1. **Atomicity & Consistency**  
   A trigger executes in the same transaction as the DML, so it sees a fully‑committed state and cannot miss a row even under heavy contention. This satisfies the *strong consistency* requirement that downstream systems receive every change exactly once.

2. **Zero‑Latency Propagation**  
   Because the trigger fires at write time, the captured event is produced before the transaction commits, giving downstream pipelines an opportunity to start processing almost instantly—essential for real‑time analytics or microservice syncs.

3. **Isolation from Application Logic**  
   By keeping CDC in the database layer we avoid scattering “audit” code across services, preserving the *single source of truth* principle and reducing coupling.

### Non‑obvious Insight
Many designers over‑engineer CDC with “log‑based” approaches that replay binary logs. While powerful for schema evolution, they suffer from **latency jitter**: a log parser must catch up to the latest WAL entry before emitting changes. Trigger‑based CDC sidesteps this by pushing events *in situ*, guaranteeing deterministic latency regardless of write volume. The trade‑off is a tighter coupling to the database vendor and potential performance impact on high‑write workloads, but for many real‑time use cases the near‑zero lag outweighs that cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
