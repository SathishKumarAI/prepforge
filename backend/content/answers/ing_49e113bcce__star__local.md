---
qid: ing_49e113bcce__star__local
question: What's the difference between batch, mini-batch, and stochastic gradient
  descent? What does batch size actually change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 369
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:03-05:00'
sources: []
---

**Situation:**  
While working on a large‑scale image classification project for a startup, we were training a ResNet‑50 model on 500 k images. The initial training run used the default PyTorch setting (full‑batch) and took roughly 48 h per epoch on our GPU cluster.

**Task:**  
I had to reduce training time while maintaining convergence quality, so I needed to experiment with different gradient descent variants and understand how batch size would affect both memory usage and optimization dynamics.

**Action:**  
First, I switched from full‑batch (batch = N) to mini‑batch by setting `batch_size = 256`. This reduced the GPU memory footprint and allowed us to train on a single RTX 3090. Next, I implemented stochastic gradient descent by using `batch_size = 1` in a custom data loader; this increased noise in the updates but improved exploration of the loss surface. I also profiled the training loop with NVIDIA Nsight to measure GPU utilization and kernel launch overhead for each configuration. Finally, I compared learning curves: full‑batch converged in 30 epochs (≈ 24 h total), mini‑batch in 32 epochs (≈ 20 h total), while stochastic SGD required 40 epochs but achieved slightly lower validation loss.

**Result:**  
Choosing a batch size of 256 gave the best trade‑off, cutting training time by ~30% and saving $300 per month on cloud GPU usage. I learned that batch size controls not only memory consumption but also the variance of gradient estimates; smaller batches add noise that can help escape sharp minima, while larger batches provide smoother updates and better parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
