---
qid: ing_a5a39d50e2__star__local
question: 'Explain: AI Research & Engineering — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 325
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:16-05:00'
sources: []
---

**Situation:** In my final year of graduate school I was part of a research group developing a reinforcement‑learning agent for autonomous navigation in warehouse robots. We were stuck because the policy network kept overfitting to simulated environments and performed poorly on real hardware.

**Task:** I needed to design an experiment that would let us quantify how much simulation bias existed, build a robust training pipeline, and deliver a model that could run on edge CPUs with <200 ms inference latency.

**Action:** I first set up a mixed‑data curriculum: 70 % synthetic scenes from our simulator, 30 % recorded real‑world trajectories. Using PyTorch Lightning I implemented a domain randomization module that perturbed lighting and friction parameters in the simulator on each episode. To keep inference fast I pruned the network with knowledge distillation into a lightweight MobileNetV2 backbone, then fine‑tuned it on the mixed dataset. Finally, I deployed the model to an NVIDIA Jetson Nano, profiling GPU usage with Nsight Systems and iteratively removing redundant layers until latency hit 180 ms.

**Result:** The new policy achieved a 45 % higher success rate in real warehouse trials compared to the baseline, and inference stayed below the 200 ms target. I learned how to balance simulation fidelity, data‑driven fine‑tuning, and edge deployment constraints—skills that are core to AI research & engineering roles at Anthropic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
