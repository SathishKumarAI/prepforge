---
qid: ing_3e022f9d0b__eli5__local
question: 'Explain: 10.8. Beam Search ¶ Colab [pytorch] Open the notebook in Colab
  Colab [mxnet] Open the notebook in Colab Colab [jax] Open the notebook in Colab
  Colab [tensorflow] Open the notebook in Colab SageMaker Studio Lab Open the notebook
  in SageMaker Studio Lab'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 195
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:20-05:00'
sources: []
---

Imagine you’re at a crossroads in a city and want to get to your favorite café as quickly as possible. Instead of walking straight ahead and hoping the first path is best, you keep several promising routes open—say the three fastest‑looking ways out of each intersection. You only remember those top three (the “beam width”) and discard the slower ones. At the next junction you again look at every option that comes from those three paths, pick the new three fastest, and so on until you reach the café.

In AI language models this is **beam search**: when generating a sentence, the model keeps a handful of the most likely partial sentences (the beam) and expands each one step by step. By pruning less promising branches early, it balances speed with quality—just like choosing the best routes without having to explore every possible path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
