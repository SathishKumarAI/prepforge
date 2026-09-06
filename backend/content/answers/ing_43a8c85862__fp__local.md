---
qid: ing_43a8c85862__fp__local
question: 'Explain: Loss function: reverse KL — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 658
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:29:52-05:00'
sources: []
---

### Reverse‑KL Loss in On‑Policy Distillation

**Problem setting.**  
We have a *teacher* policy \( \pi_T(a|s) \) that has already mastered a task and a *student* policy \( \pi_\theta(a|s) \) we wish to train online, i.e., while interacting with the environment. The goal is for the student to mimic the teacher’s behavior **without** accessing past data (on‑policy).  

**Why KL?**  
The Kullback–Leibler divergence measures how well one distribution covers another. In distillation we want the student’s action distribution to be *close* to the teacher’s, but we must also keep the student *exploratory* so it can learn from new rewards. The **reverse KL**,
\[
D_{\text{KL}}\!\bigl(\pi_T\,\|\,\pi_\theta\bigr)
=\mathbb E_{a\sim \pi_T}\!\left[\log \frac{\pi_T(a|s)}{\pi_\theta(a|s)}\right],
\]
penalizes the student heavily when it assigns low probability to actions that the teacher frequently selects. This encourages *coverage* of the teacher’s mode(s), unlike forward KL which only penalizes missing modes.

**Loss construction.**  
During an on‑policy roll‑out we observe \((s_t,a_t)\) from the current policy \( \pi_\theta\). We form a surrogate objective
\[
L(\theta)= -\,\mathbb E_{\tau}\!\Bigl[\sum_{t} r(s_t,a_t)
+ \beta\, D_{\text{KL}}\!\bigl(\pi_T(\cdot|s_t)\,\|\,\pi_\theta(\cdot|s_t)\bigr)\Bigr],
\]
where \(r\) is the environment reward and \(\beta>0\) trades off task performance against teacher imitation.  
The gradient w.r.t.\(\theta\) contains two terms: a policy‑gradient component from \(r\), and an entropy‑regularized term from the KL that pulls \(\pi_\theta\) toward \(\pi_T\).

**Non‑obvious insight.**  
Because we sample actions from \(\pi_\theta\) but evaluate the KL with respect to \(\pi_T\), the estimator is *unbiased* only if we reweight by the importance ratio \(\frac{\pi_T}{\pi_\theta}\). In practice, this ratio is approximated online (e.g., via a running average of log‑probabilities). The key subtlety: **reverse KL pushes the student to avoid under‑exploring actions that the teacher deems valuable**, which forward KL would ignore. This property stabilizes learning when the teacher’s policy is sparse or multi‑modal, ensuring the student does not collapse to a suboptimal local mode during early training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
