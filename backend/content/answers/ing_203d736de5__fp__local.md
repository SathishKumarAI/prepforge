---
qid: ing_203d736de5__fp__local
question: 'Explain: Storage Requirements — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 527
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:33-05:00'
sources: []
---

### Why a Notification Service Needs Careful Storage Planning

**Fundamental problem:**  
A notification system must *persist* every message long enough to guarantee delivery, audit, and compliance while keeping latency low. The storage layer is the backbone that turns an “event” into a durable record.

1. **Throughput vs. Latency (Optimization)** –  
   Each user may receive dozens of messages per hour; the system must write them in real time (≤10 ms). This pushes us toward *append‑only* logs or *write‑ahead buffers* that amortize I/O. The storage cost scales linearly with writes, so we use **partitioned SSDs** and **compression** to keep writes cheap.

2. **Retention Policy (Information Theory)** –  
   If the policy is “retain 90 days,” the entropy of a message stream dictates how many bytes survive. A simple formula:  
   \[
   S_{\text{total}} = R_{\text{msg}}\times B_{\text{avg}}\times T_{\text{ret}}
   \]
   where \(R_{\text{msg}}\) is messages per second, \(B_{\text{avg}}\) average bytes, and \(T_{\text{ret}}\) retention seconds.  
   This shows that *message size* dominates cost; thus we strip metadata early (e.g., use IDs instead of URLs).

3. **Consistency vs. Availability (CAP)** –  
   For “at‑least‑once” delivery we need **write‑consistency** across replicas, which implies a replication factor \(k\). Storage multiplies by \(k\), so we choose *eventual consistency* for read‑heavy workloads and isolate the write path on a single leader node.

4. **Non‑Obvious Insight:**  
   Most designs treat storage as a flat disk budget, but **write amplification** in log‑structured merge trees (LSM) can inflate costs 10× if compaction is mis‑tuned. By profiling *key churn* and setting a *compaction threshold* proportional to the write rate, we keep amplification near 1.5–2x, dramatically reducing storage needs.

In short, model storage as an optimization problem: minimize \(k \times S_{\text{total}}\) subject to latency ≤ 10 ms and retention constraints, then engineer the log, compression, and compaction policies accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
