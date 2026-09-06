---
qid: ing_dc40ec3428__fp__local
question: 'Explain: Step 4. Add Agent Skills — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 409
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:25-05:00'
sources: []
---

### Why “Add Agent Skills” is the linchpin of a functional AI agent

The core problem any autonomous system must solve is **decision‑making under uncertainty**: given noisy observations, it must choose actions that maximize some cumulative reward. From this perspective an *agent* is nothing more than a policy π(a|s) mapping states to action probabilities. The “Add Agent Skills” step is the mechanism by which we shape that policy.

1. **Skill as a reusable sub‑policy**  
   A skill (or option in the options framework) is a parameterized controller \(π_{\theta}\) with its own termination condition τ(s). By composing skills, the agent reduces a high‑dimensional action space to a manageable set of *macro‑actions*. This mirrors human chunking: we learn “open door” once and reuse it across contexts.

2. **Optimization via hierarchical reinforcement learning**  
   The outer policy selects which skill to invoke, while each skill’s inner policy is trained separately (or jointly) using standard RL loss functions. Hierarchical decomposition turns a long‑horizon problem into nested short‑horizon subproblems, dramatically improving sample efficiency.

3. **Information bottleneck and abstraction**  
   Skills act as an *information filter*: they compress raw sensory input into task‑relevant abstractions (e.g., “navigate corridor”). This aligns with the principle of minimal sufficient statistics—keeping only what matters for reward prediction.

4. **Non‑obvious insight: skills enforce *modular exploration***  
   Because each skill has a distinct termination condition, the agent naturally explores different regions of state space in isolation. This mitigates catastrophic forgetting and allows transfer across tasks without retraining the entire policy.

In short, adding skills is not just a convenience—it’s the mathematical bridge that turns raw reinforcement learning into scalable, transferable autonomy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
