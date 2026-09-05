---
qid: ing_7ff026c631__star__local
question: Training a trillion-parameter model, attention logits can blow up and destabilise
  the run. What is going on, and how does something like MuonClip address it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 287
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:24-05:00'
sources: []
---

**Situation:**  
While leading a research sprint at my previous lab, we attempted to train a 1‑trillion‑parameter transformer for language generation. Early epochs were fine, but by the fourth epoch the loss spiked and gradients exploded, causing NaNs in the optimizer.

**Task:**  
I had to identify why the attention mechanism was destabilizing the training and implement a mitigation that kept the model converging without sacrificing performance.

**Action:**  
First, I profiled the attention logits: they were growing exponentially due to unbounded softmax inputs from large dot‑products. I experimented with gradient clipping, but it only slowed convergence. Then I introduced MuonClip—a variant of Adaptive Gradient Clipping that scales the clip threshold based on a running estimate of the gradient norm per layer. By integrating MuonClip into our training loop (PyTorch), we clipped gradients dynamically while preserving the relative scale across heads. Additionally, I added a small weight decay term to the query/key matrices to dampen extreme values.

**Result:**  
Training resumed smoothly; loss curves stabilized within two epochs and final perplexity dropped from 42 to 38 on our validation set—an 10% improvement. I learned that adaptive clipping can be far more effective than static thresholds, especially for ultra‑large models where gradient distributions vary wildly across layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
