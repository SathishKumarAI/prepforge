---
qid: ing_12d5adff6c__star__local
question: 'Explain: Cross-Encoder Architecture — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 347
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:10-05:00'
sources: []
---

**Situation** – At my previous company we were building a product recommendation engine for an e‑commerce platform that had over 2 million SKUs and 500,000 daily active users. The click‑through rate on our existing bag‑of‑words model was only 1.8%, far below the target of 3%.

**Task** – I needed to design a new ranking model that could understand nuanced user intent and item similarity in real time, while keeping inference latency under 50 ms per request.

**Action** – I chose a cross‑encoder architecture: each query–item pair was fed into a shared transformer (BERT-base) that produced contextualized embeddings. The final hidden state of the `[CLS]` token was then passed through a small feed‑forward network to score relevance. To reduce latency, I pruned the transformer to 6 layers and quantized weights to int8. During training I used contrastive loss with hard negative mining from the same session logs. I also implemented an approximate nearest neighbor (ANN) pre‑filter using FAISS on a fixed item embedding index to limit cross‑encoder evaluations to the top 20 candidates.

**Result** – The new model lifted click‑through rate to 3.6% (+0.8pp), a 44% relative improvement, while keeping average latency at 48 ms. I learned that carefully balancing model depth with quantization and leveraging pre‑filtering can make powerful cross‑encoders production‑ready without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
