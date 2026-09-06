---
qid: ing_68fc47068e__fp__local
question: 'Explain: Library APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 370
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:41-05:00'
sources: []
---

### Why a Machine‑Learning Library Needs an API

At its core, a ML library is a **black box** that maps input data to predictions or learned parameters.  
To use this black box in real systems you must give it *what* to do and *how* to get the results. That contract is the **Application Programming Interface (API)**.

1. **Problem solved** – It turns an opaque, high‑performance implementation into a set of callable primitives that other software can invoke without knowing internals.  
2. **Why it must work this way** – The API exposes *stateless* functions or objects with well‑defined inputs/outputs. Statelessness guarantees referential transparency: the same call always yields the same result, enabling caching, parallelism, and reproducibility—critical for distributed training and inference pipelines.  
3. **Deeper principle** – The API is an instance of a *functor* in category theory: it maps objects (data structures) to other objects (model states or predictions) while preserving composition. This composability lets developers build complex workflows by chaining simple, well‑typed operations.  
4. **Non‑obvious insight** – Many libraries hide their internal tensor shapes behind the API, but exposing a *shape contract* (e.g., `Tensor(shape=[batch, seq_len])`) turns the API into a static type system for data flow, catching dimension mismatches at call time rather than during runtime errors.  

In short, an ML library’s API is the typed, stateless glue that converts mathematical abstractions into reliable, composable software components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
