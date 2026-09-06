---
qid: ing_ea1d78e34a__fp__local
question: 'Explain: Q: An agent called a broken tool 400 times in five minutes. Diagnose
  and design the fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 544
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:16:54-05:00'
sources: []
---

**Diagnosing “broken‑tool” calls in an AI pipeline**

When an agent invokes a *BrokenTool* 400 times in five minutes (≈13 Hz), we’re seeing an **excessive feedback loop**: the agent repeatedly asks for the same low‑level service that fails, thereby exhausting compute and network resources.  

1. **Problem decomposition**  
   - *Failure mode*: BrokenTool returns a generic error or raises an exception.  
   - *Propagation*: The policy model receives a “tool failed” signal but has no penalty for repeated attempts; the loss function treats each call equally.  
   - *Result*: The agent’s policy converges to a degenerate loop, wasting time and potentially starving other agents.

2. **Why this must happen**  
   - In reinforcement learning (RL), the reward is sparse: only successful completions yield positive signal. If the tool never succeeds, the agent keeps exploring that action because it is *the* available action in its current state.  
   - The policy gradient or Q‑learning update lacks a **negative curvature penalty** for repeated failures; thus the loss surface has a flat plateau at high failure rates.

3. **Fix design**  

| Layer | Intervention | Rationale |
|-------|--------------|-----------|
| **Model** | Add a *failure counter* as part of the state and penalize it in the reward: `R = -α·fail_count`. | Encourages the agent to abandon the broken tool after a few tries. |
| **RL algorithm** | Use **KL‑regularized policy updates** that limit entropy spikes; add a constraint on *action frequency* (e.g., ≤5 calls per minute). | Prevents runaway exploitation of any single action regardless of outcome. |
| **Tool interface** | Wrap BrokenTool with an **exponential back‑off** and raise a *critical error* after N failures, returning a special token `TOOL_DOWN`. | Gives the agent a clear signal that the tool is unusable. |
| **Monitoring** | Log per‑agent call counts; trigger an alert if count > threshold. | Enables human oversight before resource exhaustion. |

4. **Non‑obvious insight**  
   The root cause often lies not in the tool itself but in the *reward shaping* of the agent’s objective. A tiny negative reward for failure, when combined with a hard constraint on call frequency, transforms a chaotic loop into graceful degradation—exactly what we need to keep an AI system robust under partial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
