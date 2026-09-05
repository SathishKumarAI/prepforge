---
qid: ing_8b0fa7760b__eli5__local
question: You clearly use Perplexity - what's broken, and what would you ship to fix
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 206
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:16:53-05:00'
sources: []
---

Think of a language model like a student who’s learning to read a new book.  
**Perplexity** is the teacher’s way of measuring how surprised that student is when it reads each word. If the student guesses the next word often, perplexity is low; if it keeps guessing wrong, perplexity shoots up.

What’s broken? The model’s “surprise” isn’t always honest. It can be artificially low on short or common phrases while still getting long, tricky sentences wrong—so the perplexity score hides real mistakes.

To fix it, we’d ship a **context‑aware perplexity** that weighs each word by how hard it is to predict in its sentence, plus a “confidence penalty” that penalizes over‑sure guesses. This gives a clearer picture of where the model actually struggles, letting us target those weak spots for improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
