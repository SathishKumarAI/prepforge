---
qid: ing_78a94b7d1c__faang__local
question: 'Explain: DocumentDB lets you pick your read consistency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 471
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:31-05:00'
sources: []
---

**Clarify**  
You’re asking how Amazon DocumentDB’s *read‑consistency* works and why it matters for distributed NoSQL workloads.  
Assumptions: the cluster uses multi‑AZ replicas, we care about latency vs. freshness, and callers can choose between eventual or strong reads.

**Approach**  
1. Outline the consistency model choices.  
2. Explain how DocumentDB implements each path.  
3. Show trade‑offs (latency, throughput).  
4. Summarize best‑practice patterns.

**Depth**  
DocumentDB is a managed MongoDB‑compatible service that runs on an Amazon RDS‑style architecture.  
* **Eventual consistency** – reads are served from the nearest replica; writes propagate asynchronously to the leader and other replicas. Latency is minimal (sub‑ms) but data may be stale until replication completes.  
* **Strong consistency** – a read must go to the primary node, guaranteeing that it sees the latest committed write. This incurs higher latency (round‑trip to the primary, ~10–20 ms) and limits throughput because all reads serialize on one instance.

DocumentDB exposes this via the `readPreference` parameter in drivers (`primary`, `secondary`, etc.). The driver can also specify *maxStalenessSeconds* for a tunable trade‑off between freshness and locality.

**Edge Cases**  
- Network partitions: eventual reads may return old data; strong reads will fail if the primary is unreachable.  
- Write heavy workloads: strong reads can become a bottleneck on the primary.  
- Multi‑AZ failover: consistency guarantees shift as the new leader takes over, potentially causing short periods of increased latency.

**Optimize & Communicate**  
For most read‑heavy analytics, use eventual reads with `maxStalenessSeconds` tuned to business tolerance (e.g., 30 s). For OLTP or audit trails, enforce strong consistency. Communicate the trade‑off clearly: “We’re sacrificing a few milliseconds of latency for guaranteed freshness on critical paths.” This structured explanation demonstrates clear problem framing, technical depth, and actionable guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
