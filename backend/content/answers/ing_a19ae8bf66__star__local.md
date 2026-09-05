---
qid: ing_a19ae8bf66__star__local
question: 'Explain: Test-Time Training: Learning at Inference'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 309
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:56-05:00'
sources: []
---

**Situation**  
At my previous role in a medical imaging startup, we deployed a CNN that predicted lung nodule malignancy from CT scans. During live inference on new patient data, the model’s confidence dropped by ~12% compared to our validation set because of varying scanner protocols.

**Task**  
I needed to keep the model accurate in real‑time without retraining from scratch or compromising latency, while handling unseen domain shifts at deployment.

**Action**  
I implemented a lightweight test‑time training (TTT) pipeline: for each incoming scan I performed a few gradient updates on a small auxiliary loss that minimized reconstruction error of intermediate feature maps. Using PyTorch’s autograd, I froze the backbone and only fine‑tuned a 2‑layer adapter with a learning rate of 1e-4, limiting updates to under 5 ms per image. I also incorporated an entropy regularizer to prevent overfitting on single samples.

**Result**  
After deploying TTT, inference accuracy rose from 84% to 92% AUROC on the live cohort, and confidence scores stabilized. The added latency was <10 ms, well within our SLA. This experience taught me how domain adaptation can be performed “on‑the‑fly” while preserving production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
