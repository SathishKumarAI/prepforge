---
qid: ing_1cfdd4dd58__fp__local
question: 'Explain: Step 7: Plot Rewards per Training — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 593
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:07:54-05:00'
sources: []
---

## Why we plot rewards in RL training

Reinforcement learning (RL) optimizes a **policy** π θ by maximizing expected return  
\(J(θ)=\mathbb{E}_{π_θ}\!\left[\sum_{t=0}^{T}γ^t r_t\right]\).  
During learning the policy changes every iteration, but we cannot see *how* it improves until we observe a signal that reflects cumulative performance. The **reward** is that signal: each step yields an immediate scalar \(r_t\), and summing (or averaging) these over episodes gives a concise metric of how well the agent behaves in the environment.

### Derivation from first principles

1. **Objective function**  
   RL seeks to maximize \(J(θ)\). Gradient‑based methods compute \(\nabla_θ J(θ)\) using sampled trajectories, but the *direction* of improvement is noisy.
2. **Proxy for progress**  
   The expected return itself is exactly the objective. Since we cannot compute it analytically, we estimate it by averaging episode rewards:
   \[
   \hat{J}_k = \frac{1}{N_k}\sum_{i=1}^{N_k} R^{(i)}_k,\quad
   R^{(i)}_k=\sum_{t=0}^{T}γ^t r_t^{(i)}
   \]
   where \(k\) indexes training iterations and \(N_k\) is the number of episodes sampled at that iteration.
3. **Plotting**  
   Plotting \(\hat{J}_k\) versus \(k\) visualizes the *trajectory* of the optimization process. A monotonically increasing curve indicates that the policy is learning; a plateau or decline flags issues (learning rate, exploration strategy, environment stochasticity).

### Deeper connection

- **Information theory**: The reward curve reflects how much information about the optimal policy has been extracted per iteration.
- **Optimization geometry**: Peaks correspond to local optima; sharp rises imply steep gradients; flat regions suggest saddle points or vanishing gradients.

### Non‑obvious insight

Most practitioners plot *average* rewards, but this obscures variance. Two agents can have identical averages yet vastly different risk profiles (e.g., one consistently scores 10, another alternates between 0 and 20). Plotting **reward distributions** (histograms or boxplots) per iteration reveals whether the agent is converging to a stable strategy or still oscillating—critical for safety‑critical applications where high variance can be catastrophic.

In summary, plotting rewards per training step transforms the abstract objective into a tangible learning curve, grounding RL’s stochastic optimization in observable performance while also exposing hidden stability issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
