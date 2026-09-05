---
qid: vq_1841c9087a__fp__local
question: '50 Question 50: What challenges do LLMs face in deployment?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 421
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:40-05:00'
sources: []
---

**Deploying large language models (LLMs) is a constrained optimisation problem with three intertwined axes: cost‑efficiency, reliability, and safety.**

1. **Compute & latency budget** – A model’s inference time scales linearly with its parameters and the precision of the tensors. To meet real‑time constraints on edge or mobile devices, one must trade off *model size* against *latency*, a classic convex optimisation where the objective is total cost = (compute × energy) + (delay × user churn). Techniques such as knowledge distillation or dynamic sparsity are solutions that push the frontier of this trade‑off.

2. **Data drift & robustness** – The distribution of user queries can shift rapidly. An LLM that was optimal during training may become suboptimal once new slang, jargon, or domain‑specific terminology emerges. This is a problem of *online learning* under non‑stationary data: the model must continually adapt without catastrophic forgetting, often requiring continual fine‑tuning pipelines and monitoring of KL divergence between live and training distributions.

3. **Safety & alignment** – The objective function that drives language generation (maximising token likelihood) is misaligned with human values. Deployments must embed *constrained optimisation* layers—prompt‑engineering constraints, reinforcement learning from human feedback (RLHF), or fine‑tuned classifiers—to suppress toxic or hallucinated outputs.

**Non‑obvious insight:**  
The bottleneck in most deployments is not the raw compute but the *information bottleneck* created by model quantisation and compression. When a model is aggressively quantised, its internal representations collapse into a low‑dimensional manifold that loses fine semantic distinctions. This manifests as increased hallucination rates, especially for rare entities. Therefore, preserving a high‑resolution *semantic manifold*—by selectively keeping higher precision in attention heads or embedding layers—is often more effective than uniformly reducing bit‑width across the entire network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
