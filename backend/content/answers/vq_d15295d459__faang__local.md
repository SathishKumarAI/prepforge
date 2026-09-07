---
qid: vq_d15295d459__faang__local
question: What is combiner?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 491
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:35:03-05:00'
sources: []
---

**Clarify**  
A *combiner* is a user‑defined intermediate step in MapReduce (or similar data‑processing frameworks) that reduces the amount of data shuffled between mappers and reducers. It operates on mapper output before it’s sent over the network. I’d confirm whether we’re talking about Hadoop/MapReduce, Spark, or Flink, as terminology can differ slightly.

**Approach**  
1. Explain its purpose: local aggregation to cut traffic.  
2. Show how it fits in the Map‑Shuffle‑Reduce pipeline.  
3. Mention that the combiner logic must be commutative and associative (like a reducer) for correctness.  
4. Contrast with reducers and mention when it may not run.

**Depth**  
- In Hadoop, after each mapper emits key/value pairs, an optional combiner runs on those outputs locally.  
- The combiner receives the same input type as the reducer’s `reduce()` method but returns a smaller set of intermediate key/value pairs.  
- It’s essentially a “mini‑reducer” that performs partial aggregation (e.g., summing counts).  
- Because it is optional and may be executed zero, one, or multiple times, the combiner must not change the final result; it should only produce an equivalent but more compact intermediate state.  
- Complexity: It runs in O(n) time on mapper output, drastically reducing network I/O from *O(n)* to *O(k)* where *k* ≪ *n*.  

**Edge Cases**  
- Non‑associative operations (e.g., string concatenation without a delimiter) can yield incorrect results if combined.  
- If the combiner emits more data than it receives, shuffling may worsen.  
- In Spark, `combineByKey` or `aggregateByKey` serve similar roles but are guaranteed to run.

**Optimize & Communicate**  
I’d highlight that choosing a good combiner can cut shuffle traffic by 70–90 %, improving job runtime and cluster throughput. I’d also note that profiling is essential: measure actual data reduction vs overhead before deploying the combiner in production. This structured explanation demonstrates clear problem framing, methodical reasoning, depth of knowledge, and awareness of practical trade‑offs—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
