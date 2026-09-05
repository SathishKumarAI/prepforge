---
qid: ing_528fd91bf2__star__local
question: 'Explain: B-Tree — Database-Internals/DataStructures/BTree.md at main \u00b7
  Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 350
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:22-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the indexing layer for a high‑traffic e‑commerce catalog that was written in Go and used PostgreSQL under the hood. The existing B‑tree indexes were causing query latencies to spike during flash sales, pushing our SLA from 200 ms to over 1 s.

**Task:**  
I needed to implement a custom, memory‑efficient B‑tree structure that could handle millions of product records while keeping read latency under 300 ms and write throughput above 5k ops/s.

**Action:**  
Using Go’s `unsafe` package I built a lock‑free in‑memory B‑tree where each node was a contiguous byte slice. I leveraged the standard B‑tree algorithm: root split on overflow, leaf nodes holding key–value pairs, and fan‑out tuned to 64 children per internal node for cache friendliness. For persistence I serialized nodes with protobuf and wrote them to an append‑only log, replaying on restart. I added a background compactor that merged orphaned pages without blocking readers, using atomic pointers for safe publication.

**Result:**  
The new index cut query latency from 950 ms to 180 ms during peak load and increased write throughput from 1.2k ops/s to 6.8k ops/s. The system now reliably meets our 99.9% SLA even under traffic spikes, and I learned how careful node layout and lock‑free designs can dramatically improve database internals performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
