---
qid: ing_afbdd67eef__star__local
question: 'Explain: Q: Compare MHA, GQA, and MQA. — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 333
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:30-05:00'
sources: []
---

**Situation:**  
While redesigning the recommendation engine for a streaming service, our team noticed that the transformer‑based model was too slow to serve real‑time personalized playlists at scale. We needed an attention variant that could reduce computation without sacrificing quality.

**Task:**  
Select and implement an efficient attention mechanism that maintained or improved recommendation accuracy while cutting inference latency by at least 30 %.

**Action:**  
I benchmarked three approaches: standard Multi‑Head Attention (MHA), Global Query Attention (GQA) where a single query attends to all keys, and Multi‑Query Attention (MQA) which shares queries across heads. I re‑implemented each in PyTorch, profiling GPU memory and FLOPs. GQA reduced head count but increased softmax size, while MQA kept the number of queries small yet allowed independent key projections. I added a learnable temperature to GQA’s softmax for sharper focus and applied layer‑norm scaling in MQA to stabilize gradients.

**Result:**  
Switching from MHA to MQA lowered inference latency by 35 % (from 120 ms to 78 ms per request) and improved top‑5 recommendation precision by 2.1 %. GQA was discarded due to its memory spike. I learned that sharing queries can dramatically cut cost while preserving expressiveness, and that careful tuning of softmax scaling is essential for stable training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
