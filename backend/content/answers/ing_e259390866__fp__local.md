---
qid: ing_e259390866__fp__local
question: 'Explain: A Free Trial That Lets You Build Big! — What is TPS, what is QPS,
  and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 384
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:01:12-05:00'
sources: []
---

**TPS vs. QPS – a first‑principles view**

At its core, both *Transactions Per Second* (TPS) and *Queries Per Second* (QPS) measure throughput: how many atomic operations a system can finish in one second.  
The difference lies in the **semantics of “operation.”**  

| Aspect | TPS | QPS |
|--------|-----|-----|
| **Atomic unit** | A *transaction*: a logical, often multi‑step change that must be committed atomically (e.g., “transfer $100 from Alice to Bob”). | A single *query* or read request (e.g., “SELECT … WHERE user_id = 42”). |
| **Consistency requirements** | Must honor ACID guarantees; rollback on failure. | Usually only requires a consistent snapshot of the data at query time. |
| **Resource profile** | Heavier: locks, write‑ahead logs, network round‑trips for commit/abort. | Lighter: read‑only paths, cache hits, fewer coordination steps. |

From an optimization standpoint, TPS is bounded by *write‑back latency* and *consistency overhead*, whereas QPS is largely limited by *read bandwidth* and *index lookup speed*.  

**Non‑obvious insight:** A system that advertises a “free trial that lets you build big” often scales QPS much higher than TPS. Users can freely spike read traffic (e.g., dashboards) without incurring the cost of writing, but each write still pays the full transaction overhead. Thus, when planning capacity, treat TPS as the *bottleneck* metric and QPS as a secondary, more elastic resource.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
