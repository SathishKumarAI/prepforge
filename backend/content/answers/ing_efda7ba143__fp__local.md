---
qid: ing_efda7ba143__fp__local
question: 'Explain: Public Evals — Introducing SWE-1.5: Our Fast Agent Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 338
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:10-05:00'
sources: []
---

**Why “Public Evals” and the *SWE‑1.5* fast‑agent matter**

In large language models (LLMs), a *public evaluation* is a reproducible benchmark that lets anyone measure how an agent behaves in realistic, open‑world scenarios—think of a sandbox where a model must plan, reason, and act without hidden test data. The core problem: **we need to know whether the model truly “understands” the world or merely memorizes patterns**.

*SWE‑1.5* (“Self‑World‑Embodied 1.5”) is a lightweight agent architecture that tackles this by **decoupling perception, planning, and execution into separate modules with explicit state representations**.  
- **Perception** encodes raw text into a semantic graph (nodes = entities, edges = relations).  
- **Planning** operates on this graph using an *information‑theoretic* cost function that balances action value against uncertainty reduction.  
- **Execution** sends minimal prompts to the base LLM, preserving its generative power while keeping token budgets low.

The non‑obvious insight is that **by treating the agent’s internal state as a *probabilistic knowledge graph*, we can apply Bayesian updates directly after each action**, turning every interaction into an evidence‑accumulating step. This turns the model from a black box into a *learnable inference engine* whose performance improves with experience, not just training data size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
