---
qid: ing_2de17f060b__star__local
question: 'Explain: Tree Search (MCTS) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 385
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:15-05:00'
sources: []
---

**Situation**  
When I joined a robotics lab, we were building an autonomous drone that had to navigate through dynamic urban canyons. The simulation showed that our reactive controller got stuck in local minima and the flight time exceeded the 30‑second battery limit by 40 %.  

**Task**  
I was tasked with designing a planning module that could break down the navigation task into sub‑goals, evaluate many possible action sequences quickly, and still respect real‑time constraints.  

**Action**  
I implemented Monte Carlo Tree Search (MCTS) for online planning. First, I defined a state space of 3‑D position + velocity and a set of discrete motion primitives. For each node, the expansion phase sampled feasible primitive actions; the simulation rollouts used a lightweight physics model to estimate collision risk and time to goal. To handle decomposition, I introduced hierarchical MCTS: an upper‑level tree selected waypoints (macro actions) while lower‑level trees refined motion primitives around each waypoint. I tuned the exploration constant \(C\) to 1.5 and capped rollouts at 200 steps to keep latency under 50 ms. Parallelizing rollout threads on a GPU accelerated evaluation by 4×, enabling the drone to plan continuously in simulation.  

**Result**  
The new planner cut average flight time from 42 s to 28 s—over 30 % faster—and reduced collision incidents by 85 %. It also allowed us to integrate higher‑level mission objectives (e.g., “survey area A before B”) without sacrificing real‑time performance. I learned that careful abstraction in MCTS can turn an otherwise combinatorial planning problem into a tractable, responsive system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
