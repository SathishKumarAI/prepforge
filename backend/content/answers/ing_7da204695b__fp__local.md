---
qid: ing_7da204695b__fp__local
question: 'Explain: Synchronous vs Asynchronous Replication — Availability | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 450
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:46-05:00'
sources: []
---

### From the fundamental problem

A distributed database must keep data **consistent** while staying **available** under failures.  
Replication solves this by copying data to many nodes, but the *timing* of those copies matters.

| Replication mode | How it works | Availability trade‑off |
|------------------|--------------|------------------------|
| **Synchronous** | A write is committed only after all replicas acknowledge receipt. | Guarantees that every replica has the latest data before the client sees success, but a failure or slow link forces the whole operation to stall. |
| **Asynchronous** | The primary accepts the write and returns immediately; replicas catch up later (usually via background log shipping). | Clients get low latency even if some replicas are down, yet a crash can cause loss of recent writes until they’re replayed.

### Why it *must* work that way

- **Consistency vs. Latency**: In synchronous mode the system enforces *strong consistency* by waiting for quorum. This is essentially an implementation of the **CAP theorem’s “C”** at the cost of higher latency.  
- **Fault tolerance**: Asynchronous replication embodies a probabilistic guarantee—writes are durable with probability \(1 - p_{\text{fail}}\) where \(p_{\text{fail}}\) is the chance that all replicas miss the update before crash.

### Deeper principle

Replication timing is an instance of **optimizing a trade‑off surface** between *time* (latency), *space* (network traffic), and *probability* (data loss). The optimal point depends on workload skew: read‑heavy systems lean asynchronous, write‑critical ones synchronous.

### Non‑obvious insight

The *choice of replication mode is itself a tunable parameter in the system’s **information‑theoretic capacity***. A well‑designed hybrid scheme—synchronous for critical records and asynchronous for bulk data—can achieve near‑optimal throughput while keeping the effective entropy (uncertainty about data state) low, thereby maximizing both availability and consistency without linear cost scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
