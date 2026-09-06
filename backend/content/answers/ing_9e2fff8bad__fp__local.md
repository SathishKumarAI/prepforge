---
qid: ing_9e2fff8bad__fp__local
question: 'Explain: Setup. — Rethinking On-Policy Distillation of Large Language Models:
  Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 391
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:39-05:00'
sources: []
---

## Re‑thinking on‑policy distillation for large language models  
*(setup only)*  

Large language models (LLMs) are trained with *off‑policy* objectives: a static dataset of text pairs \((x,y)\) is fed to the network and gradients are computed via maximum likelihood. The policy that generates \(y\) given \(x\) is **not** the one that will be used at inference time; it is a surrogate that approximates human language distribution. When we *distill* such an LLM into a smaller student, we typically freeze the teacher and let the student learn to mimic its output probabilities on a held‑out corpus. This procedure assumes the teacher’s policy is fixed and fully expressive.

In practice, inference requires *on‑policy* sampling: the model generates tokens sequentially, conditioning each new token on all previous ones it has produced. The distribution of these generated sequences diverges from any static dataset because the student’s own errors compound over time. Hence the *on‑policy* loss is a **distribution shift** problem: we are training on a different distribution than the one we will actually sample from.

The core idea of the paper is to reframe distillation as an **online reinforcement learning** task.  
1. **State** = current partial sequence \(s_t\).  
2. **Action** = next token \(a_t\).  
3. **Reward** = negative log‑likelihood under the teacher for the full generated sequence (or a proxy like BLEU).  

Thus the student learns to maximize expected reward *while generating*, ensuring that its own policy is aligned with the distribution it will actually induce. This turns distillation into an optimization over trajectories, not just static pairs, and guarantees consistency between training and inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
