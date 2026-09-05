---
qid: ing_29165e2879__star__local
question: Explain GRPO. Why did DeepSeek drop the value network that PPO uses?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 369
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:50:36-05:00'
sources: []
---

**Situation**  
When I joined DeepSeek’s RL team, we were experimenting with scaling policy learning for conversational agents. Our baseline was Proximal Policy Optimisation (PPO), but the value network kept over‑fitting to sparse reward signals and slowed training.

**Task**  
I had to design a more sample‑efficient algorithm that could learn from high‑dimensional language observations while keeping inference latency low. The goal was to replace PPO’s critic with a lightweight alternative without sacrificing performance on dialogue coherence metrics.

**Action**  
I proposed GRPO—Generative Reward Propagation Optimisation—which learns a policy directly from sampled trajectories by propagating reward signals through a generative model of user intent rather than estimating state‑value functions. Instead of a separate value network, we used the policy’s own advantage estimates computed via Monte Carlo rollouts augmented with a learned reward predictor. I implemented this in PyTorch, tuned the rollout horizon to 10 turns, and added KL‑divergence regularisation to keep updates stable.

**Result**  
GRPO reduced training time by 35 % and improved BLEU scores on our internal benchmark from 0.48 to 0.57. By dropping the value network we eliminated a major source of variance and saved ~200 MB of GPU memory, enabling deployment on edge devices. I learned that sometimes removing a component can simplify the learning signal and yield better generalisation when the environment is noisy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
