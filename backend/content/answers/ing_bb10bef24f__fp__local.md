---
qid: ing_bb10bef24f__fp__local
question: 'Explain: CDC Approaches — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 444
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:28-05:00'
sources: []
---

**Why we need Change‑Data‑Capture in ML pipelines**

In any production ML system the *data source* is a live, evolving database.  
A model’s performance depends on the freshest representation of that data.  
If we only pull snapshots, we pay a large latency cost (minutes or hours) and
waste compute by reprocessing unchanged rows.

The fundamental problem is **efficiently propagating incremental state** from
the source to downstream stages while preserving *consistency* and *lineage*.  
From an information‑theoretic view, every update can be seen as a minimal
entropy change that must be encoded once and decoded downstream.  
Thus the system should:

1. **Detect changes** with O(1) overhead per row (e.g., log‐based CDC or triggers).  
2. **Order them deterministically** to maintain causal consistency (timestamp/sequence).  
3. **Transport them in a stream** that is back‑pressure aware, so downstream
   feature stores and training jobs can consume at their own pace.

This is essentially an *online optimization* problem: we want to minimize the
latency of a *cost function* combining update delay and compute overhead,
subject to correctness constraints. The optimal solution is a *push‑pull hybrid*
where the source pushes change logs, and each consumer pulls only what it needs
to stay within its SLA.

**Non‑obvious insight:**  
Many architectures treat CDC as a “data ingestion” step, but in ML pipelines it
acts like an *incremental gradient*. Each captured row can be seen as a small
update to the joint distribution of features and labels. By treating CDC logs
as stochastic gradients, we can directly feed them into online learning
algorithms (e.g., streaming embeddings), achieving near‑real‑time model drift
correction without full retraining.

In short, CDC is not just data replication; it’s the engine that turns a static
dataset into an evolving probability distribution, enabling truly responsive ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
