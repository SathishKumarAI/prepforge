---
qid: ing_ac1a17aea7__faang__local
question: 'Explain: Reinforcement Learning From Human Feedback - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 420
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:16-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Reinforcement Learning from Human Feedback* (RLHF) as taught by DeepLearning.AI. Key assumptions: the audience knows basic RL and neural nets but may not know how human preferences are incorporated into training large language models.

**Approach**  
1. Define RLHF in one sentence.  
2. Outline its three stages: data collection, reward modeling, policy optimization.  
3. Highlight why it solves the “reward specification” problem.  

**Depth**  
RLHF trains a *policy* (e.g., GPT‑style decoder) to maximize a *human‑derived reward signal*.  
- **Collect demonstrations**: Human annotators rank or compare model outputs for given prompts.  
- **Train a reward model**: A neural net learns to predict human preference scores from pairs of responses.  
- **Policy update**: Using Proximal Policy Optimization (PPO) or similar, the policy is fine‑tuned to maximize expected reward under the learned model.  
The process iterates; new samples improve the reward model, which in turn yields a better policy—effectively bootstrapping alignment.

Complexity: training the reward network is O(N log N) over pairs; PPO adds an extra forward pass per token but remains linear in sequence length. Trade‑offs involve sample efficiency versus safety: more human data → safer but costly.

**Edge cases**  
- Sparse or noisy rankings lead to a misaligned reward model.  
- Overfitting the reward network can cause “reward hacking.”  
Testing involves held‑out preference sets and adversarial prompts to detect divergence from intended behavior.

**Optimize & communicate**  
Future work could use *inverse reinforcement learning* to reduce human labeling, or *offline RL* to reuse existing logs. When presenting, emphasize that RLHF bridges the gap between objective loss functions and subjective user satisfaction—exactly what FAANG teams need for responsible AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
