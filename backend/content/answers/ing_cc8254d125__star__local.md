---
qid: ing_cc8254d125__star__local
question: 'Explain: Your teacher — Practical Deep Learning for Coders - Practical
  Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 321
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:54-05:00'
sources: []
---

**Situation** – In my final semester I enrolled in *Practical Deep Learning for Coders* to build a real‑world image classifier for a local charity’s donation drive. The dataset was small (≈2 k labeled images) and the deadline was two weeks before the exhibition.

**Task** – My goal was to design, train, and deploy a model that achieved at least 85 % accuracy while keeping inference time under 200 ms on a Raspberry Pi Zero.

**Action** – I applied the course’s core principles: first I used transfer learning with ResNet‑18 from PyTorch Hub, freezing all but the last two layers. I then fine‑tuned using mixed precision training (AMP) to reduce GPU memory usage and speed up epochs. To meet latency constraints, I pruned 30 % of the parameters with magnitude pruning and quantized the model to int8 using PyTorch’s `torch.quantization`. Finally, I wrapped the pipeline in a FastAPI microservice and deployed it on a Raspberry Pi via Docker.

**Result** – The final model scored 88.3 % accuracy on the hold‑out set and ran at ~180 ms per image. The charity collected 15 % more donations than the previous year, and I learned how to balance performance, size, and latency in a production setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
