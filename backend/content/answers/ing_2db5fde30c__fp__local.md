---
qid: ing_2db5fde30c__fp__local
question: 'Q51: Your agent takes 47 LLM calls to complete a task that should take
  5. How do you debug this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 453
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:41:58-05:00'
sources: []
---

### Why the blow‑up happens  
Your agent is supposed to finish in *≈ 5* calls but ends up making **47**.  
The underlying problem is that the *policy* (the planner that chooses which LLM prompt to send next) has drifted from a minimal‑cost trajectory into an orbit of redundant or cyclic sub‑tasks.  In control‑theoretic terms, you have an **unstable policy loop**: each LLM output feeds back into the agent’s state and keeps it moving in a direction that increases cost.

### Debugging as a *constrained optimization*  
1. **Define the objective** – minimize total calls subject to task completion.  
2. **Collect trajectory data** – log every state, prompt, response, and call count.  
3. **Detect cycles** – run a shortest‑path analysis on the state graph; any repeated state with increasing cost signals a loop.  
4. **Quantify regret** – for each transition compute *Δcalls* = calls after – expected minimal calls. High‑regret edges are candidates for pruning.

### Non‑obvious insight: *State abstraction collapse*  
Often the agent’s internal state representation is too fine‑grained; two semantically equivalent contexts (e.g., “summarize paragraph” vs. “condense text”) are treated as distinct, causing the policy to explore both paths separately.  Coarsening the state space—by clustering embeddings that yield similar LLM outputs—can collapse the graph and eliminate unnecessary calls.

### Fix it  
- **Prune high‑regret edges** or add a penalty for revisiting states.  
- **Introduce a termination oracle**: after *k* calls, force a fallback completion step.  
- **Re‑train the policy** with the new cost function, ensuring that the planner learns to avoid loops.

By treating the agent’s call budget as an optimization constraint and inspecting the state graph for cycles, you convert the mystery of “47 vs. 5” into a tractable debugging pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
