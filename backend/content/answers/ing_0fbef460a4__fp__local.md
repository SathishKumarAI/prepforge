---
qid: ing_0fbef460a4__fp__local
question: 'Explain: So the next use case and quickly — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 466
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:00-05:00'
sources: []
---

**Why the “next‑use‑case” rule matters**

In a system‑design interview you’re not asked *to build* a product; you’re asked to show that you can **anticipate future data flows** and keep them efficient.  
If you start by modeling only what the client currently requests, every new feature forces a rewrite: indexes disappear, join paths explode, or you end up with “denormalized‑but‑slow” tables.  

The next‑use‑case rule says: *look one step ahead.* When you design an entity, ask yourself which additional query will likely hit it in the next 1–2 months. If you can pre‑compute that path (e.g., a materialized view or a secondary key), you trade a tiny amount of write overhead for massive read gains later.

**Concrete tips**

| Tip | Why it works | Deeper principle |
|-----|--------------|------------------|
| **Denormalize only when the next query is predictable** | Avoids unnecessary joins that hurt latency. | *Information‑theoretic*: keep data close to where it’s accessed. |
| **Add a “created_at” + “last_updated” index on every table** | Enables fast range scans for analytics or archiving. | *Geometric locality*: keeps recent rows physically near each other. |
| **Keep read replicas for read‑heavy tables** | Distributes load without locking writes. | *Probabilistic consistency*: eventual reads are acceptable in many services. |
| **Use a key‑value overlay for session data** | Eliminates joins entirely for transient state. | *Optimization*: separate concerns → lower dimensionality. |

**Non‑obvious insight**

Most candidates forget that **write amplification is cheap if you batch it**. By queuing writes to denormalized tables and flushing them in bulk, you keep the write path lean while still satisfying the next‑use‑case rule. It’s a subtle balance between *write cost* and *read latency*, grounded in the trade‑offs of distributed systems theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
