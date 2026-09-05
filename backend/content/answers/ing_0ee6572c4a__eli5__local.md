---
qid: ing_0ee6572c4a__eli5__local
question: What's the difference between causal language modeling and masked language
  modeling as pretraining objectives?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 212
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:59:11-05:00'
sources: []
---

Imagine a sentence is a short story written on a page.  
**Masked Language Modeling (MLM)** is like giving you the whole page, but some words are covered with black stickers. Your job is to guess each stickered word from the context that’s still visible – you’re filling in blanks after seeing the rest of the story.

**Causal Language Modeling (CLM)** is different: you read the page one word at a time, left‑to‑right, and at each step you must predict what comes next. You never peek ahead; you only use the words that have already appeared.

So, MLM “asks for missing pieces in a finished picture,” while CLM “predicts the next frame of a movie as it plays.” Both teach the model to understand language, but they train it with different viewpoints: one looks backward and forward simultaneously, the other strictly forward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
