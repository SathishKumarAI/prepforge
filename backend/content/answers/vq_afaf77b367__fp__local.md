---
qid: vq_afaf77b367__fp__local
question: State the reason why we can't perform aggregation in mapper? why do we need
  reducer for this?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 398
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:35-05:00'
sources: []
---

**Why a mapper can’t finish an aggregation**

A MapReduce job splits the input into *splits* processed in parallel by mappers.  
Each mapper sees only its split, so it can compute a partial result (e.g., local sum) but never knows whether another mapper will emit values for the same key.  
Without a global view, a mapper cannot decide if its partial result is final: the same key may appear in many splits, and the *sum of all occurrences* requires seeing *all* those values.

**The reducer’s role**

Reducers receive data that has been **shuffled and sorted** by key.  
During shuffle, Hadoop guarantees that *every value for a given key ends up on the same reducer*, and that within one reducer the values are contiguous in key order.  
This guarantees:

1. **Completeness** – all occurrences of a key are available before aggregation starts.
2. **Determinism** – the reducer can apply an associative operation (sum, max, etc.) exactly once per key.

The deeper principle is *information locality*.  Aggregation is a global function; it needs to collect all relevant data into one place to compute the result accurately and efficiently.  
A non‑obvious insight: even though addition is associative and commutative, the shuffle step is essential because mappers cannot “communicate” their partial sums in real time—distributed systems require a deterministic rendezvous point (the reducer) to reconcile all pieces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
