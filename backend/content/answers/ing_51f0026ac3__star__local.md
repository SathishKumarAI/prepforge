---
qid: ing_51f0026ac3__star__local
question: 'Explain: Disjoint Sets: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:17-05:00'
sources: []
---

**Situation**  
During a semester-long project in CS61B, my team had to process a massive graph of social connections (≈1 M nodes, 5 M edges). The goal was to quickly answer queries like “Are users X and Y part of the same community?” while keeping memory usage under 2 GB.

**Task**  
I needed to implement an efficient data structure that could merge groups and test connectivity in near‑constant time, even as new friendships were added incrementally.

**Action**  
I chose a disjoint set (union‑find) structure. Each node stored a parent pointer and a rank for union by rank; I also implemented path compression during `find`. In Python, this became two lists (`parent`, `rank`) of length 1 M. When processing an edge, I called `union(u, v)` which first performed `find` on both nodes, then linked the lower‑rank root to the higher one, updating ranks as needed. For queries, a single `find` check sufficed. I profiled the implementation and found that even with 5 M union operations, runtime stayed below 12 s, and memory footprint was ~80 MB.

**Result**  
The disjoint set approach reduced query time from O(N) (naïve adjacency checks) to almost O(1), allowing real‑time interaction in the app. I learned that careful choice of data structures—union by rank + path compression—can turn a seemingly intractable problem into a practical solution, and that profiling early reveals hidden bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
