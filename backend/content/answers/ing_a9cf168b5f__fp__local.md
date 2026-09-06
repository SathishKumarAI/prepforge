---
qid: ing_a9cf168b5f__fp__local
question: What is an agent? — Agentic Engineering - by Neo Kim and Paul Hoekstra
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 405
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:12-05:00'
sources: []
---

**What is a machine‑learning *agent*?**  
Start with the *control problem*: an entity must act in a world to achieve goals while learning from feedback. In RL this boils down to **mapping states → actions** that maximise expected cumulative reward. An agent is therefore not just a model or policy; it is the *closed loop* that observes, decides, acts, and updates itself.

Why must an agent be a closed loop?  
Because **information flow** in learning is inherently sequential: future rewards depend on current actions, which alter the state distribution. A decoupled predictor would ignore this dependency, yielding a biased estimator of value. By embedding perception (state estimation), decision‑making (policy), and adaptation (learning rule) into one system, we guarantee that the gradients computed for learning are *causal*—they reflect how actions shape future observations.

From an optimization viewpoint, the agent implements **online stochastic gradient descent** on a non‑stationary objective: the Bellman error. The policy parameters evolve in response to the environment’s trajectory, ensuring convergence only if the update respects the Markov property and the exploration–exploitation trade‑off.

*Non‑obvious insight*: An agent’s *policy network* is not merely a function approximator; it must also encode **confidence** about its own predictions. Techniques like Bayesian neural nets or ensembles can be viewed as augmenting the agent with an internal “belief state,” turning prediction uncertainty into a principled exploration signal. Without this self‑aware component, agents risk overcommitment to spurious patterns, especially in sparse‑reward settings.

In short, a machine‑learning agent is the *self‑sustaining learning loop* that turns raw sensory data into actions while continuously refining its own decision rule through feedback from the very world it influences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
