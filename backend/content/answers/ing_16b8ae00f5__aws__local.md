---
qid: ing_16b8ae00f5__aws__local
question: 'Explain: Advanced Graphs (6 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 522
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:10-05:00'
sources: []
---

**Situation & Task**  
While preparing for a senior ML engineer role at AWS, I tackled the “Advanced Graphs (6 Problems)” set from Neetcode‑150 to prove my ability to translate complex graph theory into scalable ML pipelines.

**Action**  
1. **Problem 1 – Shortest Path in a Weighted DAG**: Implemented Kahn’s topological sort + DP; runtime O(V+E).  
2. **Problem 2 – Minimum Spanning Tree (Kruskal)**: Used union‑find with path compression; memory O(V).  
3. **Problem 3 – Strongly Connected Components (Tarjan)**: Linear time DFS stack, enabling cycle detection for feature‑selection graphs.  
4. **Problem 4 – Graph Coloring**: Greedy heuristic with adjacency list; used as a constraint solver for hyperparameter tuning groups.  
5. **Problem 5 – All‑Pairs Shortest Paths (Floyd–Warshall)**: Optimized with sparse matrix representation to keep O(V³) manageable for V≈10⁴.  
6. **Problem 6 – Eulerian Path**: Checked vertex degrees and performed Hierholzer’s algorithm; used to validate data lineage cycles in our ML pipeline.

I wrapped each solution in an AWS‑native microservice (Lambda + DynamoDB), exposing REST endpoints via API Gateway. For heavy‑weight jobs (Problems 2 & 5) I leveraged **AWS Batch** on Spot Instances, reducing cost by 40% vs on‑demand. I added CloudWatch metrics (`runtime`, `memory_used`) and alerts to monitor drift.

**Result**  
- Ended up with a reusable graph‑processing library that cut feature‑engineering time from 3 days → 4 hrs (≈90% speedup).  
- Cost per inference pipeline decreased by $0.05/exec, saving ~$12k/month on a production cluster of 50 models.  

**Learning & Ownership**  
I documented edge cases and failure modes in a JIRA ticketing system, enabling cross‑team reuse. The bar‑raiser’s cues—ownership (self‑packaged service), dive deep (complexity analysis), quantified impact (time/cost savings)—were met, positioning me as a go‑to expert for graph‑based ML workloads at AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
