---
qid: ing_80a54e3d27__star__local
question: 'Explain: Position Encodings — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 285
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:43-05:00'
sources: []
---

**Situation** – While interning at a startup building a lightweight transformer for on‑device summarization, we noticed the model’s attention weights were ignoring word order, producing garbled summaries.  
**Task** – I had to implement an efficient position encoding scheme that preserved locality without blowing up memory or inference latency on ARM CPUs.  
**Action** – I researched sinusoidal encodings and learned their analytical gradients make them ideal for fine‑tuning. I replaced the absolute positional embeddings with a 2‑D sin/cos table, broadcasting it across batch dimensions and fused the addition into the first linear layer via a custom kernel written in C++/NEON. To keep the extra bytes minimal, I quantized the encoding to int8 using per‑channel scaling, then verified that the model’s loss dropped by 12% on a dev set while inference time stayed under 25 ms.  
**Result** – The summarizer now respects word order, improving ROUGE‑L from 0.42 to 0.55 and reducing hallucinations by 30%. I learned how mathematical insights (trigonometric identities) translate directly into low‑level optimizations that meet real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
