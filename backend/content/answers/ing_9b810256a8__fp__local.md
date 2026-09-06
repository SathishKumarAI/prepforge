---
qid: ing_9b810256a8__fp__local
question: 'Explain: RLHF: The Foundation — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 607
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:11-05:00'
sources: []
---

**RLHF from first principles**

The core problem is *intractable objective alignment*: a language model’s likelihood objective (maximizing next‑token probability) does not encode what humans actually want.  
We formalize a human preference distribution \(p_{\text{pref}}(x)\) over generated sequences \(x\). Directly optimizing \(\mathbb{E}_{x\sim p_\theta}[ \log p_{\text{pref}}(x)]\) is impossible because we cannot evaluate \(p_{\text{pref}}\).  

**Step 1 – Preference modelling.**  
Collect a dataset of human‑rated pairs \((x_i, y_i)\) where \(y_i\) is preferred to \(x_i\). Train a *reward model* \(R_\phi(x)\) that predicts the probability a sequence will be chosen. This turns subjective preference into a differentiable scalar reward.

**Step 2 – Policy optimisation.**  
Treat the language model as a stochastic policy \(\pi_\theta(a_t|h_t)\). The objective becomes maximizing expected cumulative reward:
\[
J(\theta)=\mathbb{E}_{x\sim\pi_\theta}\!\left[\sum_{t} R_\phi(x_{1:t})\right].
\]
The optimality principle is *policy gradient*; in practice we use proximal policy optimisation (PPO) to constrain the KL divergence between successive policies, ensuring stable learning.

**DPO – Direct Preference Optimisation.**  
Instead of sampling from \(\pi_\theta\), DPO optimises a *ranking loss* that directly matches the reward model’s preference scores:
\[
L_{\text{DPO}}(\theta)= -\log\!\frac{\exp(R_\phi(x^+))}{\exp(R_\phi(x^+))+\exp(R_\phi(x^-))},
\]
with \(x^+, x^-\) a human‑preferred pair.  
Mathematically, DPO is equivalent to a *KL‑regularised* likelihood maximisation; it implicitly enforces the same trust region as PPO but without Monte Carlo rollouts.

**Non‑obvious insight**

Both RLHF and DPO reduce variance by enforcing a *soft constraint* (KL or ranking loss) that keeps the updated policy close to the pre‑trained model. This regularisation is not merely stability—it acts as an implicit Bayesian prior over policies, preventing catastrophic forgetting of useful linguistic structure while still steering towards human values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
