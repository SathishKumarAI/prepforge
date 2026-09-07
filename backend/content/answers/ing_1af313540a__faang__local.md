---
qid: ing_1af313540a__faang__local
question: 'Explain: Expected Grad-Log-Prob Lemma ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 597
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:52-05:00'
sources: []
---

**Clarify**  
The question asks for an overview of *Part 3* from the “Expected Grad‑Log‑Prob Lemma” section in the Spinning‑Up docs, which introduces policy‑gradient methods for reinforcement learning (RL). I’ll assume the reader knows basic RL terminology (policy, reward, trajectory) but not the math behind stochastic policy gradients.

**Approach**  
1. Summarize the lemma’s statement and why it matters.  
2. Explain how we turn the expectation over trajectories into an estimator that can be computed from samples.  
3. Show the classic REINFORCE update and its variance‑reduction trick (baseline).  

**Depth**  
- The lemma proves  
  \[
  \nabla_\theta J(\pi_\theta)=\mathbb{E}_{\tau}\!\left[\sum_{t=0}^{T-1}\nabla_\theta\log\pi_\theta(a_t|s_t)\,R(\tau)\right]
  \]  
  where \(J\) is expected return and \(R(\tau)\) the total reward of trajectory \(\tau\).  
- In practice we sample a batch of trajectories, compute each term inside the sum, and average:  
  \[
  \hat{g}=\frac1B\sum_{b=1}^{B}\sum_t\nabla_\theta\log\pi_\theta(a_t^b|s_t^b)\,\hat{R}_t^b
  \]  
  with \(\hat{R}_t^b\) the discounted return from time \(t\).  
- Adding a baseline \(b(s_t)\) gives  
  \[
  \nabla_\theta J \approx \frac1B\sum_{b,t}\nabla_\theta\log\pi_\theta(a_t^b|s_t^b)(\hat{R}_t^b-b(s_t^b))
  \]  
  which keeps the estimator unbiased but lowers variance.

**Edge Cases**  
- High‑variance gradients when rewards are sparse or delayed.  
- Non‑differentiable policies (e.g., discrete actions) require REINFORCE; continuous actions can use reparameterization tricks.  
- Off‑policy data: importance sampling ratios must be clipped to avoid exploding gradients.

**Optimize & Communicate**  
Mention that modern algorithms (PPO, A2C) build on this lemma by adding clipping or actor–critic architectures to stabilize learning. Conclude with a quick sanity check: the update direction aligns with increasing expected return because \(\nabla_\theta\log\pi\) points toward actions that yielded higher rewards. This concise narrative showcases structured reasoning and technical depth, fitting a FAANG interview style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
