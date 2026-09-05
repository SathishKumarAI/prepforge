---
qid: ing_fac387bf3a__eli5__local
question: How do sinusoidal positional encodings work, and how do they compare to
  learned positional embeddings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 224
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:12:04-05:00'
sources: []
---

Imagine a long road where every mile marker tells you how far along the journey you are.  
**Sinusoidal positional encoding** is like putting on each marker a pair of lights that flicker in two different rhythms (one slow, one fast). The exact brightness pattern depends only on the marker’s number; you can predict it for any mile without remembering past markers. This lets the AI “hear” the distance between any two positions because the patterns overlap in predictable ways.

**Learned positional embeddings** are like having a tiny note written on each marker by a human driver. The driver chooses whatever words or symbols make sense, but you have to remember them for every mile—there’s no built‑in rule that tells you what the next marker should say.

So sinusoidal encodings give the model a universal, smoothly varying code that works for any sequence length, while learned embeddings let the model adapt its own custom code at the cost of more parameters and limited generality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
