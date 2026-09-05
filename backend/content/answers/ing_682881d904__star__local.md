---
qid: ing_682881d904__star__local
question: 'Explain: go back and look at the followings — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 341
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:50-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time collaborative spreadsheet app for internal analytics teams. The product had to support 5,000 concurrent users editing the same document while keeping latency below 100 ms.

**Task**  
I was tasked with designing the backend that would allow simultaneous edits without conflicts, ensure eventual consistency across all clients, and scale horizontally as user load grew.

**Action**  
I started by modeling the document state as a sequence of operations (insert, delete, update). To resolve concurrent edits I implemented an Operational Transformation (OT) engine: each client sends its operation to the server, which transforms it against any operations that have already been applied on that replica before broadcasting it back. For conflict resolution at the data‑layer I added a differential synchronization layer that periodically exchanges document diffs and applies CRDT‑style merges for non‑textual cells (e.g., pivot tables). The OT core was written in Go, using goroutines to process operation streams per document shard. I also introduced Redis Streams for durable queuing and used Kubernetes HPA to scale worker pods based on operation queue depth.

**Result**  
The system handled 4,500 concurrent editors with average round‑trip latency of 78 ms and no lost edits. We reduced merge conflicts by 92% compared to our previous naive broadcast approach. The exercise taught me how OT and differential sync complement each other in a high‑scale collaborative environment, and reinforced the importance of lightweight, stateless workers for elastic scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
