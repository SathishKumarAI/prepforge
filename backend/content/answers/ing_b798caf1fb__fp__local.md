---
qid: ing_b798caf1fb__fp__local
question: 'Explain: Online evaluation — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 461
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:17-05:00'
sources: []
---

**Online Evaluation & Observability – a principled view**

When an AI model is deployed, its *fundamental problem* is to make decisions that maximize long‑term expected utility under uncertainty. In the real world this utility is not static: traffic patterns shift, user demographics evolve, and adversaries adapt. Thus we must continually **evaluate** the policy’s performance while it runs—this is *online evaluation*.  

Mathematically, we observe a stream of contexts \(x_t\) and actions \(a_t\), receiving noisy rewards \(r_t = f(x_t,a_t)+\epsilon_t\). The goal is to estimate the expected reward \(\mathbb{E}[r_t|x_t]\) without pausing the system. This reduces to a bandit problem: we must balance *exploration* (trying new actions to reduce uncertainty) and *exploitation* (choosing known good actions). Online evaluation is essentially an **online learning** objective with a sliding‑window estimator or Bayesian posterior that updates after each reward.

Observability turns this statistical problem into a *system‑theoretic* one. The agent’s hidden state (e.g., model parameters, latent user intent) must be inferred from partial observations. By treating the deployment as a partially observable Markov decision process (POMDP), we can design **state estimators** (Kalman filters, particle filters) that guarantee asymptotic convergence of parameter estimates under mild ergodicity assumptions.

**Non‑obvious insight:**  
The *rate* at which online evaluation converges is governed not just by data volume but by the *spectral gap* of the underlying Markov chain induced by the policy. A poorly mixing policy (e.g., deterministic greedy) can stall learning even with abundant data, whereas a slightly stochastic exploration strategy dramatically accelerates convergence.

In short: online evaluation is an instance of adaptive Bayesian inference under non‑stationary rewards; observability supplies the dynamical system perspective that ensures we can reconstruct hidden states and thus reliably update our policy in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
