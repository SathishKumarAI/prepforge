---
qid: ing_a3a18684e2__fp__local
question: 'Explain: Lessons from the trenches — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 416
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:02-05:00'
sources: []
---

**Why do “AI agents” behave like that?**  
At its core an agent is a *closed‑loop optimizer*: it maps observations → actions so as to maximize cumulative reward under uncertainty. The paper unpacks this by treating the agent as a *policy network* trained via reinforcement learning (RL).  

1. **Problem framing** – RL formalizes the trade‑off between exploration (sampling new states) and exploitation (using known good actions).  
2. **Policy gradient derivation** – Starting from the expected return \(J(\theta)=\mathbb{E}_{\tau}[R(\tau)]\), we differentiate w.r.t. parameters \(\theta\):  
   \[
   \nabla_\theta J = \mathbb{E}\bigl[ R(\tau)\nabla_\theta \log\pi_\theta(a|s) \bigr]
   \]  
   This shows that updates are weighted by how good the entire trajectory was, not just the last step.  
3. **Variance reduction** – Introducing a baseline \(b(s)\) (often a value function estimate) yields  
   \[
   \nabla_\theta J = \mathbb{E}\bigl[ (R(\tau)-b(s))\nabla_\theta \log\pi_\theta(a|s) \bigr]
   \]  
   which is the *actor‑critic* scheme.  

**Non‑obvious insight:** The baseline isn’t just a trick to lower variance; it’s an *implicit regularizer* that aligns the policy with the environment’s geometry—states where the value function changes rapidly get larger updates, guiding exploration toward informative regions.

The authors then illustrate how these mathematical pillars translate into real‑world agents (e.g., game bots), emphasizing that each design choice—reward shaping, network architecture, replay buffer—derives directly from this optimization principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
