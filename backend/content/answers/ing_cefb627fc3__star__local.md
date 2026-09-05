---
qid: ing_cefb627fc3__star__local
question: 'Explain: 2.3 Dynamic Metrics — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 356
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:07-05:00'
sources: []
---

**Situation** – At my last company we were launching a lightweight chatbot that had to run on edge devices. The base LLM was 12 B parameters, but the target device could only handle ~200 M FLOPs per inference. Our earlier static distillation approach produced a model that met size constraints but lagged behind the source in conversational nuance, dropping user satisfaction scores from 4.6 to 3.8/5.

**Task** – I was tasked with creating a dynamic metric‑driven on‑policy distillation pipeline so the student could “learn” what mattered most during deployment, rather than just mimic logits.

**Action** – First, I built a feedback loop that collected real‑time interaction logs and computed *phenomenological* scores: perplexity, BLEU for intent matching, and an engagement metric derived from session length. These scores fed into a multi‑objective loss where the student’s policy gradient was weighted by the dynamic metrics. I implemented this in PyTorch Lightning, using a custom `DynamicMetricCallback` that updated weights every 10k steps based on rolling averages. We also introduced a *mechanism* of selective attention: the student focused its capacity on high‑variance tokens identified via entropy spikes.

**Result** – After two distillation cycles, the student model dropped from 12 B to 250 M parameters while restoring user satisfaction to 4.5/5 and reducing latency by 35%. I learned that treating evaluation metrics as learnable objectives can bridge the gap between size constraints and quality in real‑world LLM deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
