---
qid: ing_99af5b534b__fp__local
question: 'Explain: Safety and Permission Model — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 522
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:55-05:00'
sources: []
---

**Why a safety‑and‑permission model is required**

At its core, an LLM is a probabilistic generator: given tokens *x₁…xₙ*, it samples the next token *xₙ₊₁* from  
\(P(x_{n+1}\mid x_1,\dots ,x_n)\).  
Without constraints this distribution can produce content that violates user intent, disallowed data policies, or legal obligations.  The model must therefore be **conditioned** not only on the prompt but also on a *policy vector* \(s\) that encodes “what is safe” and “who may see what”.  Formally we seek

\[
P_{\text{safe}}(x_{n+1}\mid x_1,\dots ,x_n, s)
   \propto P(x_{n+1}\mid x_1,\dots ,x_n)\,
          \mathbf{1}_{\{\text{policy}(s,x_{n+1})=1\}}
\]

where the indicator enforces hard constraints.  This is a *constrained optimization* problem: maximize likelihood subject to policy feasibility.

**Mechanics in Claude**

1. **Safety tags** – The system annotates every token with a *safety class* (e.g., “harassment”, “medical advice”).  
2. **Permission tokens** – Users may set a *permission scope* (public, internal, admin‑only).  The model maintains a mapping \(f: \text{class}\times\text{scope}\to\{\text{allow},\text{block}\}\).
3. **Runtime filtering** – During sampling, any candidate token whose safety class is mapped to *block* under the current scope is discarded; if no safe tokens remain, the model emits a refusal.

**Non‑obvious insight**

The policy vector \(s\) can be learned jointly with the language model via *policy‑gradient fine‑tuning*: we treat refusals as negative reinforcement signals.  This turns safety from a static rule set into an adaptive prior that improves over time, aligning the probability distribution itself with societal norms rather than merely clipping outputs after generation.

In short, Claude’s safety and permission model is a principled application of constrained probabilistic inference, ensuring every token respects both user intent and pre‑established ethical boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
