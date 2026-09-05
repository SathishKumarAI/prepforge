---
qid: ing_248374ff8b__fp__local
question: 'Explain: Common Issues — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 354
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:23:21-05:00'
sources: []
---

**Why Semantic Kernel often trips developers**

The core goal of a semantic‑kernel is to *translate* user intent into LLM calls while preserving context and business logic. The design forces a tight coupling between the “prompt template” (a string) and the “function contract” (C# method). This coupling yields two fundamental friction points:

1. **Prompt drift** – small changes in wording can alter the model’s internal representation, breaking downstream logic that expects exact output tokens.  
2. **State leakage** – because kernels keep a single prompt buffer per session, any accidental concatenation of previous queries leaks sensitive data or skews inference.

These issues stem from an information‑theoretic trade‑off: we compress rich conversational history into a flat string to satisfy the LLM’s input size limit. Compression inevitably loses entropy; when the loss is not carefully bounded (e.g., by enforcing deterministic tokenization or length‑aware truncation), downstream logic fails.

**Non‑obvious insight:**  
Most users assume that *more context* always improves performance, but beyond a critical threshold the marginal gain in semantic coverage is outweighed by increased noise. A principled approach—modeling the prompt as a *probability distribution over intents* and using Bayesian pruning to keep only the most likely tokens—reduces drift while preserving essential information.

**Bottom line:**  
Semantic‑Kernel integration works best when developers treat prompts as *statistical artifacts* rather than literal code, enforcing deterministic templates, length caps, and explicit intent priors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
