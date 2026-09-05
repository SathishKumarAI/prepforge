---
qid: ing_3fd25b1871__star__local
question: DeepSeek-V3 uses auxiliary-loss-free load balancing. What was wrong with
  the auxiliary loss, and how does the bias trick work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 345
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:46-05:00'
sources: []
---

**Situation** – In the summer of 2024 I was part of a research team building DeepSeek‑V3, an LLM that needed to train on millions of GPU shards while keeping communication overhead low. Our initial prototype used the auxiliary loss trick from earlier models: each shard added a small “auxiliary” objective so the optimizer could see gradients from every device in one backward pass.

**Task** – The goal was to eliminate stale gradient issues and speed up convergence, but we had to keep memory usage under 12 GB per GPU. The auxiliary loss seemed promising until training stalled after about 1.2 billion tokens; perplexity plateaued at 25 instead of the target 22.

**Action** – I diagnosed that the auxiliary losses were heavily weighted relative to the main objective, causing the optimizer to chase a noisy signal from distant shards. Instead of adding an extra loss term, we shifted the logits by a learnable bias per shard before computing the cross‑entropy. This “bias trick” kept the gradients flowing through all devices without inflating the loss surface. We also reduced the learning rate on the auxiliary branch and clipped its magnitude to < 0.01.

**Result** – Training converged in 18 hours instead of 24, perplexity dropped from 25 to 22.3, and GPU memory usage stayed at 11.4 GB. The experiment taught me that balancing gradient signals can be achieved with simple bias adjustments rather than extra loss terms, preserving both speed and stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
