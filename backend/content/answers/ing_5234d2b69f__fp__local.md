---
qid: ing_5234d2b69f__fp__local
question: How is a system prompt for a long-running agent different from one for a
  single-shot feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 488
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:55-05:00'
sources: []
---

### Why the Prompt Must Change

A *single‑shot* model (e.g., “translate this sentence”) solves an **offline optimization** problem: given input \(x\), find output \(y^\*\) that maximizes a learned probability distribution \(p_\theta(y|x)\). The prompt is merely a conditioning cue; the system’s internal state never persists beyond one forward pass.

A *long‑running agent* tackles an **online sequential decision‑making** problem. At each timestep \(t\), it observes \((s_t, o_t)\) and chooses action \(a_t\), receiving reward \(r_t\). Its objective is to maximize cumulative expected reward \(\sum_t \gamma^t r_t\). The prompt must therefore:

1. **Specify a policy schema** (e.g., “always ask clarifying questions when uncertain”) that will be executed repeatedly, not just once.
2. **Encode a *belief state* prior**—the agent needs to maintain an internal representation of the world across steps, so the prompt should describe how to update and query that belief.
3. **Define termination criteria**; in single‑shot tasks, the endpoint is implicit (output completion). For agents, we must codify when the task ends or when to request human intervention.

### The Deeper Principle

The key distinction lies in *stateful versus stateless inference*. In a single‑shot setting, inference is a static map \(x \mapsto y\); the prompt merely biases that map. In an agent, inference becomes a *policy* over a dynamic environment: the prompt must embed inductive biases about temporal consistency, exploration vs exploitation trade‑offs, and safety constraints—properties that cannot be captured by a one‑time conditioning.

### Non‑Obvious Insight

Most overlook that **the prompt itself becomes part of the agent’s internal memory**. If you ask the agent to “always keep track of user preferences,” the phrase *‘user preferences’* will be stored and referenced in every future turn, effectively augmenting the model’s context window with a symbolic variable. This transforms the prompt from static instruction into a dynamic *variable declaration*, enabling the agent to reason about long‑term dependencies without bloating the raw token count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
