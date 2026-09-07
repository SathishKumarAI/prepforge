---
qid: ing_7915b33549__faang__local
question: 'Explain: Living with Non-Determinism — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 477
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:23-05:00'
sources: []
---

**Clarify**  
The article *“Living with Non‑Determinism – AI Agents Explained”* discusses how modern autonomous systems must cope with unpredictable environments. It assumes we’re dealing with agents that (1) perceive noisy data, (2) make decisions in real time, and (3) can’t foresee every future state.

**Approach**  
I’ll first describe what non‑determinism means for AI, then outline the key architectural patterns the authors recommend: probabilistic modeling, risk‑aware planning, and continuous learning. Finally, I’ll tie these to concrete examples from robotics or autonomous driving.

**Depth**  
- **Non‑Determinism**: Unlike deterministic programs, an agent’s next state depends on stochastic sensory input and hidden world dynamics.  
- **Probabilistic State Estimation** (e.g., Kalman/Fusion filters) lets the agent maintain a belief distribution over possible states rather than a single estimate.  
- **Risk‑Aware Planning** uses chance constraints or value‑at‑risk metrics to generate policies that respect safety thresholds while still being aggressive enough for performance.  
- **Online Learning & Adaptation**: The agent continually updates its world model (e.g., via Bayesian inference) so it can handle novel events without catastrophic failure.  
The article cites autonomous drones navigating wind gusts and self‑driving cars dealing with unexpected pedestrians—both illustrate the necessity of these layers.

**Edge Cases**  
- Sensor dropout or extreme noise → belief collapse; mitigate with redundancy or conservative priors.  
- Rare but high‑impact events (e.g., a sudden obstacle) can still trigger safety overrides even if probability is low.  
- Model drift over time leads to outdated risk estimates; regular re‑evaluation is essential.

**Optimize & Communicate**  
I’d highlight that the trade‑off is between **reactivity** (fast, local decision making) and **robustness** (global, probabilistic safety). A modular architecture—perception → belief update → policy selection → actuation—allows scaling complexity without sacrificing latency. In an interview I’d finish by noting how this framework underpins industry deployments like Tesla’s Autopilot or Boston Dynamics’ Spot, demonstrating both theoretical soundness and practical impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
