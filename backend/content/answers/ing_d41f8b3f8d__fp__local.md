---
qid: ing_d41f8b3f8d__fp__local
question: Explain classifier-free guidance. What actually happens when you turn the
  scale up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 512
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:03-05:00'
sources: []
---

**Classifier‑free guidance** is a technique for steering diffusion models *without* an external classifier.  
It exploits that a diffusion model can be trained on two conditional distributions in one network:  

1. **Conditioned** – \(p_\theta(x_t\mid y)\) (e.g., “image of a cat”).  
2. **Unconditioned** – \(p_\theta(x_t)\) (the unconditional prior).  

During training the model sees mixed inputs: with probability ½ it receives a real conditioning vector \(y\), and with probability ½ it receives an empty token that forces the network to learn the unconditional distribution.  
At inference, we evaluate both predictions for the same noisy image \(x_t\):  

\[
s_{\text{cond}} = f_\theta(x_t,\; y), \qquad
s_{\text{uncond}} = f_\theta(x_t,\;\emptyset).
\]

The *guidance* step combines them linearly:

\[
s_{\text{guided}} = s_{\text{uncond}}
      + w\, (s_{\text{cond}}-s_{\text{uncond}})
    = (1-w)s_{\text{uncond}}+w\,s_{\text{cond}},
\]

where \(w>0\) is the guidance scale.  
Mathematically this is a **convex interpolation** between unconditional and conditional score estimates, effectively moving the diffusion trajectory toward regions favored by the conditioning while preserving overall plausibility.

Why it works: the model’s *score* (gradient of log‑density) is an optimal direction for sampling. By weighting the conditional part more heavily, we bias the walk toward higher‑likelihood states under the conditioned distribution. The unconditioned component acts as a regularizer that keeps the trajectory from drifting into implausible regions.

**Non‑obvious insight:** Increasing \(w\) does not merely sharpen the conditioning; it also **rescales the noise schedule implicitly**. A large \(w\) amplifies the conditional gradient, which in turn forces earlier denoising steps to be more deterministic. Consequently, samples become sharper but risk *mode collapse*—the model may ignore fine‑grained stochasticity and produce overly smooth outputs. Understanding this trade‑off explains why very high guidance often yields less diverse images.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
