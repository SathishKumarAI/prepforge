---
qid: ing_e763d7bd47__star__local
question: 'Explain: Tree & Graph Traversals (DFS/BFS) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 320
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:21-05:00'
sources: []
---

**Situation:** At my previous company we were building a recommendation engine that had to process user interaction graphs in real time. Our existing pipeline could only handle flat lists, so the latency for generating personalized suggestions was over 2 seconds—too slow for our mobile app.

**Task:** I needed to redesign the data ingestion layer so it could traverse the dynamic user‑interaction graph efficiently, extract subgraphs around each active user, and feed those into a downstream ML model without exceeding our 500 ms latency budget.

**Action:** I implemented a hybrid traversal strategy. For breadth‑first search (BFS) we used a queue with Redis Streams to limit memory usage; for depth‑first search (DFS) we leveraged Python generators to lazily walk the graph and avoid stack overflows on deep trees. We capped recursion at depth 5, pruned low‑weight edges, and stored intermediate results in an in‑memory cache keyed by user ID. The system was built with Go for concurrency, using goroutines to run multiple traversals in parallel, and we used a lightweight graph library (Cytoscape.js) for visualization during debugging.

**Result:** Latency dropped from 2 seconds to under 350 ms per query, improving the recommendation click‑through rate by 18%. I learned that choosing the right traversal—DFS for deep feature extraction, BFS for breadth‑wide context—and combining it with language‑specific concurrency primitives can drastically reduce latency in real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
