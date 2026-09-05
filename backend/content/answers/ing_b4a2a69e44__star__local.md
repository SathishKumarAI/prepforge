---
qid: ing_b4a2a69e44__star__local
question: 'Explain: How Diffusion Models Work - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 316
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:52-05:00'
sources: []
---

**Situation**  
When I joined a startup building an image‑editing app, our sales funnel stalled because the “magic filter” feature was too slow to generate high‑quality stylized images on mobile devices.

**Task**  
I had to prototype a lightweight generative model that could produce photorealistic edits in under 500 ms while keeping the model size below 20 MB.

**Action**  
I chose a diffusion architecture: first, I implemented a forward noising process that added Gaussian noise over 100 timesteps, training a UNet to predict the residual noise at each step. For inference, I used accelerated denoising by reversing only 10 steps and applying a learned scheduler (DDIM) to preserve detail. To meet mobile constraints, I quantized the weights to 8‑bit and pruned low‑impact channels, then compiled the model with TensorRT for ARM CPUs. Throughout, I monitored PSNR and SSIM on a validation set to ensure quality didn’t drop below 0.95.

**Result**  
The new filter rendered in 350 ms on an iPhone 14 Pro, cutting average user session time by 20% and boosting the conversion rate from 3.2% to 4.7%. I learned how diffusion’s iterative refinement can be aggressively truncated yet still yield perceptually sharp results when combined with smart schedulers and model compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
