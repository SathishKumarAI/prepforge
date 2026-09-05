---
qid: ing_ea4b55382d__star__local
question: 'Explain: Graph (8 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 481
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:58-05:00'
sources: []
---

**Situation** – I was preparing for a senior ML engineer interview at a large cloud‑provider. The interview panel had a “Blind 75” graph section, and my notes highlighted eight core problems (e.g., *Number of Islands*, *Course Schedule II*, *Minimum Spanning Tree*). My background was in supervised learning, so graphs felt foreign.

**Task** – I needed to master those eight problems, write clean Python/Java code that ran under 0.5 s on a typical test set, and be ready to explain my design choices during the interview.

**Action** – Over two weeks I built a “graph‑toolkit” project:  
1. Implemented DFS/BFS with iterative stacks for traversal problems.  
2. Added Union‑Find with path compression for *Connected Components* and *Friend Circles*.  
3. Wrote Dijkstra’s algorithm using a binary heap for the *Cheapest Flights* problem, then replaced it with Bellman–Ford to handle negative edges in *Shortest Path in DAG*.  
4. Created a generic `Graph` class that stored adjacency lists, weights, and metadata so I could swap algorithms without rewriting tests.  
5. Benchmarked each solution against the official test suite, measured runtime and memory, and tuned recursion depth and data‑structure choices.

**Result** – In the interview I solved all eight problems in under 10 minutes total, with runtimes 20–30 % faster than my earlier drafts. The hiring manager praised my systematic approach, and I received a job offer within two weeks. I learned that building a reusable graph toolkit not only speeds up coding but also deepens conceptual understanding of traversal, union‑find, and shortest‑path algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
