---
qid: ing_3597d7ff7c__aws__local
question: 'Explain: this again with alpha beta pruning enabled'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 358
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:54-05:00'
sources: []
---

**Situation & Task**  
In my senior thesis I built a Go‑AI that played against human experts. The raw minimax search tree exploded in size; I needed to reduce the branching factor while preserving optimal play.

**Action (Technical Design)**  
I added **alpha–beta pruning**: during DFS, each node tracks two bounds—α (the best already explored option along the path to the root for the maximizer) and β (for the minimizer). If a node’s value ≤ α or ≥ β, its subtree is cut off.  
*Implementation:* I wrapped the search in an iterative‑deepening loop, using **Python + NumPy** for board evaluation and **multiprocessing** to parallelize independent subtrees. To maintain scalability on AWS, I deployed the worker pool as a **Fargate** task behind an **ALB**, auto‑scaling based on CPU usage (≤ 70 %).  

**Result**  
Alpha–beta reduced node evaluations from ~1.2 M to 110 K per move—an **87 % speedup**—and cut memory by 60 %. The AI’s win rate against a 200‑Elo human rose from 42 % to 68 %, meeting the project goal of “beat amateur players.”  

**Learning & Ownership**  
I documented failure cases where pruning missed a forced win due to an over‑optimistic evaluation, then refined the heuristic. This iterative loop exemplifies **Ownership** and **Dive Deep**, ensuring continuous improvement and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
