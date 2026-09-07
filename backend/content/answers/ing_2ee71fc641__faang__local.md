---
qid: ing_2ee71fc641__faang__local
question: 'Explain: Reinforcement learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 471
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:32:17-05:00'
sources: []
---

## Clarify  
The interviewer asks you to **explain reinforcement learning (RL)** and, in the same breath, define **machine learning (ML)**.  
Assumptions:  
* Audience knows basic CS but not deep ML jargon.  
* They expect a concise yet complete definition that shows both breadth (what ML is) and depth (how RL fits).

## Approach  
1. Start with a high‑level definition of ML.  
2. Position RL as one paradigm within ML, highlighting its unique elements.  
3. Illustrate the RL loop with an example.  
4. Touch on key algorithms and evaluation metrics.

## Depth  
**Machine Learning** is data‑driven modeling: algorithms learn patterns or decision rules from examples rather than being hand‑coded for every case.  
It comprises supervised, unsupervised, and reinforcement learning.  

**Reinforcement Learning**: an agent interacts with a **Markov Decision Process (MDP)**—state \(s_t\), action \(a_t\), reward \(r_{t+1}\). The goal is to learn a policy \(\pi(a|s)\) that maximizes expected cumulative discounted reward \(E[\sum_{\tau=t}^\infty \gamma^{\tau-t} r_\tau]\).  
Typical algorithms: Q‑learning, SARSA (model‑free), DQN, Policy Gradient, Actor–Critic. Complexity depends on state/action space; function approximation (neural nets) scales to high dimensions but introduces stability challenges.

## Edge Cases  
* Sparse or delayed rewards can stall learning—needs exploration strategies like ε‑greedy or intrinsic motivation.  
* Non‑stationary environments break the MDP assumption; requires continual learning.  
* Safety constraints: RL may explore unsafe actions unless constrained (safe RL).

## Optimize & Communicate  
Conclude by noting that RL uniquely learns *how to act* through trial and error, unlike supervised ML which learns *what* maps inputs to outputs. Emphasize its impact on robotics, games, recommendation systems—areas where decision sequences matter. This framing showcases structured thinking, clear communication, and depth in a concise answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
