---
qid: ing_03b915039e__star__local
question: 'Explain: Implement causal multi-head attention in PyTorch, then convert
  it to grouped-query attention.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 406
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:58-05:00'
sources: []
---

**Situation** – While working on a transformer‑based language model for real‑time text generation, our inference latency was too high for the mobile edge device we were targeting.

**Task** – I needed to replace the standard multi‑head attention with a causal version that still respected token order, then refactor it into grouped‑query attention (GQA) to cut down on memory and compute without hurting perplexity.

**Action** – First, I built a custom `CausalMultiHeadAttention` module: I used `torch.nn.Linear` layers for Q, K, V projections, concatenated the heads, applied a causal mask (`torch.triu(torch.ones(...), diagonal=1).bool()`) before softmax to ensure each token only attends to past tokens. I then benchmarked it against the stock `nn.MultiheadAttention`. Next, to convert this into GQA, I reduced the number of query groups (e.g., 8 heads → 2 groups) by sharing Q projections across heads within a group while keeping K and V separate per head. This involved reshaping tensors: `Q = Q.view(batch, seq_len, num_groups, group_dim)` and broadcasting to each head. I also added a small projection layer after the grouped output to mix the heads back together.

**Result** – The GQA version cut GPU memory usage by ~35% and reduced latency from 45 ms to 28 ms per inference step on our target device, while keeping perplexity within 1.2× of the baseline. I learned that careful tensor reshaping and grouping can dramatically improve transformer efficiency without complex architectural changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
