---
qid: ing_acee596434__fp__local
question: 'Q: Why does GPT-4 struggle with simple character counting?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 337
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:20-05:00'
sources: []
---

**Why GPT‑4 falters on trivial character counts**

At its core, GPT‑4 is a *sequence‑to‑sequence* language model trained to predict the next *token*, not the next *character*. Tokens are learned subwords (≈3 bytes in UTF‑8) that balance vocabulary size and granularity. During training, the objective is cross‑entropy over these tokens; there is no explicit supervision for counting or arithmetic. Consequently, the network learns statistical regularities of language, not deterministic algorithms.

Counting characters requires *exactly* mapping a string to an integer. The model’s hidden state represents a compressed probabilistic summary of past tokens; it lacks a dedicated counter module. When asked “How many letters are in ‘hello’?”, the network must infer that each token corresponds to one character and then perform addition—an operation it never optimized for. Small deviations (e.g., unseen punctuation or emoji) break this inference, leading to hallucinated counts.

A non‑obvious insight: **tokenization bias**. Because GPT’s vocabulary groups common bigrams into single tokens, a word like “hello” becomes one token. The model learns that *one* token often maps to *five* characters, but this mapping is fuzzy and context‑dependent. Thus, when the prompt explicitly demands counting, the model resorts to pattern matching rather than algorithmic reasoning, producing errors even on simple examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
