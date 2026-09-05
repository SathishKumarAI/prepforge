---
qid: ing_3b326d731f__star__local
question: Explain FlashAttention's core idea. What does it optimise, and what doesn't
  it change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:01-05:00'
sources: []
---

**Situation** – In my last project I was building a transformer‑based language model that needed to train on 8 GB of text data in under an hour on a single GPU. The training loop stalled every time we hit the 32k‑token batch size because the standard attention matrix took up more than 70 % of VRAM and slowed down by a factor of three.

**Task** – I had to reduce memory usage and keep throughput high without sacrificing the quality of the model or the correctness of the softmax computation.

**Action** – I implemented FlashAttention, a kernel that computes the scaled‑dot‑product attention in one fused pass. Instead of materialising the full Q·Kᵀ matrix (O(n²) space), the algorithm streams query rows and key–value pairs through a block‑wise reduction, keeping only O(n) intermediate activations on‑device. It uses warp‑level primitives to compute the exponential, sum, and normalisation in parallel, so the softmax remains mathematically identical to the naïve implementation. I replaced the custom CUDA kernel with one from the HuggingFace FlashAttention repo, tuned block sizes for my GPU, and added a fallback path for very small batches.

**Result** – Memory usage dropped from 12 GB to 5 GB, allowing me to train at twice the batch size. Training time per epoch fell from 45 minutes to 20 minutes while validation perplexity stayed within 0.02 of the baseline. I learned that careful kernel fusion can deliver huge gains without altering the underlying algorithmic behaviour.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
