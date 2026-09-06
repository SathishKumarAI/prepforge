---
qid: ing_78de0ee687__fp__local
question: 'Explain: Now the hard one: an agent that calls tools over multiple steps.
  Test it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 398
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:21:44-05:00'
sources: []
---

**Why an AI needs a *tool‑calling* agent**

When a user asks for something that lies beyond the raw knowledge stored in a model’s weights—say “convert this CSV to JSON” or “fetch live stock prices”—the model cannot answer by itself. The fundamental problem is **access to external, mutable resources**. A tool‑calling agent solves this by treating every external function (API call, database query, calculator) as a *latent variable* that can be instantiated stepwise.

**How it works from first principles**

1. **Problem decomposition** – The agent’s policy maps the user prompt and the current state to an action: either “output” or “invoke tool X with arguments Y”.
2. **Execution trace** – Each invocation produces new evidence (the tool’s response) that updates the world‑state.
3. **Reinforcement loop** – Using a reward signal (e.g., task completion, minimal steps), the agent learns to interleave reasoning and calls optimally.

Mathematically this is an *interactive Markov decision process* where actions are either “generate text” or “query a function”. The policy can be derived via **policy gradient** on log‑likelihood of correct final outputs, effectively learning to treat tools as stochastic nodes that reduce uncertainty.

**Deep insight most miss**

The agent’s *optimality* is governed by the **information bottleneck principle**: each tool call should maximally reduce entropy about the target answer while incurring minimal cost. Hence a rational agent will never call an expensive API if a cheaper internal heuristic already yields high‑confidence predictions. Recognizing this trade‑off turns tool calling from brute‑force orchestration into principled decision‑making, enabling efficient, transparent multi‑step reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
