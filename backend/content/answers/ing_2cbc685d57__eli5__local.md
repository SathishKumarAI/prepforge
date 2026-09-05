---
qid: ing_2cbc685d57__eli5__local
question: 'Explain: Vocabulary Size — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 228
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:19-05:00'
sources: []
---

Imagine your favorite recipe book. Each word in the book—“flour,” “sugar,” “bake”—is a *token*. The cookbook’s **vocabulary** is just the list of all unique words it contains. In AI, we do the same: we split text into tokens (often pieces of words) and count how many distinct tokens exist.

A small vocabulary means the model sees only a few building blocks; it can’t describe rare ideas well. A huge vocabulary lets the model pick from many precise pieces but makes learning harder because each token appears less often. Think of a toy train set: with few tracks (small vocab) you can move quickly, but you’re limited to simple routes. With many tracks (large vocab), you can build intricate paths, but you need more time to learn where each track goes.

So, **vocabulary size** is the number of unique tokens we let a language model use—balancing detail against learning difficulty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
