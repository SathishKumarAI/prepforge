---
qid: ing_98285f3514__star__local
question: 'Explain: Minimum Spanning Trees: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 338
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:51-05:00'
sources: []
---

**Situation**  
In a senior capstone project, we were building a recommendation engine for an e‑commerce platform that needed to cluster similar products efficiently. The dataset had over 30 k items and 150 M pairwise similarity scores stored in a sparse matrix.

**Task**  
I had to reduce the graph’s complexity while preserving as much relational structure as possible, so the clustering algorithm would run within our 2‑hour nightly batch window. The goal was to generate a compact representation that still captured the strongest connections between items.

**Action**  
I implemented Kruskal’s algorithm in Rust for speed, using a union–find (disjoint set) structure with path compression and union by rank. I first converted similarity scores into edge weights (1 − similarity) and sorted them with an introsort routine from the `rand` crate to avoid worst‑case scenarios. While building the MST, I pruned edges that exceeded a threshold derived from the 95th percentile of weights to keep the tree sparse yet informative. After constructing the MST, I ran DBSCAN on its nodes, using the MST distances as a custom metric.

**Result**  
The resulting graph had only ~45 k edges (≈ 0.15% of all possible pairs), cutting memory usage from 12 GB to 1.2 GB and reducing clustering runtime from 3 h to under 50 min—meeting our deadline. I learned how MSTs can serve as a principled, scalable backbone for downstream machine‑learning pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
