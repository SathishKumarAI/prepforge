---
qid: ing_b7620d2358__star__local
question: 'Explain: Now We’re Encoding! — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 293
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:46-05:00'
sources: []
---

**Situation:**  
At my previous company we were building an NLP pipeline for auto‑generating product descriptions. The existing LSTM model produced bland text and had trouble handling long sentences, so the product team pushed us to adopt a transformer architecture.

**Task:**  
My goal was to redesign the encoder part of the transformer so that it could efficiently capture word relationships across entire documents while staying within our GPU memory limits.

**Action:**  
I first broke down the “Now We’re Encoding!” section from Jay Alammar’s illustration. I implemented positional encodings using sinusoidal functions and added a multi‑head self‑attention block in PyTorch, carefully initializing weights with Xavier uniform to stabilize training. To keep memory usage low, I replaced the dense attention matrix with an efficient scaled dot‑product implementation that leveraged batched GPU kernels and mixed precision (FP16). I also experimented with relative position embeddings to better handle longer contexts, monitoring loss curves after each tweak.

**Result:**  
The new encoder reduced perplexity from 3.8 to 2.1 on our validation set—an 44% improvement—and cut inference time by 35%. The model now generates richer descriptions, and I learned how positional encodings and attention scaling directly influence both performance and resource consumption in transformers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
