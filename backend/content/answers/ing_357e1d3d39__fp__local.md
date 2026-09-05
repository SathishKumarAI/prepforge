---
qid: ing_357e1d3d39__fp__local
question: Compare plan-then-execute with reactive (ReAct-style) execution. When does
  each win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 407
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:13-05:00'
sources: []
---

**Plan‑then‑Execute vs. Reactive (ReAct‑style)**  

Both strategies tackle the *control problem* in sequential decision making: how to turn a language model’s unbounded output into reliable action.  
1. **Plan‑then‑Execute** first generates an explicit plan—often a list of sub‑goals or steps—then executes each step while verifying its success. This is essentially a *model‑based planning* problem: the planner encodes a cost function (time, safety, resource use) and searches for a trajectory that minimizes it. It works best when  
   - the environment is *static* or changes predictably;  
   - actions have long‑term consequences that can be reasoned about offline;  
   - verification of intermediate states is possible.  
2. **ReAct** (reactive execution) interleaves reasoning and action in a loop: the model asks for an action, observes its effect, then re‑asks. This is a *model‑free* approach akin to online reinforcement learning but driven by language instructions. It excels when  
   - the world is highly stochastic or partially observable;  
   - rapid adaptation is required (e.g., real‑time user dialogue);  
   - the cost of generating an entire plan outweighs the benefit of pre‑planning.

**Non‑obvious insight:** The trade‑off hinges on *information bottlenecks*. In ReAct, each observation provides fresh evidence that can prune large swaths of the search space; in Plan‑then‑Execute, a single mis‑prediction early on may render the entire plan useless. Thus, for tasks with high epistemic uncertainty (e.g., troubleshooting hardware), a reactive loop is more robust because it continually refines its internal model rather than committing to an initial hypothesis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
