---
qid: ing_5342ad04bc__eli5__local
question: 'Explain: The interview loop — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 209
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:48:49-05:00'
sources: []
---

Think of a language model as a student trying to guess what word comes next in a sentence, like a game of “fill‑in‑the‑blank.”  
Perplexity is the teacher’s way of measuring how surprised that student feels by its guesses. If the student almost always picks the right word, the surprise (perplexity) stays low—like walking on a well‑trod path. If it often chooses wrong words, the surprise spikes—like stumbling into potholes.

Technically, perplexity is the exponential of the average “cross‑entropy” loss; lower numbers mean better predictions. It’s not a score you can read like a test grade but a relative indicator: the smaller the perplexity, the more confident and accurate the model is at predicting text. In short, perplexity tells us how well the model has learned the language pattern—smaller means less confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
