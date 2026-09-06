---
qid: ing_9ef1b92da6__fp__local
question: 'Explain: Step 3. Add MCP Tools — How Do AI Agents Work - by Neo Kim and
  Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 443
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:43:22-05:00'
sources: []
---

**Step 3: “Add MCP Tools – How Do AI Agents Work”**  
The *MCP* (Model‑Control‑Predict) framework turns a raw language model into an autonomous agent by **explicitly separating perception, decision, and action**—the very triad that underlies any control system.  

1. **Perception (Model)** – The LLM ingests the current state as a structured prompt (e.g., *“Weather: sunny; Task: book flight.”*). This is essentially a probabilistic inference problem: the model outputs a distribution over possible next states given the input distribution, which we treat as a Bayesian belief update.  
2. **Decision (Control)** – The agent samples from or optimizes this posterior to choose an action that maximises expected utility under constraints. Here the *utility function* is encoded in the prompt and can be tuned by adding explicit cost terms—this is where reinforcement signals would normally enter, but we simulate them via carefully crafted instruction tokens.  
3. **Prediction (Predict)** – The chosen action is fed back into the model to forecast its effect on the environment, closing the loop.  

**Why this works:** By making the control policy a *function* of the model’s own uncertainty, the agent naturally balances exploration and exploitation without an external RL algorithm—an emergent property of the LLM’s internal probability estimates.

**Non‑obvious insight:** The “tools” in MCP aren’t just APIs; they are **parameterized modules that re‑weight the model’s attention**. A well‑designed tool can shift the LLM’s prior from a purely textual distribution to one grounded in structured data (e.g., a calendar API), effectively *injecting inductive bias* into the same inference loop. This explains why agents that merely wrap calls around an LLM often underperform—unless the tools are integrated at the prompt‑level, they remain orthogonal to the model’s learned probability space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
