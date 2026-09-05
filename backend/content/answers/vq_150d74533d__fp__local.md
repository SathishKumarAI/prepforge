---
qid: vq_150d74533d__fp__local
question: what is the difference between spark context and spark session?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 452
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:02-05:00'
sources: []
---

### Why do we need *SparkContext* vs. *SparkSession*?

When Spark started, the core API was a **distributed engine** that needed two things:

1. A connection to the cluster manager (YARN, Mesos, Standalone) and a set of executors – this is what **`SparkContext`** does.
2. A high‑level, user‑facing interface that knows how to orchestrate SQL, streaming, MLlib, etc., on top of those executors.

`SparkContext` is the *low‑level plumbing*: it holds configuration, manages driver–executor communication, and exposes RDD operations. `SparkSession`, introduced in Spark 2.0, bundles a `SparkContext` with a **catalog**, a **SQL engine**, and a set of implicit encoders. It becomes the single entry point for all APIs.

#### Deeper principle

Think of it as **separation of concerns** in distributed computation:

- *Resource allocation* (the cluster manager’s job) ↔ `SparkContext`.
- *Task orchestration & data abstraction* (SQL, DataFrames, Datasets) ↔ `SparkSession`.

This mirrors the **producer‑consumer** pattern: `SparkContext` produces executors; `SparkSession` consumes them to run high‑level jobs.

#### Non‑obvious insight

A `SparkSession` *always* contains a `SparkContext`; you cannot have a session without one. However, you can create multiple sessions that share the same context (e.g., different catalog namespaces). This sharing is why `SparkSession` can be lightweight to construct—most of its work is just bookkeeping around an already‑established cluster connection.

In practice:

- Use **`SparkContext`** only for legacy RDD code or when you need fine‑grained control over the cluster.
- Use **`SparkSession`** for everything else; it gives you a unified API and hides the underlying context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
