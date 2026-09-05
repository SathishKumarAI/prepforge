---
qid: ing_b7620d2358__eli5__local
question: 'Explain: Now We’re Encoding! — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 210
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:02-05:00'
sources: []
---

Imagine you’re writing a story where every word is a tiny messenger that can talk to all the other words in the sentence. In a transformer, **encoding** is like sending each messenger a “passport” that tells it who it is and what it should pay attention to.

First, each word gets a unique number (a *token*). Then we give every token two passports:

1. A **position passport** – it says where the word sits in the sentence, so the model knows the order.
2. An **embedding passport** – a short vector of numbers that captures the word’s meaning and style.

These passports are combined into one “encoded” packet for each word. As the transformer processes the sentence, it lets every packet look at all the others, comparing their passports to decide how strongly they should influence each other. That comparison is what builds the deep understanding that powers translation, summarization, or any language task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
