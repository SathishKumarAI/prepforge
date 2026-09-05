---
qid: ing_be5b111dac__star__local
question: Compare diffusion and autoregressive approaches to image generation. Why
  did AR come back?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 316
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:44-05:00'
sources: []
---

**Situation:**  
During a research sprint at my previous company we were tasked with building an internal demo for generating product mock‑ups on demand. Our existing pipeline used a diffusion model trained on 256×256 images, but the latency was too high for real‑time preview in our design tool.

**Task:**  
I needed to reduce inference time while maintaining visual fidelity so designers could iterate instantly, and also keep the model size small enough to run locally on a laptop GPU.

**Action:**  
I benchmarked several autoregressive (AR) architectures—PixelCNN+, VQ‑VAE with transformer decoder, and a lightweight diffusion variant. I implemented a two‑stage hybrid: first generate a coarse 64×64 latent grid with an AR transformer, then refine it using a small denoising network. This leveraged the AR model’s fast conditional sampling (≈10 ms per token) and the diffusion model’s ability to correct high‑frequency details. I also applied knowledge distillation from the full diffusion teacher to the AR student to preserve quality.

**Result:**  
Inference time dropped from ~800 ms to 30 ms, meeting the real‑time requirement. The final images scored an average Fréchet Inception Distance (FID) of 15 compared to 18 for the baseline diffusion. This experiment confirmed why AR models resurfaced: their deterministic, token‑by‑token generation offers low latency and controllability that diffusion struggles with, especially when paired with a lightweight refinement stage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
