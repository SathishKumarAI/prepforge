---
qid: ing_2efab87b6b__faang__local
question: 'Explain: a hundred tokens per second is how — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 529
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:32:43-05:00'
sources: []
---

**Clarify**  
The question asks why Amazon claims “a hundred tokens per second” in the context of DynamoDB’s architecture as presented at re:Invent 2018. We need to explain what a *token* is, how it relates to throughput, and why 100 tokens/s is significant for DynamoDB’s design.

**Approach**  
1. Define token → logical unit of work (e.g., a partition key read/write).  
2. Show mapping: one token ≈ 1 MiB of data transferred or processed per second.  
3. Explain DynamoDB’s *partitioning* and *token‑based throttling* mechanism.  
4. Tie it to the hyper‑scale claim: each node can sustain ~100 tokens/s, enabling linear scaling.

**Depth**  

| Token | Meaning | Throughput |
|-------|---------|------------|
| **Read token** | A single read of 4 KB or less (strong) / 16 KB (eventual) | 1 MB/s per node |
| **Write token** | Single write ≤ 1 MiB (or 10 KiB for DynamoDB Streams) | 1 MB/s per node |

DynamoDB splits a table into *partitions*; each partition is backed by a *token bucket*. The bucket refills at ~100 tokens/second. When a client issues an operation, it consumes one token (or more if the payload exceeds the base size). If the bucket empties, the request is throttled. Thus, a node can handle roughly 100 independent operations per second before reaching its limit.

**Edge Cases**  
- *Burst traffic*: Token buckets allow short bursts up to ~10× the refill rate.  
- *Large payloads*: Operations > 1 MiB consume multiple tokens; could trigger throttling earlier.  
- *Hot partitions*: If all traffic hits one partition, it can become a bottleneck even if other nodes are idle.

**Optimize & Communicate**  
Explain that by designing each node to handle 100 tokens/s, Amazon ensures linear scalability: adding N nodes multiplies throughput by N with minimal coordination overhead. Clarify that this token abstraction simplifies client-side rate‑limiting and allows DynamoDB to guarantee predictable performance at petabyte scale. Use concise bullet points and a clear table to convey the math quickly—exactly what interviewers expect from a structured, depth‑focused answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
