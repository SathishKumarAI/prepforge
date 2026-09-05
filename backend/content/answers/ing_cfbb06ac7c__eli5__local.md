---
qid: ing_cfbb06ac7c__eli5__local
question: 'Explain: I/O Bound — Io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 224
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:18-05:00'
sources: []
---

Think of training a machine‑learning model like cooking a big pot of soup.  
All the ingredients (your data) sit in a pantry, and you have a stove that can stir them (the CPU/GPU).  

An **I/O bound** situation is when the stove is ready to cook but keeps waiting for the ingredients to arrive from the pantry. The pantry is slow—perhaps it’s on a distant truck or the shelves are far apart—so each time you need more data, the machine has to pause and fetch it over the network or read it from a hard disk. Even though your stove could work faster, it can’t because the data pipeline (input/output) is the bottleneck.

In ML terms, “I/O bound” means the training speed is limited by how quickly data can be read into memory, not by how fast the model can compute. It’s like a chef who can stir instantly but must wait for the pantry to deliver more soup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
