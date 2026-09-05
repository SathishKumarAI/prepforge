---
qid: ing_eafd6decfc__eli5__local
question: 'Explain: Indirect-prompt-injection defense at the read layer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 210
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:17-05:00'
sources: []
---

Imagine you’re reading a book but can’t see all the pages—only the ones your teacher lets you look at.  
In AI, an *indirect‑prompt‑injection* attack tries to slip in hidden instructions through the “read layer,” the part that pulls text from a database into the model. Think of it like someone inserting a note inside a sealed envelope; the envelope (the read layer) usually only lets you see the outer label, but if the envelope’s seal is weak, those notes can sneak in and change what the model thinks.

The defense keeps the envelope very tight: it checks every piece of text before giving it to the model, just like a teacher verifying each page for hidden messages. If any suspicious content shows up, it’s blocked or sanitized so the AI only processes clean, intended prompts. This way the read layer stays safe and the model stays on track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
