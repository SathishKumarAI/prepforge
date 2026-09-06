---
qid: ing_e2ebae26bd__fp__local
question: 'Explain: Announcing ProxySQL 3.0.10, 3.1.10, and 4.0.10'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 422
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:09-05:00'
sources: []
---

**Why the new ProxySQL releases matter**

ProxySQL sits between an application and a MySQL cluster, translating raw SQL into traffic‑shaping rules that keep your database responsive. Every patch is a small optimisation of that translation layer: it reduces latency, fixes edge‑case bugs, or adds features that let you shape traffic more precisely.

**What changed in 3.x / 4.x**

| Version | Core improvement | Why it works |
|---------|------------------|--------------|
| **3.0.10** | Minor memory‑leak fix in the query cache | The cache was holding onto stale connection objects; freeing them prevents gradual slowdown under heavy load. |
| **3.1.10** | Enhanced SSL termination logic for multi‑certificate setups | By decoupling certificate selection from the session context, ProxySQL now avoids unnecessary renegotiations—lowering round‑trip times on TLS‑heavy workloads. |
| **4.0.10** | New `RO` (read‑only) query routing rules that honour table hints | The engine now parses `/*RO*/` comments and routes those reads to replicas even if the query is sent to a master endpoint, giving you true read‑scale without code changes. |

**Non‑obvious insight**

The 4.x change demonstrates *contextual parsing* as a general optimisation principle: by letting ProxySQL understand comment hints, it can route traffic at compile time rather than runtime, saving CPU cycles that would otherwise be spent evaluating the same query on every replica.

In short, each patch tightens the feedback loop between client intent and backend execution—exactly what a production‑grade proxy must do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
