---
qid: ing_8f98ddff03__fp__local
question: 'Explain: In this newsletter, you’ll learn: — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 492
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:27-05:00'
sources: []
---

**How do AI agents actually work?**

At the core, an AI agent is a *decision‑making loop* that turns raw data into actions by solving an optimization problem:  
\[
\max_{\pi}\;\mathbb{E}_{s_0 \sim \rho_0}\Big[\sum_{t=0}^{T} r(s_t,a_t)\Big]
\]
where \(s_t\) is the state, \(a_t=\pi(s_t)\) an action chosen by policy \(\pi\), and \(r\) a reward.  
The agent learns a *policy* \(\pi_\theta\) parameterized by \(\theta\) that maps perceptual inputs to actions so as to maximize expected cumulative reward.

1. **Perception** – Sensors or encoders (e.g., CNNs for images, transformers for language) compress high‑dimensional observations into a latent representation \(h_t=f_{\text{enc}}(o_t)\).  
2. **Planning / Model‑based reasoning** – Some agents maintain an internal dynamics model \(\hat{T}(h_{t+1}\mid h_t,a_t)\); they simulate future trajectories to evaluate the expected reward of actions (model‑based RL).  
3. **Policy execution** – The agent samples or greedily selects \(a_t\) from a policy network, possibly adding exploration noise.  
4. **Learning** – Using gradient descent on a loss derived from temporal‑difference errors or policy gradients, the agent updates \(\theta\) to reduce the gap between predicted and observed returns.

The *non‑obvious insight* is that an agent’s success hinges not merely on fitting data but on *optimizing over a distribution of future possibilities*. Even deterministic policies can fail if they ignore uncertainty; thus modern agents explicitly model epistemic uncertainty (e.g., Bayesian neural nets, ensembles) to balance exploration and exploitation. This probabilistic view turns the learning problem into one of *information‑theoretic control*: an agent seeks actions that reduce expected future loss most efficiently.

In sum, AI agents are mathematically grounded in sequential decision theory; their practical power comes from neural approximations that compress perception, simulate futures, and iteratively improve policies through stochastic gradient optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
