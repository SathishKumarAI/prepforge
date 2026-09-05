---
qid: ing_3fbf1a39c2__fp__local
question: 'Explain: How Sharding Works — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 445
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:19:50-05:00'
sources: []
---

**Why sharding is inevitable**

A relational store that keeps *all* rows of a table on one machine can only grow until the single‑node I/O, CPU, and memory limits are hit.  
Let \(N\) be the number of records, \(B\) the average row size, and \(S\) the storage capacity per node. The raw requirement is

\[
N \times B \leq S .
\]

When this inequality fails we have a *capacity constraint*.  The only way to satisfy it without discarding data is to split the table into disjoint partitions that each fit on a node—*sharding*.

**How sharding satisfies the capacity equation**

Choose a key \(k\) (user id, order id, etc.) and a hash function \(h(k)\).  
Define shards as

\[
S_i = \{\, r : h(r.k) = i \,\}, \quad i=0,\dots,m-1 .
\]

Now each shard satisfies

\[
|S_i|\times B \leq S/m ,
\]

so the capacity constraint holds automatically.  The hash guarantees *load balance* in expectation; the key‑based partition preserves locality for range queries.

**Deeper principle: information‑theoretic compression**

Sharding is equivalent to a lossless encoding of row addresses:  
\(h(k)\) maps the \(N\)-dimensional address space into an \(m\)-symbol code.  The mapping must be *bijective* within each shard to avoid collisions—exactly what perfect hashing achieves.

**Non‑obvious insight**

Most people treat sharding as a purely horizontal split, but it also changes *query semantics*.  
A join that was once local becomes distributed; the cost now scales with the *communication entropy* between shards.  Designing schemas with low cross‑shard cardinality can reduce this entropy dramatically—an optimization that is often overlooked until production traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
