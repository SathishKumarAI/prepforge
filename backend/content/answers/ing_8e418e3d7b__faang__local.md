---
qid: ing_8e418e3d7b__faang__local
question: 'Explain: Implementing the Simplest Policy Gradient ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 557
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:57-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch a *policy‑gradient* method in its most minimal form—essentially REINFORCE. The goal is to learn a stochastic policy πθ(a|s) that maximizes expected return J(θ)=Eπ[∑t γ^t r_t]. Assume an episodic MDP, finite horizon T, and that we can sample full trajectories.

**Approach**  
1. Initialize θ randomly.  
2. For each episode:  
   * Sample a trajectory τ = (s₀,a₀,…,s_T) using πθ.  
   * Compute the return G_t for every time step t (cumulative future rewards).  
3. Update θ by gradient ascent on J(θ) ≈ ∑_{t} ∇_θ logπθ(a_t|s_t) G_t.

**Depth**  
The REINFORCE update is  
\[
\theta \leftarrow \theta + \alpha\, G_t\, \nabla_\theta \log \pi_\theta(a_t|s_t).
\]
For a categorical policy πθ(a|s)=softmax(θᵀφ(s,a)), the gradient reduces to (a_onehot−πθ) ⊗ ∇_θ(θᵀφ). Complexity per step is O(|A|), memory linear in trajectory length. Variance can be high; a baseline b(s_t) or subtracting an episode mean return mitigates this without bias.

**Edge Cases**  
*Deterministic policies*: gradient vanishes; need stochasticity.  
*Infinite horizon*: returns diverge; use discount factor γ<1.  
*Sparse rewards*: variance explodes—consider reward shaping or advantage estimation.  
*Continuous action spaces*: replace categorical softmax with Gaussian policy, ∇ log π involves (a−μ)/σ².

**Optimize & Communicate**  
Improvements:  
- **Baseline subtraction** to reduce variance.  
- **Actor‑Critic**: learn a value function V(s) to serve as baseline or advantage.  
- **Parallel rollouts** for sample efficiency.  
When explaining, emphasize that REINFORCE is the “simplest” because it uses only sampled trajectories and the log‑probability trick; all extensions (baselines, entropy regularization, GAE) build on this core. This structure showcases clear problem framing, algorithmic steps, mathematical grounding, robustness checks, and scalability considerations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
