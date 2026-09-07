---
qid: ing_aa95bb94f4__faang__local
question: 'Explain: Qwen''s reasoning models are trained with reinforcement learning
  using verifiable rewards on maths and code. Explain that setup and why it is preferred
  over PPO with a learned reward model for these domains.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 554
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:02-05:00'
sources: []
---

**Clarify**  
You’re asking how Qwen’s “reasoning” models are trained—specifically, why they use reinforcement learning (RL) that rewards **verifiable** outcomes in math and code rather than the typical Proximal Policy Optimization (PPO) with a learned reward model. I’ll assume we’re talking about large language‑model agents that generate step‑by‑step solutions and can self‑verify correctness.

**Approach**  
1. Explain RL‑with-verifiable rewards: define state, action, and deterministic reward function.  
2. Contrast with PPO + learned reward: highlight the reward model’s noise and bias.  
3. Discuss why verification matters for math/code.  
4. Summarize benefits (sample efficiency, safety, interpretability).

**Depth**  
- *RL‑with-verifiable rewards*: The policy πθ outputs a sequence of tokens. After completion, an external verifier (e.g., a symbolic solver or unit‑test harness) checks the solution. Reward = 1 if verification passes, 0 otherwise—exactly 0/1. This turns the problem into a deterministic bandit; gradients come from policy‑gradient estimates with sparse but high‑confidence feedback.  
- *PPO + learned reward*: A separate network Rφ predicts “goodness” from the generated text. Because math and code are brittle, Rφ must learn to map syntax → correctness—a noisy, data‑hungry process that can hallucinate rewards for partially correct solutions. PPO’s clipped objective then optimizes a potentially misaligned signal.  
- *Why prefer verifiable*:  
  - **Sample efficiency**: Each rollout yields an unambiguous reward; no need to train Rφ.  
  - **Safety & auditability**: The verifier is transparent and can be formally proven correct for many domains (e.g., SMT solvers).  
  - **Domain alignment**: Math/code correctness is binary; a learned model cannot capture subtle logical dependencies without massive data.

**Edge cases**  
- Verification may fail to catch all bugs (e.g., hidden assumptions).  
- For open‑ended creative tasks, no verifier exists.  
- Sparse rewards can slow learning if correct solutions are rare.

**Optimize & communicate**  
Future improvements: hybrid reward—use a lightweight learned model for pruning unlikely paths, then verify only the top candidates. Communicate this trade‑off to interviewers: deterministic verifiers give clean signals; learned rewards add flexibility but risk misalignment. Conclude that for precision‑critical domains like math and code, verifiable RL is the safer, more principled choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
