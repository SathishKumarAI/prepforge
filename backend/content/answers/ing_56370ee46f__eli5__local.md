---
qid: ing_56370ee46f__eli5__local
question: Explain speculative decoding. Why doesn't it change the model's output distribution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 176
total_tokens: 337
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:20-05:00'
sources: []
---

Imagine you’re reading a mystery novel. The author has already written every page, but you only get to see the first few chapters before deciding whether to keep reading. **Speculative decoding** is like that: a fast, cheap “preview” of what the next word might be, based on a small part of the text, while the full model (the complete book) sits in the background.

The preview model is trained to guess the next word quickly; it doesn’t have all the nuance of the full model. When you finally let the real model “read” the whole sentence, its probability distribution over possible next words is unchanged—because the preview only suggested a handful of candidates and never altered the underlying probabilities. It’s just a shortcut that speeds up sampling without biasing the final answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
