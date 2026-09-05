---
qid: ing_9ee546fc40__star__local
question: 'Explain: Recap Of Training — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 328
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:52-05:00'
sources: []
---

**Situation** – In my last role, we were migrating our translation pipeline to a Transformer model after the LSTM baseline hit a plateau around BLEU‑32. The engineering team was skeptical because we had no real‑world visualisation of how attention behaved during training, and we needed to convince stakeholders that the new architecture would converge faster.

**Task** – My goal was to create an interactive recap that illustrated each training epoch: weight updates, loss curves, and the evolving attention maps so the product manager could see why the model improved. I had to make it accessible to non‑technical executives while keeping the technical fidelity for my peers.

**Action** – Using PyTorch Lightning’s built‑in callbacks, I logged attention weights at every 100th batch. With TensorBoard’s `projector` and a custom Matplotlib script, I plotted heatmaps of token‑to‑token attention across layers, overlaying them on the loss curve. I also computed perplexity per epoch to show quantitative gains. To keep it digestible, I capped each visualisation at 5 epochs and annotated key changes (e.g., shift from self‑attention in early layers to cross‑attention in later ones).

**Result** – The recap demo convinced management to greenlight the Transformer rollout. Within three months, BLEU jumped to 38, and inference latency dropped by 25 %. I learned that turning abstract training dynamics into concrete visual stories can bridge the gap between data science and product strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
