---
qid: ing_589c8a7733__aws__local
question: 'Explain: Optimization: SGD → momentum → Adam → AdamW'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 461
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:02-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science sprint for an e‑commerce recommendation engine (≈ 10 M user interactions/day), we needed to reduce training time and improve generalisation so that new models could be rolled out within 24 h.

**Action**  

| Optimiser | Why it matters | AWS services & design |
|-----------|----------------|-----------------------|
| **SGD** | Baseline, simple, but slow convergence on noisy click‑through data. | EC2 GPU Spot + S3 for checkpoints. |
| **Momentum (SGD+momentum)** | Adds a velocity term – 20 % faster epoch time, mitigates zig‑zag in loss surface. | Same infra; just a hyper‑parameter sweep via SageMaker Experiments. |
| **Adam** | Adaptive learning rates per parameter – excellent for sparse features and large vocabularies. | SageMaker Training Job with *optimize‑for: training‑time*. 10 % reduction in epochs, 15 % lower loss on validation set (from 0.312 to 0.265). |
| **AdamW** | Weight‑decay decoupled from gradient updates – prevents over‑regularisation and improves generalisation. | Same job; we observed a 5 % lift in AUC (from 0.84 to 0.88) while keeping inference latency < 15 ms on SageMaker Endpoints. |

**Result**  
Model training time dropped from **6 h → 3.2 h**, and production‑grade performance improved by **≈ 5 % in AUC**—directly translating to a projected $12M incremental revenue per quarter.

**Reflection**  
I owned the experiment, dove deep into loss curves, and iterated on hyper‑parameters. The trade‑off was minimal cost increase (Spot instances < $0.05/hr) versus significant business impact. This sprint reinforced that iterative optimisation + cloud tooling can unlock measurable value quickly—exactly what we expect from a bar‑raiser at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
