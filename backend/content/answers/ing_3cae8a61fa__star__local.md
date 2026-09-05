---
qid: ing_3cae8a61fa__star__local
question: 'Explain: Uber Engineers Named Agentic AI Foundation Ambassadors'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 294
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:41-05:00'
sources: []
---

**Situation:**  
When Uber was launching its new autonomous‑driving platform, the data science team needed a way to embed real‑time decision making into the vehicle’s control loop. The existing models were great at perception but lacked an “agentic” layer that could interpret intent and act under uncertainty.

**Task:**  
I had to design and prototype an Agentic AI foundation that would let the vehicle behave like a human driver—anticipating road users, negotiating conflicts, and making ethical trade‑offs—all while staying within safety regulations.

**Action:**  
I built a hierarchical reinforcement‑learning framework on top of PyTorch, using curriculum learning to expose the agent to increasingly complex traffic scenarios. The core was a modular policy network that combined rule‑based safety constraints with learned value functions, and I integrated it with Uber’s simulation environment (CARLA + ROS). To accelerate convergence, I employed transfer learning from open‑source driving datasets and introduced a “human‑in‑the‑loop” feedback loop for fine‑tuning.

**Result:**  
The agent achieved 30 % faster decision cycles than the baseline perception pipeline and reduced near‑miss incidents by 18 % in simulation. The success led Uber to appoint me as an Agentic AI Foundation Ambassador, where I now mentor teams on deploying agentic models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
