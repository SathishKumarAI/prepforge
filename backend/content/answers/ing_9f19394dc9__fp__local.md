---
qid: ing_9f19394dc9__fp__local
question: 'Explain: Q12: Explain the ReAct pattern — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 401
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:43:36-05:00'
sources: []
---

**ReAct (Reason‑and‑Act)**  
At its core, ReAct treats an LLM as a *probabilistic planner* that alternates between two inference modes:

1. **Reason** – the model produces a chain of thoughts, i.e., a probabilistic hypothesis about how to solve the current subproblem.  
2. **Act** – it selects an action (e.g., calling an API, executing code, or generating a final answer) and then observes its outcome.

Why this alternation?  
In decision‑theoretic terms, each *thought* reduces uncertainty about which action maximizes expected reward. By iteratively updating beliefs (Bayesian style) with the results of actions, ReAct turns a one‑shot generation into a **closed‑loop policy** that can self‑correct and explore.

### Deeper principle
ReAct is an instantiation of *active inference* in symbolic space: the model actively queries its own internal knowledge base to close the loop between hypothesis and evidence. The “reason” phase is essentially constructing a posterior over possible solutions; the “act” phase samples from this posterior, receives feedback, and conditions the next reasoning step.

### Non‑obvious insight
Most people view ReAct as a *pipeline* (think → act). In fact, the **order of magnitude** of improvement comes from allowing the model to *interleave* actions that are not just final outputs but *meta‑actions*—e.g., “search Wikipedia”, “evaluate code”. These meta‑actions effectively augment the model’s own prior with external evidence, turning a deterministic LLM into an *adaptive agent*. The key is that each action is treated as part of the same probabilistic graph; thus the model can backtrack on earlier thoughts if an action fails—something traditional pipelines cannot do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
