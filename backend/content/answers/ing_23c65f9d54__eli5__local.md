---
qid: ing_23c65f9d54__eli5__local
question: 'Explain: Estimate the KV-cache memory for serving a large model, and explain
  how it constrains batch size and throughput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 250
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:50-05:00'
sources: []
---

Think of the KV‑cache as a **memory board** that keeps all the notes (keys and values) your model has written while answering a question.  
Each “note” is a small block of data—about *K* bytes for keys and *V* bytes for values.  
If you have *L* layers, each layer holds its own set of notes.  
So the total cache size ≈ L × (sequence‑length × (K+V)).  

Because this board lives in GPU RAM, it limits how many questions (batch size) you can serve at once: adding another question adds another set of notes, and when the board is full you must drop or spill data.  
A larger cache lets you keep more questions in memory, boosting throughput (requests per second), but also consumes precious VRAM that could otherwise run a bigger model or faster batch. In short, the KV‑cache size is the budget for how many “notes” you can hold while answering, and it directly caps both batch size and overall speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
