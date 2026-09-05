---
qid: ing_c1da5708d6__star__local
question: 'Explain: Illustration — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 327
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:28-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building an algorithmic trading bot that learned from a large ensemble of reinforcement‑learning agents. The production model had to run in real time on edge devices with limited memory and strict latency requirements.

**Task:**  
I needed to compress the 12‑agent ensemble into a single lightweight policy while preserving its high‑frequency decision quality, all without re‑training from scratch or sacrificing market‑impact metrics.

**Action:**  
I implemented an on‑policy distillation pipeline. First, I collected 1 million state–action pairs by running the live bot for two weeks and logged the ensemble’s soft action distributions. Then, using PyTorch, I trained a student network with a Kullback–Leibler loss that matched those soft labels while also minimizing a small cross‑entropy term against the ground‑truth reward signal. To keep latency low, I pruned the student to 3 layers and quantized weights to int8. During training I performed iterative fine‑tuning on fresh market data so the student stayed aligned with the evolving ensemble policy.

**Result:**  
The distilled model ran in under 5 ms per inference, a 40% reduction in memory usage, and maintained 96% of the ensemble’s Sharpe ratio while reducing execution cost by 30%. I learned that on‑policy distillation can be a practical bridge between powerful offline ensembles and real‑time deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
