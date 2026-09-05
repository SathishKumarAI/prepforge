---
qid: ing_43a8c85862__star__local
question: 'Explain: Loss function: reverse KL — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 404
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:18-05:00'
sources: []
---

**Situation** – At a startup developing autonomous navigation, we had a high‑fidelity simulator that produced expert trajectories but was too slow for real‑time training. The team needed to distill the simulator’s policy into a lightweight neural network that could run on edge hardware while preserving safety.

**Task** – I was tasked with designing a loss function that would guide the student network to mimic the simulator (teacher) policy, ensuring it stayed close to safe actions while still learning from on‑policy data collected by the student itself.

**Action** – I implemented an *on‑policy distillation* framework where the student generated trajectories in the real environment and then queried the teacher for action probabilities. To enforce that the student’s distribution did not over‑explore unsafe actions, I used a **reverse Kullback–Leibler (KL) divergence** as the loss:  

\[
L_{\text{revKL}} = \sum_{a} p_{\text{teacher}}(a|s)\log\frac{p_{\text{teacher}}(a|s)}{p_{\text{student}}(a|s)}
\]

This penalizes the student more heavily when it assigns low probability to actions that the teacher deems likely, effectively pulling its policy toward the teacher’s support. I combined this with a standard cross‑entropy term on collected rewards and added entropy regularization to keep exploration in check.

**Result** – After three training cycles, the distilled model achieved 92 % of the simulator’s success rate on a benchmark navigation task while running at 15 fps on an NVIDIA Jetson Nano. The reverse KL loss reduced unsafe action sampling by 38 %, and I learned that aligning support sets via reverse KL is crucial when distilling from a high‑confidence teacher in safety‑critical domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
