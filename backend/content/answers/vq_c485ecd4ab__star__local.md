---
qid: vq_c485ecd4ab__star__local
question: How to Solve Algorithms Problems?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 353
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:37-05:00'
sources: []
---

**Situation:**  
During my senior year I had to complete a capstone project where the team built an in‑memory graph analytics engine. The biggest hurdle was optimizing the shortest‑path query; our prototype ran in ~8 seconds on a 10,000‑node graph, far slower than the industry benchmark of under 1 second.

**Task:**  
I needed to redesign the path‑finding routine so it met the performance target while keeping memory usage below 512 MB and maintaining accuracy for directed weighted edges.

**Action:**  
I started by profiling with `perf` and identified that Dijkstra’s algorithm was re‑scanning adjacency lists excessively. I refactored the graph representation to a compressed sparse row (CSR) format, reducing cache misses. Then I replaced Dijkstra with a bidirectional A* search, implementing a heuristic based on pre‑computed landmark distances stored in a small lookup table. I wrote unit tests for each component and used `gdb` to validate correctness. Finally, I benchmarked against the original implementation using Google Benchmark, iterating until the run time dropped to 0.9 seconds.

**Result:**  
The new algorithm achieved a 90% speedup (8 s → 0.9 s) while keeping memory usage at 450 MB. The project was accepted by our university’s tech showcase and later incorporated into an open‑source graph library. I learned that systematic profiling, data structure choice, and heuristic tuning are key to solving algorithmic bottlenecks effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
