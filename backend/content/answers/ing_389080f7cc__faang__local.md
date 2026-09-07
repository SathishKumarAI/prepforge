---
qid: ing_389080f7cc__faang__local
question: 'Explain: DoorDash Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 523
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:47-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the kinds of algorithmic problems that a FAANG interviewer might pose around DoorDash’s tech stack—specifically routing, matching, and capacity‑planning questions. I’ll assume the interview focuses on *real‑time* logistics, not just theoretical graph theory.

**Approach**  
1. Identify core domains: **shortest path / vehicle routing**, **assignment/matching**, and **resource allocation**.  
2. For each domain, outline typical constraints (time windows, capacity, dynamic arrivals).  
3. Discuss standard algorithmic families that the interviewee should mention: Dijkstra/Contraction Hierarchies, k‑means clustering for zones, Hungarian/Bipartite matching, greedy heuristics, and linear programming relaxations.

**Depth**  
- *Routing*: “Given a driver’s current location and a list of pending orders, find the minimal‑time path that satisfies all time windows.” The expected solution is a variation of **Vehicle Routing Problem (VRP)** solved with a combination of Dijkstra for base distances + a local search / 2‑opt heuristic. Complexity: \(O(V \log V)\) per distance query; overall NP‑hard but tractable in practice with heuristics.  
- *Matching*: “Assign drivers to orders so that the total pickup delay is minimized.” This reduces to **bipartite weighted matching** (Hungarian algorithm, \(O(n^3)\)), or a greedy nearest‑driver approach for sub‑second latency.  
- *Capacity planning*: “Predict peak demand per city block and allocate idle drivers accordingly.” Use **time‑series forecasting** (ARIMA) + clustering; the interview may ask you to derive an online learning update rule.

**Edge Cases**  
- Sudden surge in orders → need fallback greedy strategy.  
- Driver cancellation → re‑run assignment with constraints.  
- Multi‑city logistics → hierarchical routing (macro‑route then micro‑route).  

**Optimize & Communicate**  
Explain trade‑offs: exact algorithms give optimality but are too slow; heuristics give speed but may miss better matches. Emphasize a hybrid pipeline: pre‑compute static graphs, use online Dijkstra for dynamic edges, and batch re‑optimization every few minutes. Conclude by noting that production systems also incorporate **A/B testing** to measure revenue impact of algorithmic tweaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
