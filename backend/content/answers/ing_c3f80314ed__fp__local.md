---
qid: ing_c3f80314ed__fp__local
question: 'Explain: Plugins and Planners — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 339
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:46-05:00'
sources: []
---

**Semantic Kernel’s “Plugins” and “Planners”: a first‑principles view**

The kernel solves the *“how do we let an LLM act as a composable service?”* problem.  
A **plugin** is a tiny, typed interface that exposes a deterministic API (e.g., `Weather.GetForecast`) to the model. The model can invoke it by generating a call‑style string; the kernel parses, validates, and executes the function, returning structured data. This turns an otherwise opaque text generation into a *semantic* action: the LLM’s intent is mapped to concrete side effects while preserving safety and reproducibility.

A **planner** tackles the *“how do we sequence actions when the goal is multi‑step?”* problem. It is a lightweight policy that, given a high‑level objective, queries the model for candidate sub‑tasks, ranks them by estimated utility (often via internal LLM scoring), and iteratively refines the plan until all tasks are executable or a stopping criterion is met. The planner therefore reduces a complex decision tree into a tractable linear sequence of plugin calls.

**Non‑obvious insight:**  
Because plugins expose *type signatures*, the planner can perform **static type inference on generated plans**, detecting unsatisfiable sub‑tasks before any runtime call. This turns an inherently stochastic LLM output into a deterministic workflow with formal guarantees, a feature that most “black‑box” LLM orchestration systems lack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
