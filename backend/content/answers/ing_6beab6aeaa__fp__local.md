---
qid: ing_6beab6aeaa__fp__local
question: 'Explain: Model Aliases — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 480
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:53:55-05:00'
sources: []
---

### Why “model aliases” exist

When a provider offers many AI engines (GPT‑4, Claude‑3, Llama‑2…​), the **API contract** must remain stable even as back‑ends evolve.  
A *model alias* is simply a logical name that points to a concrete model version. The client sends the alias; the server resolves it to the current best implementation. This solves two problems:

1. **Version drift:** users can upgrade automatically without changing code.  
2. **Abstraction of cost & capability:** an alias may map to different pricing tiers or optimizations, letting the provider adjust economics behind a single endpoint.

### Grok models

SpaceXAI’s “Grok” family are *task‑optimized* embeddings and inference engines. They’re built by fine‑tuning a base transformer on domain‑specific data (e.g., aerospace telemetry). The alias `grok-2` always resolves to the latest iteration that meets the performance SLA for space‑flight analysis, while older aliases (`grok-1`, `grok-0`) are retained for backward compatibility.

### Pricing mechanics

Pricing is a convex function of *token usage* and *model complexity*.  
Let  

\[
C = \alpha \cdot T_{\text{prompt}} + \beta \cdot T_{\text{completion}}
\]

where \(T\) are token counts, and \(\alpha,\beta\) depend on the alias’s underlying compute budget. Because Grok models use *parameter‑efficient adapters* rather than full fine‑tuning, they achieve lower \(\beta\), making them cheaper per completion token.

### Non‑obvious insight

Most people think pricing is purely linear in tokens. In SpaceXAI, **the alias itself encodes a “cost multiplier”** that reflects not just compute but also *data freshness* and *model stability*. Thus the same prompt length can cost more or less depending on whether you’re using `grok-0` (legacy) or `grok-2` (latest). This hidden layer of abstraction lets SpaceXAI shift pricing without breaking client contracts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
