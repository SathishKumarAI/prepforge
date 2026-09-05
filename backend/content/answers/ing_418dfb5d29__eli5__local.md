---
qid: ing_418dfb5d29__eli5__local
question: Explain min-p sampling and repetition/frequency penalties. When do standard
  sampling settings fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 286
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:20:06-05:00'
sources: []
---

Imagine the AI as a chef who has a huge pantry (all possible next words) and must pick the right ingredient for each bite.  

**Min‑p sampling** is like telling the chef to ignore any ingredient that’s rarely used in this recipe—anything below a small “popularity threshold” p. The chef only considers ingredients that have at least that minimal chance of appearing, then randomly chooses among them. This keeps the dish from using obscure or nonsensical spices.

**Repetition and frequency penalties** act like a spice‑budget rule: if the chef has already used an ingredient many times, its “price” goes up, so it’s less likely to be chosen again. This discourages over‑used words (repeats) while still allowing a word to appear if it hasn’t been over‑used.

Standard sampling settings fail when the model keeps picking the same few words (“the”, “and”) or produces gibberish because every token has almost equal probability. By setting min‑p and penalties, we prune low‑probability options and curb runaway repeats, giving the AI a more varied and sensible output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
