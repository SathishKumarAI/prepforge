---
qid: ing_7940daa926__fp__local
question: You want to switch model providers and your prompts break. Why, and how
  would you have made them portable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 408
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:22:22-05:00'
sources: []
---

When a prompt “breaks” after swapping an LLM provider it is not the text that fails—it is the *assumption* baked into the prompt about how the model behaves.  
All language models learn from the same objective: maximize the likelihood of the next token given a context. That objective guarantees **token‑level consistency**, but nothing else. Every vendor tunes temperature, top‑k, repetition penalty, and even the vocabulary mapping differently. Consequently:

1. **Tokenization mismatch** – A prompt that relies on a particular word boundary or sub‑word id will map to a different sequence in another tokenizer, changing semantics.
2. **Output distribution shape** – Temperature or nucleus sampling alters the entropy of the reply; a prompt engineered for a low‑entropy model (e.g., “write a concise summary”) may become verbose when the new model samples broadly.
3. **Context window handling** – Some engines truncate older tokens differently, so prompts that depend on implicit memory (“continue from the last sentence”) lose coherence.

To make prompts portable you must treat them as *stateless* specifications of desired behavior rather than scripts for a particular engine:

| Design choice | Why it matters |
|---------------|----------------|
| **Explicit constraints** (e.g., “limit answer to 3 sentences”) | Removes dependence on implicit entropy tuning. |
| **Prompt‑agnostic identifiers** (use a fixed keyword, not a token id) | Avoids tokenizer drift. |
| **Self‑contained context** – include all necessary background in the prompt | Eliminates reliance on model’s internal cache or history length. |

A non‑obvious insight: *the stability of a prompt is proportional to how much it reduces the model’s effective search space.* By constraining output shape and content, you hand the model a smaller, well‑defined sub‑problem that every provider can solve regardless of low‑level hyperparameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
