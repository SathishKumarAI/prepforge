---
qid: ing_3d8b3fd820__star__local
question: 'Explain: Plan — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 284
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:16-05:00'
sources: []
---

**Situation:**  
When my team joined a fintech startup, the product roadmap was stalled because our recommendation engine was static and couldn’t adapt to shifting user behavior during peak trading hours.

**Task:**  
I was tasked with designing an agentic AI system that could autonomously adjust pricing rules and risk limits in real time, reducing manual intervention while maintaining regulatory compliance.

**Action:**  
First, I mapped the business logic into a Markov Decision Process (MDP) using Python’s `gym` library. Then I trained a Deep Q‑Network (DQN) on historical market data, feeding it reward signals from both revenue and risk metrics. To ensure safe exploration, I wrapped the agent in an OpenAI Safety Gym wrapper that blocked any policy proposing limits outside predefined bounds. Finally, I deployed the model as a containerized microservice behind our Kubernetes cluster, using TensorFlow Serving for inference latency under 10 ms.

**Result:**  
Within three months, the autonomous system increased average revenue per user by 12% and cut manual rule‑updates from five days to two hours weekly. The team learned that coupling reinforcement learning with strict safety envelopes is key for agentic AI in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
