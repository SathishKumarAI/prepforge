---
qid: ing_15a2f89bf3__star__local
question: 'Explain: Ideally, it should automatically shrink the capacity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 335
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:37-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were rolling out an anomaly‑detection model for credit card fraud. The initial neural net had 12 layers and 2 M parameters, which worked great in training but ate up 250 MB of GPU memory during inference on our edge devices.

**Task** – I was tasked to reduce the model’s footprint by at least 50 % while keeping its F1‑score above 0.92, so we could ship it to mobile wallets without sacrificing accuracy.

**Action** – I first applied *structured pruning* using TensorFlow Model Optimization Toolkit: iteratively zeroed out entire filters whose L2 norm fell below a threshold and fine‑tuned the network for two epochs after each pruning step. Next, I switched from ReLU activations to *Swish* to maintain representational power with fewer parameters. Finally, I quantized the weights to 8‑bit integers during inference, which preserved precision because we had already pruned away the most sensitive units.

**Result** – The final model ran in 60 ms on a Snapdragon 888, used only 90 MB of memory, and its F1‑score dropped just 0.004 (from 0.93 to 0.926). I learned that combining pruning with activation redesign and quantization can shrink capacity dramatically without hurting performance—exactly what the interview question was hinting at.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
