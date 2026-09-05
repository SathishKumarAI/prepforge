---
qid: ing_8db733443b__star__local
question: 'Explain: Static (Plan-and-Solve) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:11-05:00'
sources: []
---

**Situation:**  
At my last company we were building an autonomous warehouse robot fleet. The logistics team needed a way to schedule dozens of robots for pick‑and‑place tasks while guaranteeing no collisions and meeting tight delivery windows.

**Task:**  
I was tasked with designing a deterministic planner that could generate optimal routes and task assignments in advance, then hand them off to the on‑board controllers without further online computation.

**Action:**  
I chose a static plan-and-solve approach using a mixed‑integer linear program (MILP) formulated in Gurobi. The model encoded robot start positions, item locations, time windows, and collision constraints as binary decision variables. I decomposed the problem into two stages: first, a high‑level task allocation phase that assigned items to robots; second, a path‑generation phase that produced shortest‑path schedules respecting kinematic limits. To keep runtimes under 30 s for 100 robots, I pre‑computed distance matrices and used symmetry breaking constraints. After solving, the planner output a set of time‑stamped waypoints that the robots followed using a simple open‑loop controller.

**Result:**  
The static schedule reduced on‑the‑fly planning overhead by 95%, cut average task completion time from 12 min to 7 min, and eliminated runtime crashes during peak periods. I learned that careful decomposition and constraint pruning are key when scaling MILP planners for real‑time robotics deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
