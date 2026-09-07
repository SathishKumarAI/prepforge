---
qid: ing_f8ac3b6248__faang__local
question: 'Explain: Machine Learning — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 549
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:17:59-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an overview of *current* FAANG‑style machine‑learning interview questions—those that test conceptual depth, coding skills, and system design. I’d confirm they want a concise list (≈5–7 topics) plus why each is relevant today.

**Approach**  
1. Identify the core skill sets FAANG looks for: math intuition, algorithmic implementation, data‑engineering, and product impact.  
2. Map recent interview trends to those skills.  
3. For each trend, give a short problem prompt and the key idea it probes.  

**Depth**  
| # | Recent Question Theme | Example Prompt | What It Tests |
|---|-----------------------|---------------|---------------|
| 1 | **Probabilistic Graphical Models** | “Derive MAP inference for a Bayesian network with two hidden nodes.” | Bayesian reasoning, complexity of exact vs. approximate methods. |
| 2 | **Deep‑Learning Architecture Design** | “Design a transformer variant that handles streaming video frames in real time.” | Attention mechanisms, latency trade‑offs, memory scaling. |
| 3 | **Feature Engineering at Scale** | “Given 10M user logs, build an online feature store for click‑prediction.” | Data pipelines, schema evolution, cold‑start strategies. |
| 4 | **Model Explainability & Fairness** | “Show how to audit a credit‑score model for disparate impact.” | SHAP/LIME, fairness metrics, regulatory constraints. |
| 5 | **Reinforcement Learning in Production** | “Plan an A/B test framework for an RL‑based recommendation engine.” | Exploration–exploitation balance, reward shaping, safety nets. |
| 6 | **Edge ML & Quantization** | “Quantize a ResNet50 to 8‑bit while keeping <5% accuracy loss on ImageNet.” | Bit‑width effects, calibration datasets, deployment constraints. |

**Edge Cases**  
- Models that overfit small validation sets.  
- Non‑stationary data streams causing concept drift.  
- Resource limits on GPU/TPU clusters leading to sub‑optimal batching.

**Optimize & Communicate**  
Explain how each question forces the candidate to trade off statistical rigor against engineering feasibility—exact inference vs. variational methods, deep vs. lightweight nets for latency, centralized vs. federated feature stores. Conclude by noting that FAANG values *problem framing* as much as the final answer; thus a structured explanation is worth as many points as a perfect code snippet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
