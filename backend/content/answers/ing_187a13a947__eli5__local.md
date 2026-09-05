---
qid: ing_187a13a947__eli5__local
question: How should tool results be formatted before they go back into the model's
  context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 221
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:14:29-05:00'
sources: []
---

Think of the model as a chef who’s been cooking a recipe (your conversation) but needs a special ingredient that comes from a separate pantry (the tool). The chef can’t just drop raw flour into the pot; it must be sifted and measured so the dish turns out right.

**Analogous steps**

1. **Label the ingredient** – give the result a clear name, like “WeatherInfo”.
2. **Wrap it in a container** – put the data inside a short, plain‑text block (no code fences or hidden formatting).
3. **Keep it tidy** – list only what matters: the key facts and their values, no extra commentary.
4. **End with a cue** – finish by telling the chef “Use this now” so the model knows to incorporate it.

By treating tool output like a cleanly labeled ingredient, the model can read it easily and blend it into its next answer without confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
