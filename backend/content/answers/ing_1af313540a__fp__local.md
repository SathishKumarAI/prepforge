---
qid: ing_1af313540a__fp__local
question: 'Explain: Expected Grad-Log-Prob Lemma ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 780
total_tokens: 969
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:03:39-05:00'
sources: []
---

### Expected Grad‑Log‑Prob Lemma – Part 3: Policy Optimization (Spinning Up)

**Problem**  
We want to maximize the expected return \(J(\theta)=\mathbb{E}_{\tau\sim p_\theta} [R(\tau)]\) over a stochastic policy \(\pi_\theta(a|s)\). The gradient of this expectation is hard because the distribution \(p_\theta\) depends on \(\theta\).

**Derivation from first principles**  
Write \(J(\theta)=\int p_\theta(\tau)R(\tau)d\tau\). Differentiating under the integral sign gives  

\[
\nabla_\theta J = \int R(\tau)\nabla_\theta p_\theta(\tau)d\tau
                 = \int R(\tau)p_\theta(\tau)\frac{\nabla_\theta p_\theta(\tau)}{p_\theta(\tau)}d\tau .
\]

The ratio is the *score function* \(g_\theta(\tau)=\nabla_\theta\log p_\theta(\tau)\). Thus  

\[
\nabla_\theta J = \mathbb{E}_{\tau\sim p_\theta}[\,R(\tau) g_\theta(\tau)\,].
\]

Because the trajectory density factorises into a product of per‑step policy probabilities (the dynamics are independent of \(\theta\)), \(g_\theta(\tau)=\sum_{t=0}^{T-1}\nabla_\theta\log\pi_\theta(a_t|s_t)\). Substituting yields  

\[
\nabla_\theta J = \mathbb{E}_{\tau}\Bigl[\Bigl(\sum_{t}R(\tau)\Bigr)
   \sum_{t'}\nabla_\theta\log\pi_\theta(a_{t'}|s_{t'})\Bigr].
\]

Re‑ordering the sums and noting that \(R(\tau)=\sum_t r_t\) gives the **policy gradient theorem**:  

\[
\nabla_\theta J = \mathbb{E}_{\tau}\Bigl[\sum_{t}\nabla_\theta\log\pi_\theta(a_t|s_t)\,
   Q^{\pi}(s_t,a_t)\Bigr].
\]

**Why it works**  
The lemma exploits *information‑theoretic* identities: the score function is an unbiased estimator of the log‑derivative, and the expectation over trajectories turns a derivative of a probability into a product of a reward signal and a policy gradient. It’s essentially a change‑of‑measure trick that moves the dependence on \(\theta\) from the distribution to a multiplicative term.

**Deeper principle**  
This is an instance of **importance sampling** in function space: we reweight samples by how sensitive the log‑probability is to parameters, turning an intractable derivative into an expectation that can be estimated with Monte Carlo. It also reveals that policy gradients are *gradient estimators for an expected utility under a parametric distribution*, connecting RL to variational inference.

**Non‑obvious insight**  
The score function term \(\nabla_\theta\log p_\theta(\tau)\) does **not** depend on the environment dynamics. Thus, any variance reduction trick (e.g., baselines, advantage functions) only needs to modify the reward signal; the policy’s sensitivity stays fixed. This separation underpins why we can plug in arbitrary value‑function estimates without changing the core gradient structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
