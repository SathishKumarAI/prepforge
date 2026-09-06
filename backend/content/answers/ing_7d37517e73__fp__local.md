---
qid: ing_7d37517e73__fp__local
question: 'Explain: The God Prompt — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 464
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:31:52-05:00'
sources: []
---

### The “God Prompt” and its Anti‑Patterns

When a user tries to squeeze *everything* into one massive prompt—describing context, instructions, constraints, desired tone, output format, even meta‑feedback—the model is forced to resolve an ill‑posed optimization problem.  
The fundamental goal of prompting is **information routing**: you give the network a concise specification that can be mapped onto its internal weight space efficiently. A God Prompt violates this principle in three ways:

| Anti‑Pattern | Why it breaks the system | Consequence |
|--------------|--------------------------|-------------|
| **Over‑Specification** | The prompt contains contradictory or redundant clauses (e.g., “write a 200‑word essay” *and* “make it a short paragraph”). The model’s loss surface becomes highly non‑convex, leading to unstable gradients and incoherent outputs. | Mixed‑length responses, hallucinations, or refusal to comply. |
| **Context Flooding** | You embed excessive background (company history, industry jargon, legal terms) before the actual instruction. This consumes the token budget that would otherwise be used for the *task* itself. | The model ignores subtle constraints because they’re buried in noise; it defaults to generic patterns. |
| **Implicit Dependencies** | Expecting the model to infer hidden rules (e.g., “use a friendly tone” without explicit wording) relies on emergent behavior that isn’t guaranteed. | Outputs may be too formal or too casual, violating user intent. |

#### One Non‑Obvious Insight
A God Prompt often *trains* the model to become a *meta‑model*: it learns to parse your own prompt as data rather than as a directive. This self‑referential loop can lead to **prompt drift**—the system starts generating text that mimics your prompt structure, not the underlying task. A cleaner approach is to separate *task* from *style* by chaining short prompts or using instruction tokens (`/imagine`, `--tone=friendly`), preserving the model’s capacity for true generative flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
