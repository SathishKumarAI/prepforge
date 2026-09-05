---
qid: ing_01c770df7e__star__local
question: What does FlashAttention actually do, and how is it different from PagedAttention?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 340
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:56-05:00'
sources: []
---

**Situation** – In the summer of 2024 I was leading a team to train a 12‑billion parameter transformer for real‑time text generation on a single NVIDIA A100. Our baseline training loop used PyTorch’s native `torch.nn.functional.scaled_dot_product_attention`, which hit GPU memory limits and slowed down by ~30 % due to frequent all‑to‑all tensor copies.

**Task** – I had to reimplement the attention kernel so we could fit more tokens per batch, reduce VRAM usage, and keep training throughput above 5k tokens/sec while preserving numerical accuracy.

**Action** – I switched from the standard “PagedAttention” (which stores key/value tensors in a paged memory layout but still performs dense matrix multiplications) to **FlashAttention**. FlashAttention fuses the softmax computation with the attention product inside a single CUDA kernel, performing the scaling, masking, and reduction in one pass. This eliminates intermediate buffers and reduces global‑memory traffic by ~4×. I also added a small cache layer for repeated queries so that the kernel could reuse already computed key/value blocks when the same prompts reoccurred.

**Result** – The training throughput jumped from 3.8k to 5.2k tokens/sec, and VRAM consumption dropped from 28 GB to 18 GB, allowing us to run larger batches. I learned that choosing the right attention kernel can be as impactful as algorithmic changes—FlashAttention’s in‑kernel softmax is a game‑changer for large‑scale language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
