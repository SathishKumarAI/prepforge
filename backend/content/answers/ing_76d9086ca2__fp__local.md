---
qid: ing_76d9086ca2__fp__local
question: 'Q: Why not just provide all 50 examples we have in the prompt?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 377
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:09-05:00'
sources: []
---

**Why you can’t just dump every example into a prompt**

When an LLM parses a prompt, it treats the text as a *sequence of tokens* and builds a probability distribution over the next token conditioned on all preceding ones.  
If you feed 50 examples verbatim, the model will try to learn a single “average” mapping that explains **all** those cases simultaneously. That forces it to compromise:  

| Goal | What the model learns with many examples |
|------|-------------------------------------------|
| **Generalization** | A broad rule that covers every example, losing nuance. |
| **Precision** | The probability mass for any specific output shrinks because the model must split its attention across 50 distinct contexts. |
| **Efficiency** | Longer prompts consume more of the token budget and reduce the length available for the actual task prompt, hurting performance on downstream queries. |

From an *information‑theoretic* view, each example adds entropy that the model has to explain. The optimal strategy is to give it just enough signal to identify the pattern—typically 1–5 “few‑shot” examples suffice. Extra examples act like noise: they increase variance without reducing bias.

**Non‑obvious insight:**  
The *effective* number of distinct patterns matters, not the raw count of examples. If many of your 50 examples are nearly identical (e.g., “Translate ‘hello’ → ‘hola’” repeated with different accents), the model learns the same rule multiple times, wasting capacity. Instead, curate a small set that captures the **diversity** of edge cases you care about.

In short: more isn’t always better; quality and diversity trump quantity when shaping the LLM’s internal probability distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
