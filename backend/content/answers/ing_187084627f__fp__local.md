---
qid: ing_187084627f__fp__local
question: 'Explain: Step 1. Do the work manually — How Do AI Agents Work - by Neo
  Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 471
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:37-05:00'
sources: []
---

### Why “Do the work manually” is the first step for an AI agent

An AI agent’s job is **to transform raw observations into actions that maximise a reward signal**.  
If we ask *how* it should learn this mapping, the most elementary answer is: **examine what the correct action would be in each situation and then force the model to imitate that behaviour**.

1. **Ground truth as an optimisation target** – In supervised learning the loss is simply the distance between the agent’s prediction \( \hat{a}\) and the human‑chosen action \( a^\*\).  
   \[
   L = \|\,\hat{a} - a^\*\,\|
   \]
   Optimising this loss drives the network toward a policy that reproduces expert behaviour. This is a *direct* optimisation of the agent’s objective: if it can copy humans in every state, its expected reward will be at least as high as the human baseline.

2. **Bridging perception and action** – By forcing the model to learn from explicit examples we implicitly teach it how to parse the observation space (e.g., vision, language) into a representation that is useful for decision‑making. The network learns a joint embedding of state and action without any prior bias toward a particular architecture.

3. **Statistical efficiency** – Human demonstrations provide a *rich* sample of high‑value trajectories. Compared to random exploration, this concentrates training on regions of the state space that actually matter for the task, reducing variance in gradient estimates and speeding convergence.

4. **Non‑obvious insight** – The act of “doing the work manually” is not just data collection; it is an *implicit regulariser*. When humans provide a correct action, they also implicitly encode causal structure (e.g., “if the ball is above the goal, shoot”). The agent learns to respect this causality, which is far harder to recover from sparse reward signals alone.

In short, manual demonstration turns the black‑box problem of policy learning into a well‑posed supervised optimisation task, providing both data efficiency and an inductive bias that aligns the learned policy with human intent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
