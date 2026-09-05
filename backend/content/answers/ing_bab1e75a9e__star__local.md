---
qid: ing_bab1e75a9e__star__local
question: 'Q: Why is "Plan Revision" often more expensive than "Plan Generation"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 316
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:26-05:00'
sources: []
---

**Situation**  
During a last‑quarter sprint for our autonomous warehouse robot, we had built an optimal route planner that generated efficient paths in under 50 ms. Midway through testing, we discovered the dynamic obstacle model was outdated; the real‑time sensor data showed new forklift patterns that made many of our generated plans infeasible.

**Task**  
I needed to update the planner so it could adapt on‑the‑fly without restarting the whole system or re‑training from scratch, all while keeping latency below 200 ms for safety compliance.

**Action**  
Instead of regenerating a fresh plan tree (which would require recomputing heuristics and re‑exploring the entire state space), I implemented an incremental repair algorithm. It took the existing search graph, pruned only the affected nodes, updated edge costs with the new obstacle weights, and re‑expanded from the nearest viable frontier node. I used a lightweight priority queue (Fibonacci heap) to keep insertion overhead low, and leveraged GPU kernels for parallel distance recalculations.

**Result**  
The revision cut computation time by 85 % compared to full plan generation—going from 120 ms down to 18 ms on average. We avoided a costly system restart, met the safety deadline, and learned that targeted graph updates are far cheaper than wholesale regeneration in dynamic environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
