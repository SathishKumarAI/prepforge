---
qid: ing_cd657d8e40__fp__local
question: 'Explain: Agency Levels — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 361
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:11-05:00'
sources: []
---

### Agency Levels – A First‑Principles View

The **fundamental problem** is: *how can a system act in an environment while staying true to human intentions?*  
An agent that simply follows hard‑coded rules cannot adapt; one that learns arbitrarily may pursue unintended goals. The solution is to endow the system with **multiple agency layers**, each responsible for a distinct aspect of decision making.

1. **Low‑level actuators** – execute primitive motor commands derived from a *policy* \(π(a|s)\).  
2. **Mid‑level planners** – generate temporally extended actions by solving an optimization problem over future states, effectively performing “model‑based planning.”  
3. **High‑level supervisors** – monitor the overall trajectory against a *utility function* \(U(s,a)\) that encodes user values and constraints.

Why this hierarchy? It mirrors the structure of **convex optimization with hierarchical constraints**: the low level solves a constrained subproblem (feasible actions), the mid level optimizes over those solutions, and the top level imposes global consistency. This decomposition guarantees *modular safety*: each layer can be verified independently, yet the composition remains sound.

A non‑obvious insight is that **agency levels act as implicit regularizers** on learning. By restricting low‑level actions to a physically realizable set, we reduce the hypothesis space of the policy network, thereby improving sample efficiency and robustness—something most people overlook when discussing hierarchical RL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
