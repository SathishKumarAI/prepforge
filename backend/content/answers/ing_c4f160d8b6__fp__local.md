---
qid: ing_c4f160d8b6__fp__local
question: Kimi K1.5 scaled reinforcement learning for reasoning without a process
  reward model or tree search. Why might you deliberately keep the RL recipe that
  simple?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 397
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:33-05:00'
sources: []
---

### Why Kimi K1.5 keeps its reinforcement‑learning (RL) recipe lean

At its core, Kimi K1.5 must learn *how* to solve new problems from a handful of demonstrations or sparse feedback, **without** hand‑crafting a reward for every substep or building an explicit search tree. The underlying challenge is the **curse of compositional generalization**: the policy must discover how to combine primitive reasoning operations (e.g., “infer”, “hypothesize”) into novel chains that achieve a goal.

A minimal RL loop—state → action → scalar reward, with standard value‑based or actor–critic updates—has two virtues:

1. **Implicit curriculum emergence**  
   The policy learns to *sequence* reasoning steps solely from the final success signal. This forces it to discover an internal “search” strategy (e.g., backtracking, hypothesis pruning) *within* its own parameters, rather than relying on a hand‑coded tree search that would otherwise dominate learning dynamics and obscure what the model actually learned.

2. **Scalable exploration**  
   Complex reward shaping or deep search trees grow exponentially with problem size. By keeping RL simple, Kimi’s policy can explore longer reasoning horizons without combinatorial blowup; the value function implicitly estimates future success probability over *any* sequence of operations, acting as a lightweight, learned heuristic.

**Non‑obvious insight:**  
The simplicity itself acts as a regularizer that **forces abstraction**. When the agent cannot depend on an external tree search, it must encode *search patterns* (e.g., “try hypothesis A; if fails, backtrack to B”) directly in its representation. This emergent inductive bias often yields more transferable reasoning skills than explicitly engineered search procedures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
