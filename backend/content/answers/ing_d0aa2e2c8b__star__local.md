---
qid: ing_d0aa2e2c8b__star__local
question: 'Explain: Graph Algorithms (Shortest Paths with Edge Weights):'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:44-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, the fraud‑detection team needed to rank merchants by how “far” they were from high‑risk clusters in our transaction network. The graph had thousands of nodes and weighted edges representing average transaction amounts.

**Task:**  
I was asked to build an efficient algorithm that could compute the shortest path distances from every merchant to a set of flagged accounts, then output a risk score for each node within 10 seconds on a standard laptop.

**Action:**  
I chose Dijkstra’s algorithm with a binary min‑heap priority queue (Python’s `heapq`) because all edge weights were positive. I pre‑computed an adjacency list and stored distances in a dictionary. To speed up the multi‑source run, I seeded the heap with all flagged nodes at distance zero and ran a single pass. I also added early‑exit pruning: once a node’s distance exceeded a risk threshold, it was removed from further consideration. The implementation took advantage of NumPy arrays for weight lookups and used lazy updates to keep memory usage low.

**Result:**  
The solution processed 30 k nodes and 120 k edges in 7.2 seconds, a 40% improvement over the baseline. The risk scores helped the team flag an additional 12% of fraudulent merchants that had slipped through previous heuristics, saving roughly $350K annually. I learned how algorithmic choice and data structure tuning can dramatically impact real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
