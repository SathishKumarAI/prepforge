---
qid: ing_1389e0544f__fp__local
question: When should you split an agent into sub-agents, and what do you pass between
  them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 446
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:01-05:00'
sources: []
---

When a problem can be expressed as *sequential decision‑making under uncertainty*, the value of an agent is the expected sum of future rewards given its policy π.  
If we decompose this objective into two nested expectations,  
\(V(s)=\mathbb{E}_{a\sim \pi(\cdot|s)}[\,r(s,a)+\gamma\,\mathbb{E}_{s'\sim P(\cdot|s,a)}[V(s')]]\),  
we see that the *outer* policy only needs to know a compressed representation of the future value function.  

**When to split**  
1. **Modular knowledge** – If two sub‑tasks have disjoint feature sets or operate on different time scales, learning them independently reduces sample complexity (each sub‑agent solves a lower‑dimensional MDP).  
2. **Hierarchical structure** – When high‑level actions set goals for low‑level controllers, the high‑level policy can treat each sub‑agent as an “oracle” that guarantees reaching its goal with some cost estimate.  
3. **Non‑stationarity** – If part of the environment changes slowly (e.g., a physics engine), keep it in one sub‑agent; fast dynamics go elsewhere.

**What to pass**  
- **State embeddings**: a low‑dimensional vector summarizing relevant history, preserving the Markov property for each sub‑agent.  
- **Goal specifications or reward shaping signals**: high‑level goals that translate into constraints for lower agents.  
- **Uncertainty estimates** (e.g., variance of value predictions) so that higher layers can decide whether to rely on a sub‑agent’s plan.

*Non‑obvious insight*: passing *uncertainty*, not just mean values, allows the hierarchy to self‑correct—if a low‑level agent is uncertain about a trajectory, the high level can re‑plan or request additional exploration. This transforms a purely deterministic cascade into an adaptive, information‑efficient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
