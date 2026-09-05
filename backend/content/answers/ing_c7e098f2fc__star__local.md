---
qid: ing_c7e098f2fc__star__local
question: 'Explain: Research & Development — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 329
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:25-05:00'
sources: []
---

**Situation** – In my final year of graduate school I was part of a lab that had just built a prototype for a real‑time sentiment analysis engine using transformer models. The demo worked on a laptop, but when we deployed it to our university’s edge servers the latency jumped from 120 ms to over 1 second, breaking the requirement for live chat moderation.

**Task** – I was tasked with reducing inference time while keeping accuracy above 88 % so that the system could be used in production for student‑support bots and campus safety alerts.

**Action** – First I profiled the pipeline with NVIDIA Nsight to identify bottlenecks. The heavy transformer layers were the culprit, so I experimented with model distillation: training a smaller BERT‑base teacher to guide a 4‑layer MobileBERT student. I also implemented quantization‑aware training and switched from PyTorch to ONNX Runtime for faster CPU inference on the edge nodes. Throughout, I maintained an experiment log in Weights & Biases to track accuracy vs latency trade‑offs.

**Result** – The distilled model ran at 300 ms on the edge server— a 75 % reduction in latency—while only dropping accuracy to 87.5 %. Deployment was completed ahead of schedule, and I learned that rigorous profiling combined with lightweight distillation can make cutting‑edge NLP models viable for real‑time applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
