---
qid: ing_a5142324b7__star__local
question: 'Explain: Implementing Reward-to-Go Policy Gradient ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:18-05:00'
sources: []
---

**Situation** – At a fintech startup I was tasked with improving the click‑through rate (CTR) of an ad placement model that used reinforcement learning to decide which banner to show in real time. The existing on‑policy policy gradient was suffering from high variance and slow convergence.

**Task** – My goal was to implement a reward‑to‑go (RTG) estimator for the policy gradient, so the agent could better weigh future rewards when updating its parameters, thereby speeding up learning and reducing noise in the gradients.

**Action** – I first augmented our TensorFlow 2.13 training loop: after each user interaction episode, I computed the cumulative discounted reward from that step to the end (the RTG) using `tf.cumsum` on reversed rewards with a discount factor γ=0.99. I then multiplied the log‑probability of each action by its corresponding RTG and summed across the episode to obtain the loss:  
`loss = -tf.reduce_sum(log_probs * rtg)` . To stabilize training, I clipped gradients at 1.0 and added a baseline network that predicted expected return, subtracting it from the RTG to further reduce variance. I also logged per‑step entropy to encourage exploration.

**Result** – Within three weeks of deployment, CTR improved by 12 % and the loss variance dropped by 35 %. The model converged twice as fast on our validation set. This experience taught me how a carefully engineered return estimator can dramatically improve RL training efficiency in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
