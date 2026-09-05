---
qid: ing_1aa4c6f042__star__local
question: 'Explain: qk_max and logits ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 359
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:48-05:00'
sources: []
---

**Situation** – While integrating vLLM into our chat‑bot stack for a large‑scale customer support platform, the inference latency was creeping up as we scaled from 8 to 32 GPUs. The model’s attention layer was the bottleneck because it had to compute full softmax over every token pair.

**Task** – I needed to reduce the memory footprint and speed up the attention pass without sacrificing accuracy, so that we could keep response times under 150 ms per user query at peak load.

**Action** – I introduced *paged attention* in vLLM. First, I identified the most relevant key‑value pairs for each query token by computing a small *qk_max* score (the maximum of the query–key dot products) and selecting only those above a threshold. This pruned the KV cache into “pages.” Then, during the softmax step, I replaced the dense logits matrix with a sparse representation that only stored values for the selected pages. By caching these partial logits across multiple queries on the same GPU, we avoided recomputing the full attention matrix. I also tuned the page size and threshold empirically, balancing GPU memory usage against accuracy.

**Result** – The paged attention reduced per‑token memory from 16 GB to 9 GB on a single A100 and cut inference latency by ~35%, bringing average response time to 110 ms. Accuracy loss was below 0.3% in perplexity tests. I learned that carefully pruning the attention space with *qk_max* and efficient logit handling can yield dramatic performance gains without heavy model changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
