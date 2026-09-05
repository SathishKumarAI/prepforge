---
qid: ing_47cd4cf121__eli5__local
question: 'Explain: Unigram (SentencePiece) — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 204
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:52-05:00'
sources: []
---

Think of a sentence as a long ribbon that you want to cut into bite‑size pieces for a snack.  
**Unigram tokenization** is like using a pre‑made set of small, irregular cookie cutters (the “vocabulary”). Each cutter represents a word or part of a word. The algorithm goes through the ribbon and tries every cutter, picking the combination that gives the best fit overall—much like choosing the cut pattern that covers the ribbon with minimal waste.

In SentencePiece’s **unigram model**, the vocabulary is learned from data: it starts with many tiny pieces (single characters) and gradually merges them into larger, more useful tokens. The “unigram” name comes from treating each token as an independent unit (a single word piece), not a pair or group. This lets the tokenizer handle rare words by breaking them into familiar sub‑pieces while still recognizing common whole words as single tokens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
