---
qid: ing_0d26b1f96d__eli5__local
question: You are fine-tuning on a domain full of jargon and someone suggests adding
  new tokens to the tokenizer. What can go wrong, and how do you handle vocabulary
  changes correctly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 203
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:56:23-05:00'
sources: []
---

Imagine your AI is learning a new language in a secret club where everyone talks in coded slang. The tokenizer is like a dictionary that tells the model which “words” (tokens) exist. If you suddenly add a bunch of new slang entries to this dictionary without telling the rest of the model, it’s as if you let a student write essays with words the teacher doesn’t know how to grade. The model will start treating those new tokens as unknown, breaking its internal math and making predictions wobble.

The right way is to **expand the tokenizer first**, then **re‑train the embedding layer** (the part that maps each token to a numeric vector) so it learns good representations for the new words. Finally, fine‑tune the whole model on your jargon data. This keeps the vocabulary in sync and prevents the model from “forgetting” how to use the old tokens while learning the new ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
