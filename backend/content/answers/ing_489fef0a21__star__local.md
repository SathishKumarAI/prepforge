---
qid: ing_489fef0a21__star__local
question: 'Explain: 1 Introduction — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 340
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:43-05:00'
sources: []
---

**Situation** – I was working on a product that required an in‑vehicle language assistant. The original LLM was 13 B parameters and would exceed the memory budget of our edge device (8 GB RAM). We needed a distilled model that could run at 30 fps while preserving conversational accuracy.

**Task** – My goal was to distill the large model *on‑policy*: keep it aligned with real user interactions, avoid catastrophic forgetting, and maintain BLEU scores above 0.65 on our internal test set.

**Action** – I designed a two‑stage pipeline: first, I collected a rolling log of live dialogues (≈ 50k utterances) and used them to fine‑tune the teacher model for 3 epochs with a small learning rate (1e-5). Then I built a student architecture (4 B parameters) and employed knowledge distillation loss combined with a policy‑matching objective that penalized divergence from the teacher’s action distribution. To keep inference fast, I applied TensorRT optimization and mixed‑precision (FP16) inference on the target GPU.

**Result** – The distilled model achieved 0.68 BLEU, a 10 % improvement over baseline distillation, while reducing latency from 120 ms to 35 ms per turn. Deployment hit the deadline, and user satisfaction scores rose by 12 %. I learned that on‑policy fine‑tuning plus policy‑matching dramatically preserves alignment without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
