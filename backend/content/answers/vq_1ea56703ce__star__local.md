---
qid: vq_1ea56703ce__star__local
question: '42 Question 42: How does Adaptive Softmax optimize LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 315
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:41-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with deploying a 12‑Billion‑parameter GPT model on an edge server that had only 8 GB of RAM and a strict 100 ms latency budget for inference.

**Task**  
I needed to reduce the memory footprint and speed up the final softmax layer without hurting perplexity beyond 0.5 points.

**Action**  
I replaced the standard dense softmax with Adaptive Softmax, grouping the vocabulary into three clusters: frequent words (top‑10k), medium‑frequency words (next 90k), and a tail cluster for the remaining 1M tokens. Using TensorFlow’s `tf.nn.adaptive_softmax`, I trained each cluster on its own sub‑network, sharing a small projection matrix for the tail to keep parameters minimal. I also quantized the tail logits to 8‑bit integers and fused batch‑norm into the softmax step to cut kernel launches.

**Result**  
The model’s memory usage dropped from 3.2 GB to 1.4 GB, while inference latency fell from 180 ms to 85 ms. Perplexity increased by only 0.42 points, well within acceptable limits. I learned that careful vocabulary clustering and quantization can unlock edge deployment for otherwise intractable LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
