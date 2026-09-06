---
qid: ing_f9500c23d9__fp__local
question: 'Explain: Using time to solve consensus — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 364
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:26-05:00'
sources: []
---

**Using time to solve consensus – the essence of distributed locking**

The *core problem* is that several nodes must agree on a single “lock” value (e.g., who owns the resource) without a trusted coordinator. In an asynchronous network, messages can be delayed arbitrarily; hence the *FLP impossibility* tells us deterministic agreement is impossible if even one node may fail.

Kleppmann’s insight is to **break symmetry by exploiting physical time**. Each candidate attaches a monotonically increasing timestamp (derived from a loosely synchronized clock) to its proposal. The algorithm guarantees that, after a bounded delay *Δ*, all honest nodes will have seen the same set of proposals and will therefore select the one with the smallest timestamp as the winner.

Why this works:  
1. **Ordering guarantee** – timestamps give a total order over proposals; no two distinct proposals can be considered “earlier” by different nodes.  
2. **Safety via bounded delay** – if every honest node receives all messages within *Δ*, they will see identical histories, so the same lock is chosen.  
3. **Liveness through clock bounds** – as long as clocks advance at least one tick per real second and network delays are finite, the system eventually converges.

A non‑obvious insight: *time does not need to be perfectly synchronized*. It only needs a known upper bound on skew; even with a 100 ms drift, the algorithm remains correct. Thus, distributed locking can be implemented efficiently without heavy coordination or consensus primitives that require multiple rounds of message exchanges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
