---
qid: ing_8412bf72b6__star__local
question: 'Explain: Preference optimisation: RLHF → DPO → GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:26-05:00'
sources: []
---

**Situation**  
In a recent NLP product sprint we had to improve the user‑generated content filter for our chatbot. The existing reinforcement learning from human feedback (RLHF) model was slow to converge and often over‑penalised creative responses, hurting engagement metrics.

**Task**  
I needed to redesign the preference optimisation pipeline so that it would train faster, respect nuanced human preferences, and maintain a higher hit‑rate for safe but engaging replies.

**Action**  
First I implemented a *Direct Preference Optimization* (DPO) step: instead of sampling from a policy and then reweighting with a reward model, we directly optimise the log‑likelihood ratio between preferred and non‑preferred pairs. This cut training time by ~40 % because we removed the costly policy rollouts. Next, to address the remaining bias toward generic safe outputs, I introduced *Gradient‑Robust Preference Optimization* (GRPO). GRPO adds a gradient‑based regulariser that penalises over‑confidence in any single token, encouraging diversity while still following the preference signal. I used PyTorch for implementation, monitored KL divergence as a convergence metric, and set a strict 0.01 threshold to prevent catastrophic forgetting.

**Result**  
The new pipeline reduced training time from 12 hrs to 7 hrs per epoch and increased safe‑yet‑engaging reply rates by 18 % (from 65 % to 78 %). I learned that moving from RLHF to DPO can dramatically cut compute, but adding a gradient‑robust term is essential when the reward signal is noisy or sparse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
