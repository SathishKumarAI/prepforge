---
qid: vq_75e992f799__faang__local
question: Difference between broadcast and accumulators?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 482
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:17:25-05:00'
sources: []
---

**Clarify**

> *Question:* “What’s the difference between **broadcast variables** and **accumulators** in Spark?”  
> *Assumptions I’d confirm:*  
> - Working within a distributed cluster (Spark).  
> - Need to understand data flow, mutability, and fault‑tolerance.  

---

**Approach**

1. Define each construct.  
2. Highlight their purpose & lifecycle.  
3. Contrast usage patterns, visibility, and semantics.  
4. Summarize key trade‑offs.

---

**Depth**

| Feature | Broadcast Variable | Accumulator |
|---------|--------------------|-------------|
| **Purpose** | Read‑only data shared across all executors (e.g., lookup tables). | Global counters/aggregations updated by tasks. |
| **Mutability** | Immutable after creation; cannot be changed on workers. | Mutable, but only *additive* updates are allowed (no subtraction). |
| **Scope** | Accessible in every task; driver holds a single copy. | Driver receives final value after job completion. |
| **Serialization** | Serialized once and shipped to each executor. | Each task sends incremental values back to the driver. |
| **Fault tolerance** | If an executor dies, it re‑downloads the broadcast from the driver. | Lost updates are discarded; only the last successful update is retained. |
| **Typical use** | Caching reference data (e.g., dictionary, config). | Counting rows, summing metrics, tracking errors. |

---

**Edge Cases**

- *Broadcast:* If broadcast size > executor memory → OutOfMemoryError.  
- *Accumulator:* Non‑additive operations or mutable objects break determinism; results may be lost after task retries.

---

**Optimize & Communicate**

Explain that broadcasts reduce shuffling and network traffic, while accumulators provide a simple, fault‑tolerant way to aggregate metrics without shuffles. Emphasize choosing the right tool: use broadcasts for large, read‑only data; use accumulators only for idempotent, additive counters. Highlight that misuse (e.g., mutating accumulator contents) leads to nondeterministic behavior—critical in a production pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
