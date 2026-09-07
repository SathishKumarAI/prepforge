---
qid: ing_2f561ca59a__faang__local
question: 'Explain: Common Mistakes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 452
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:41-05:00'
sources: []
---

**Clarify**  
You’re asked to list common pitfalls in ML projects that stem from *indexing errors* and how they affect system design. Assume we’re dealing with tabular data pipelines, feature engineering, and model deployment.

**Approach**  
1. Enumerate typical indexing mistakes (off‑by‑one, misaligned joins, wrong axis).  
2. Explain why each breaks downstream components (feature scaling, missing‑value handling, inference latency).  
3. Suggest design patterns that guard against them: immutable dataframes, schema validation, and explicit index management.

**Depth**  
- **Off‑by‑One / Slice Errors** – lead to truncated training sets; model sees fewer samples → underfitting, stale predictions.  
- **Misaligned Joins** – duplicate or drop rows when merging user logs with clickstream; feature leakage or missing values.  
- **Incorrect Axis Operations** – applying `mean()` along wrong axis produces NaNs that propagate through pipelines.  
- **Re‑indexing After Filtering** – resets index unintentionally, causing mis‑match in later joins and shuffling during batching.  
- **Mutable Indexes in Distributed Systems** – Spark’s partitioned RDDs lose global order; downstream aggregations become inconsistent.

Design fixes:  
* Use `pd.Index` objects that are immutable once set.  
* Apply schema enforcement libraries (e.g., `pydantic`, `marshmallow`) before training.  
* In distributed settings, broadcast a canonical index or use partition keys to preserve alignment.  
* Log index integrity checks after every join/transform.

**Edge Cases**  
- Sparse matrices with implicit indices → accidental zero‑padding.  
- Time‑series data where resampling changes frequency but not index names.  
- Multi‑index scenarios in hierarchical feature sets.

**Optimize & Communicate**  
Explain that a robust indexing strategy reduces debugging time from hours to minutes, keeps model drift low, and eases rollback of feature updates. Highlight trade‑offs: stricter indices add overhead in data ingestion, but the payoff is higher reliability in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
