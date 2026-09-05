---
qid: ing_9342e160cc__eli5__local
question: Why Scale by √d_k? — Llm Internals
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 265
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:08-05:00'
sources: []
---

Think of a transformer’s self‑attention as a group discussion where each word sends out a short “talking stick.”  
Each word first turns its text into two vectors: a **query** (what it wants to know) and a **key** (what it knows). To decide how much one word should listen to another, the model takes the dot product of their query‑key pairs.  

If the vectors are long—say 512 dimensions—the raw dot products become huge on average, because each dimension adds its own contribution. A big number makes the softmax that follows (which turns scores into probabilities) “blow up”: a few words dominate and the rest get almost zero weight, hurting learning.

Scaling by \(1/\sqrt{d_k}\) is like turning down the volume so that the average dot product stays around 1 regardless of how many dimensions you use. It keeps the softmax balanced, letting every word’s contribution be comparable.  

So, √\(d_k\) is simply a normalizing factor that prevents runaway scores as we increase model width, much like dimming lights when adding more bulbs to keep the room comfortably lit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
