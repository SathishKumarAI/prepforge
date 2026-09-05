---
qid: ing_42e31d59da__star__local
question: 'Explain: 8.5.3. Implementation from Scratch ¶ — 8.5. Batch Normalization
  \u2014 Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 359
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:34-05:00'
sources: []
---

**Situation** – In my senior thesis I was training a ResNet‑34 on the CIFAR‑10 dataset. Training stalled after only a few epochs; gradients exploded and validation accuracy hovered around 45 %.  
**Task** – I had to stabilize training, reduce internal covariate shift, and get the model to converge in under 50 epochs without relying on a pre‑built layer from PyTorch.  
**Action** – I wrote my own batch‑norm routine from scratch: for each mini‑batch I computed per‑channel mean μ and variance σ², then normalized activations as \( \hat{x} = (x-μ)/\sqrt{σ^2+ε}\). I introduced learnable scale γ and shift β parameters initialized to 1 and 0 respectively. For inference I maintained running estimates of μ and σ² using momentum = 0.9, updating them during training with `running_mean = 0.9*running_mean + 0.1*batch_mean`. I integrated this into the forward pass of each residual block, carefully broadcasting γ and β across spatial dimensions. I also added a small ε (1e‑5) to avoid division by zero and used backpropagation to update γ and β via standard chain rule.  
**Result** – After adding batch‑norm, training stabilized immediately; validation accuracy jumped to 82 % within 30 epochs, and loss curves became smooth. I learned that implementing the math manually deepens my understanding of gradient flow and that proper running statistics are crucial for deployment performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
