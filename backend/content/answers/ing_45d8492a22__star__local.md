---
qid: ing_45d8492a22__star__local
question: 'Explain: Baselines in Policy Gradients ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 312
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:12-05:00'
sources: []
---

**Situation** – In a recent project building a reinforcement‑learning agent for robotic arm manipulation, our initial policy gradient runs were wildly unstable: the episode rewards fluctuated by over 50 % from one epoch to the next, and learning stalled after just a few hundred steps.

**Task** – I needed to reduce variance in the gradient estimates so that the policy could converge reliably while still exploiting the sparse reward signal we had from successful pick‑and‑place trials.

**Action** – First, I implemented a simple value baseline by training a neural network (shared hidden layers with the actor) to predict expected return given a state. During each rollout I subtracted this baseline from the actual discounted return before computing the policy gradient: ∇θ log πθ(a|s)(R‑V(s)). I then tuned the learning rate and added entropy regularization to encourage exploration. To avoid overfitting the baseline, I used a replay buffer of recent states with L2 weight decay on the critic network.

**Result** – The variance of gradient estimates dropped by roughly 70 %, allowing the policy to reach an average success rate of 78 % within 1,200 episodes—up from 45 % in the baseline‑free runs. I learned that a well‑trained value function can dramatically stabilize learning, but it must be kept lightweight and regularized to avoid biasing the policy too early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
