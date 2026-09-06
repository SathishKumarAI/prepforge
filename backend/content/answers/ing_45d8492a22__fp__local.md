---
qid: ing_45d8492a22__fp__local
question: 'Explain: Baselines in Policy Gradients ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 577
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:56-05:00'
sources: []
---

**Baselines in Policy Gradients – the “why” and a subtle insight**

The core problem policy‑gradient methods solve is: *maximize expected return*  
\[
J(\theta)=\mathbb{E}_{\tau\sim \pi_\theta}\!\left[\sum_{t} r_t\right].
\]
A Monte‑Carlo estimator of its gradient is
\[
\nabla J(\theta)\approx \frac1N\sum_i G_i\,\nabla_{\theta}\log\pi_\theta(a_i|s_i),
\]
where \(G_i\) is the return from step \(i\).  
Because \(G_i\) is a noisy, high‑variance random variable, this estimator fluctuates wildly.  

A *baseline* \(b(s)\) is any function of state (independent of action) that we subtract and add back:
\[
\nabla J(\theta)=\mathbb{E}\!\left[(G_i-b(s_i))\,\nabla_{\theta}\log\pi_\theta(a_i|s_i)\right].
\]
The subtraction does **not** change the expectation (it is a control variate), but it reduces variance exactly when \(b(s)\) approximates the expected return from that state. This is Rao‑Blackwellization: conditioning on the state eliminates action‑specific noise.

A common choice is the *value function* \(V^\pi(s)=\mathbb{E}[G|s]\). Then
\(G_i-b(s_i)=A^\pi(s_i,a_i)\), the advantage. The policy gradient becomes
\[
\nabla J(\theta)=\mathbb{E}\!\left[A^\pi(s,a)\,\nabla_{\theta}\log\pi_\theta(a|s)\right],
\]
which is both unbiased and has lower variance.

**Non‑obvious insight:**  
Using a *learned* baseline introduces no bias **provided the baseline is independent of the current action**. If you let the baseline depend on \(a\) (e.g., an action‑value estimate), the estimator becomes biased but can still be useful if the bias is small compared to variance reduction. Thus, careful design of baselines—state‑only, possibly learned—balances unbiasedness against practical performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
