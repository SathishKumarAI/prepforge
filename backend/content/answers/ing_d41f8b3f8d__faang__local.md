---
qid: ing_d41f8b3f8d__faang__local
question: Explain classifier-free guidance. What actually happens when you turn the
  scale up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 420
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:30-05:00'
sources: []
---

**Clarify**  
We’re asked about *classifier‑free guidance* in diffusion models—how the sampling temperature (the “scale”) changes the generated image quality and how increasing it actually influences the generation process.

**Approach**  
1. Restate the mechanism: a single UNet is trained to predict noise with two inputs—(a) a conditional embedding and (b) an unconditional “null” embedding.  
2. Explain the guidance step mathematically.  
3. Discuss what happens as the guidance weight grows, touching on signal amplification vs. variance reduction.

**Depth**  
During sampling we have predictions `ε_cond` (conditioned) and `ε_uncond`.  
Guided noise = ε_uncond + w (ε_cond – ε_uncond).  
- When *w* = 0 we use the unconditional path—high diversity, low fidelity to prompt.  
- As *w* increases, the conditional component is amplified relative to the unconditional baseline, effectively steering the diffusion trajectory toward higher‑probability regions of the conditioned distribution.  
The algorithm keeps the same number of steps; only the noise estimate changes.

**Edge Cases**  
- Extremely high *w* can over‑constrain the sampler: the model may hallucinate features that satisfy the prompt but violate physical plausibility, leading to “mode collapse.”  
- Low *w* yields blurry or unrelated outputs.  
Testing involves varying *w* (0–10) and measuring Inception Score / CLIP similarity.

**Optimize & Communicate**  
An optimal *w* (~7 for Stable Diffusion 1.x) balances fidelity and diversity; we can adaptively tune it per prompt using a small validation set.  
I’d explain this to interviewers by showing the equation, describing how the “scale” acts like an amplification factor on the conditional signal, and noting that we trade off sample quality versus variance as *w* grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
