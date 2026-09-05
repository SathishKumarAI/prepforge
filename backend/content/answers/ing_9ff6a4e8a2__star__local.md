---
qid: ing_9ff6a4e8a2__star__local
question: Explain PPO in the RLHF context. Why is there a KL penalty against a reference
  model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 344
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:09-05:00'
sources: []
---

**Situation:**  
In my last role I was building an AI assistant that needed to follow user instructions while staying safe and consistent with our company’s policy. The model had been fine‑tuned on human preference data (RLHF), but early deployments revealed occasional hallucinations and off‑topic replies.

**Task:**  
I had to design a reinforcement learning loop that would keep the agent aligned with the reference “safe” policy while still improving performance on user‑desired tasks.

**Action:**  
I implemented Proximal Policy Optimization (PPO) as the training algorithm. PPO updates the policy by clipping the probability ratio between the new and old policies, which prevents huge jumps that could break safety constraints. Because we were learning from a reference model (the pre‑fine‑tuned policy), I added a KL‑divergence penalty to the objective:  
`L = E[ratio * A] – β * KL(policy || ref_policy)`.  
This term softly discourages the agent from straying too far from the trusted baseline, ensuring that any exploration is bounded by a measured similarity metric. In practice I tuned `β` so that the average KL stayed below 0.01 per step, using TensorBoard to monitor both reward and divergence.

**Result:**  
After three training epochs the assistant’s hallucination rate dropped from 12% to under 2%, while user satisfaction scores rose by 15%. The KL penalty kept policy drift minimal, allowing me to deploy the model safely with confidence that it would not deviate from the reference behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
