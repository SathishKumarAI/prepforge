---
qid: vq_20ccb15507__eli5__local
question: Feedforward Neural Network?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 211
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:09-05:00'
sources: []
---

Think of a **feed‑forward neural network** like a relay race where each runner passes the baton only forward, never back.  
The runners are *neurons* grouped into layers: an input layer (receives the data), one or more hidden layers (process the information), and an output layer (gives the answer). Each runner carries a tiny calculator called a **weight** that scales the baton’s value before handing it to the next runner. After the last runner, the final result is produced.

The “feed‑forward” part means the baton moves in one direction—there are no loops or back‑tracking—so each neuron sees only what comes from the previous layer. By adjusting the weights during training, the relay learns the best way to transform inputs into correct outputs, just as a team practices to win the race.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
