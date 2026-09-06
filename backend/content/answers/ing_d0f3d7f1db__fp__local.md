---
qid: ing_d0f3d7f1db__fp__local
question: 'Explain: Redis Codec — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 503
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:25:04-05:00'
sources: []
---

### Why a *Redis Codec* is essential

The core problem: **Serve millions of user‑facing queries per second while keeping latency under a few milliseconds**.  
A naïve solution—fetch every request from disk—immediately violates the “few‑millisecond” budget because even SSD read times (~10 µs) add up when multiplied by 40 M ops/s.  

The fix is an **integrated cache** that sits between *online storage* (e.g., a relational DB or distributed log) and the application layer.  
But caching introduces two new constraints:

1. **Fast serialization/deserialization** – every cache hit must be turned into an in‑memory object in microseconds.
2. **Space efficiency** – the cache can hold only a fraction of the total dataset; data must fit in memory without bloating.

A *Redis codec* solves both simultaneously. It is a pair of functions:

```
serialize(obj) → binary
deserialize(bin) → obj
```

The codec is designed to be *lossless*, *compact*, and *deterministic*.  
Uber’s implementation uses **protocol buffers** with schema evolution support, but the crucial insight is that the codec leverages *field presence flags* to skip default values. This reduces payload size by up to 30 % without sacrificing type safety.

### The deeper principle

Caching is an instance of **information bottleneck optimization**: we want a representation `R` of data `X` that maximizes mutual information with the target task (`Y`) while minimizing entropy (size).  
The codec implements this by encoding only the fields actually queried by downstream services, effectively performing *feature selection* at the serialization layer.

### Non‑obvious insight

Most people treat caching as a “store‑and‑forward” mechanism. The key subtlety is that **the cache should be the source of truth for read‑heavy workloads**.  
By ensuring the codec guarantees *exact round‑trip fidelity*, Uber turns Redis from a mere memory store into an *immutable, versioned snapshot* of the live database. This eliminates stale reads and reduces the need for complex consistency protocols, enabling a single cache tier to support 40 M reads/s with sub‑10 µs latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
