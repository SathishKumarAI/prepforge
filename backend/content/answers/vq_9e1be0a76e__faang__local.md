---
qid: vq_9e1be0a76e__faang__local
question: Q1 . What is Generative AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 461
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:14-05:00'
sources: []
---

**Q1 – What is Generative AI?**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Generative AI* refers to models that can produce new content—text, images, audio, or code—rather than merely classify or retrieve existing data.  The core goal is generation: given some input (prompt, seed vector, context), the model outputs a plausible artifact that follows learned patterns.  I’ll assume we’re talking about large‑scale neural nets (transformers, diffusion models) trained on massive corpora. |
| **Approach** | 1️⃣ Define “generation” vs. “discrimination.” <br>2️⃣ Highlight typical architectures: transformer decoders for text, diffusion or GANs for images, autoregressive waveforms for audio.<br>3️⃣ Explain the training objective (cross‑entropy, log‑likelihood, adversarial loss). |
| **Depth** | • **Text** – GPT‑style transformers maximize likelihood of next token; fine‑tuning shifts style/knowledge. <br>• **Images** – Diffusion models iteratively denoise a random noise vector; GANs pit generator vs discriminator. <br>• **Audio & code** – Similar autoregressive or latent-space techniques.  Complexity: training cost ≈ O(#parameters × #tokens).  Inference scales with sequence length; beam search, top‑k sampling trade off speed vs. creativity. |
| **Edge Cases** | • Hallucinations (outputting plausible but false facts). <br>• Data bias—model may reproduce harmful stereotypes. <br>• Catastrophic forgetting if fine‑tuned on narrow data. |
| **Optimize & Communicate** | Emphasize that generative AI is *data‑driven creativity*: the more diverse, high‑quality training set and the better the architecture, the richer the output.  I’d finish by noting ongoing research into controllable generation (prompt engineering, conditioning) and safety mitigations (alignment, RLHF). |

*Word count: ~210 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
