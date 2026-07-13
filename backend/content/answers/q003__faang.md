---
qid: q003
question: "Explain the difference between supervised, unsupervised, and reinforcement learning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — The distinguishing axis is the *feedback signal* the model learns from. I'll confirm the interviewer wants definitions plus one canonical example and algorithm per paradigm.

**Approach** — Contrast them along what data is available (labels, none, rewards) and what each optimizes.

**Depth** — *Supervised*: learns a mapping from inputs to known labels, minimizing prediction error. Tasks: classification (spam detection) and regression (house prices); algorithms include logistic regression, SVMs, neural nets. *Unsupervised*: no labels—finds latent structure. Tasks: clustering (k-means for customer segments), dimensionality reduction (PCA), density estimation. *Reinforcement*: an agent takes actions in an environment and learns a policy from delayed scalar rewards, maximizing cumulative return—e.g., game playing (AlphaGo), robotics; algorithms like Q-learning, PPO.

**Edge cases** — Boundaries blur: semi-supervised uses few labels plus many unlabeled; self-supervised (how LLMs pretrain) generates labels from the data itself. RL suffers sparse/delayed rewards and credit assignment. Unsupervised results are hard to evaluate without ground truth.

**Optimize & communicate** — I'd tie the choice to data availability: labels are expensive, so unsupervised or self-supervised pretraining plus supervised fine-tuning is common. Framing the three by their supervision signal, then flagging the hybrids, signals I understand the spectrum rather than three rigid boxes.
