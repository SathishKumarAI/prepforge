---
qid: ing_e9d503c49b__eli5__local
question: Why did transformers displace RNNs for language modelling, and what exactly
  does the KV cache buy you at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 253
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:45:36-05:00'
sources: []
---

Imagine a classroom where students (tokens) are talking one after another.  
With an RNN, the teacher can only listen to the last student’s voice; every new answer depends on that single memory, so earlier voices quickly fade and long‑term stories become hard to keep straight.  

A transformer is like a group of students who all shout at once into a giant microphone array. Each student can hear everyone else in the room and decide what to say based on the whole conversation—no one has to wait for a single “last speaker.” This lets the model learn long‑range patterns without forgetting, so it outperforms RNNs on language tasks.

During inference, the transformer keeps two tables: **Keys** (the past contexts) and **Values** (their content). The KV cache stores these tables from previous steps. When a new token arrives, the model reuses the cached keys/values instead of recomputing them, so it can instantly attend to all earlier words. In short, the KV cache gives you a fast shortcut that saves time while preserving full context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
