---
qid: ing_43a8c85862__faang__local
question: 'Explain: Loss function: reverse KL — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 524
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:42-05:00'
sources: []
---

**Clarify**  
You’re asking why a *reverse Kullback‑Leibler* (KL) loss is used in an **on‑policy distillation** setting at Thinking Machines Lab.  
Assumptions to confirm:  
1. The student policy learns from a teacher that changes every training step (on‑policy).  
2. We want the student’s action distribution to cover all high‑probability actions of the teacher, not just mimic its mean.  

**Approach**  
Explain standard KL vs reverse KL; show how reverse KL penalizes missing modes and encourages coverage. Then connect to on‑policy distillation: the teacher policy is sampled each step, so we need a loss that keeps the student’s entropy high enough to match the teacher’s exploration.

**Depth**  

| Loss | Formula | Effect |
|------|---------|--------|
| **KL(teacher‖student)** | \(\sum_t p_T(t)\log\frac{p_T(t)}{p_S(t)}\) | Penalizes student probability where teacher is high → mode‑seeking, low entropy. |
| **Reverse KL** | \(\sum_t p_S(t)\log\frac{p_S(t)}{p_T(t)}\) | Penalizes student when it assigns mass to actions the teacher rarely takes → encourages covering all teacher modes and maintaining higher entropy. |

In on‑policy distillation, the teacher’s distribution is *non‑stationary*; using reverse KL keeps the student from collapsing into a single action that may appear often in one batch but not overall. Complexity remains \(O(|A|)\) per step, same as cross‑entropy.

**Edge Cases**  
- Teacher becomes deterministic → both losses collapse to the same result.  
- Extremely sparse teacher distribution → reverse KL may over‑inflate student entropy; can add a temperature or entropy regularizer.  
- Numerical stability when \(p_T(t)=0\): clip or use log‑sum‑exp trick.

**Optimize & Communicate**  
I’d mention that in practice we often mix reverse KL with an entropy bonus:  
\(L = \mathbb{E}_{a\sim\pi_S}[\log\frac{\pi_S(a)}{\pi_T(a)}] - \beta H(\pi_S)\).  
This balances coverage and stability. I’d finish by highlighting that this choice directly improves sample efficiency in continual learning scenarios typical at Thinking Machines Lab.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
