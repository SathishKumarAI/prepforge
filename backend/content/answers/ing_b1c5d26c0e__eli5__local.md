---
qid: ing_b1c5d26c0e__eli5__local
question: 'Explain: Repetition Penalties — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 178
total_tokens: 335
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:38-05:00'
sources: []
---

Imagine your brain reading a story and trying to keep it interesting. Every time you hear the same word or phrase, you politely say “not again” so the narrator can bring something new. In AI text generation, *repetition penalties* do exactly that: they lower the chance of the model choosing words it has already used too often.

During inference (the step where the model produces text), each candidate word gets a score. If a word appears many times in the current output, its score is reduced by a penalty factor—like a gentle nudge away from being repeated. This keeps the generated passage varied and prevents endless loops of the same phrase.

Think of it as a friendly editor who silently discourages copy‑paste, ensuring every sentence feels fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
