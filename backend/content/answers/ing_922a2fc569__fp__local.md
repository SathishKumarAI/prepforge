---
qid: ing_922a2fc569__fp__local
question: 'Explain: Read Replica vs Cache — Readreplicavscache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 402
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:10-05:00'
sources: []
---

**Read‑Replica vs. Cache: a principled comparison**

At its core, both techniques answer the same query‑efficiency problem: *how to reduce latency for read‑heavy workloads without sacrificing consistency*.  
A **read replica** is a *partial copy* of the primary database that stays in sync via asynchronous replication. It satisfies the *information‑theoretic requirement* that every read must be correct with respect to the current data model—each row exists and its relations are preserved. Because it runs the same query engine, the replica automatically handles joins, aggregates, and transactional guarantees. The cost is the *latency of eventual consistency*: a write propagates at replication speed (often seconds), so stale reads are possible.

A **cache** is an *approximation* that stores only the most recent results of expensive queries or key‑value pairs. It exploits *information compression*: many reads target the same data, so caching reduces redundant computation. However, caches must be invalidated or refreshed to maintain correctness; otherwise they violate the consistency constraint. Their benefit lies in lower latency (in‑memory access) and reduced load on the primary.

**Non‑obvious insight:**  
A cache can *simulate* a read replica if it holds full table snapshots and updates them transactionally, but that defeats its purpose of reducing compute cost. Conversely, a read replica can act as a cache for write‑heavy systems by serving reads while writes continue locally; the key is to expose a *read‑only endpoint* that guarantees freshness up to replication lag.

In short: replicas trade *consistency* for *redundant computation*, caches trade *completeness* for *speed*. Choosing between them hinges on whether you need exact data or just quick, approximate answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
