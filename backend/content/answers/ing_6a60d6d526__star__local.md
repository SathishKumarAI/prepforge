---
qid: ing_6a60d6d526__star__local
question: 'Explain: Disadvantages — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 377
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:20-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building an autonomous delivery robot that had to navigate a busy warehouse. The product roadmap demanded a self‑learning system so the robot could adapt to new obstacles without reprogramming.

**Task:**  
I was tasked with evaluating whether reinforcement learning (RL) would be viable for real‑time control, and if not, proposing an alternative approach that met our safety and latency constraints.

**Action:**  
I first mapped out RL’s typical requirements: a large state space, a dense reward signal, many training episodes, and a simulation environment to avoid costly real‑world trials. I set up a quick benchmark in Unity ML-Agents, letting the robot learn to avoid static boxes. Within 10,000 simulated steps it achieved ~70% success but still made dangerous missteps (e.g., backing into shelves). Scaling to 100,000 steps improved performance only marginally while consuming 8 hours of GPU time and exposing us to a high risk of overfitting to the simulator’s physics. I documented the trade‑offs: high sample complexity, need for a perfect reward design, difficulty guaranteeing safety in deployment, and the maintenance overhead of continuously retraining.

**Result:**  
I presented a hybrid solution—model‑based planning with a simple PID controller augmented by supervised learning on labeled obstacle data—which reduced latency to <50 ms per decision and cut training time from days to minutes. The robot met the 95% safety requirement, and we avoided the costly pitfalls of pure RL while still benefiting from data‑driven perception. I learned that RL’s theoretical appeal must be weighed against practical constraints like sample efficiency, reward engineering, and real‑world safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
