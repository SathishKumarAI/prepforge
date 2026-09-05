---
qid: ing_38f1f29512__star__local
question: Compare projector/adapter designs - MLP vs resampler vs cross-attention.
  How does the choice interact with the training recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 464
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:36-05:00'
sources: []
---

**Situation** – In the summer of 2024 I led a research sprint to replace the 3‑D MRI reconstruction module in our clinical AI platform. The baseline used a shallow MLP projector that mapped low‑resolution feature maps into high‑resolution outputs, but its validation loss plateaued at 0.32 and inference latency was 1.8 s per scan.

**Task** – I needed to design a more expressive projection head that could capture long‑range dependencies without blowing up GPU memory or inference time, while keeping the training recipe (optimizer, learning rate schedule) stable.

**Action** – First I benchmarked three alternatives:  
- **MLP projector** (baseline), 4× fully connected layers, 512 hidden units.  
- **Resampler** that upsamples via a learned interpolation kernel followed by depthwise‑separable convolutions; this added only ~10 % extra FLOPs.  
- **Cross‑attention projector** where each high‑res pixel attends to the entire low‑res feature map using scaled dot‑product attention, implemented with sparse masking to limit memory.

I swapped in each head while keeping AdamW (lr=1e‑4) and a cosine decay schedule. For the cross‑attention variant I added layer‑norm scaling to prevent gradient explosion. I also introduced an auxiliary reconstruction loss at intermediate resolutions to stabilize training.

**Result** – The resampler achieved 0.28 validation loss in 12 epochs, with inference time dropping to 1.3 s; the cross‑attention head pushed loss further to 0.25 but required a lower initial lr (5e‑5) and a two‑phase schedule (warmup + decay). I learned that richer projection mechanisms demand tighter regularization and careful learning‑rate tuning, but they can yield measurable gains in both accuracy and speed when integrated thoughtfully into the training recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
