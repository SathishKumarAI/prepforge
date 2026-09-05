---
qid: ing_a9cf168b5f__star__local
question: What is an agent? — Agentic Engineering - by Neo Kim and Paul Hoekstra
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 333
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:09-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a recommendation engine for a streaming service that needed real‑time personalization. The existing batch pipeline was too slow to react to new user interactions, so the product team asked me to prototype a live learning system.

**Task:**  
I had to design an autonomous learning component—an “agent”—that could observe user actions, update its policy on the fly, and recommend content without human intervention, all while keeping latency under 100 ms.

**Action:**  
I chose a reinforcement‑learning agent built with TensorFlow Agents. The agent’s environment was defined as the user session; observations were click events and context vectors, and actions were item IDs. I implemented an epsilon‑greedy policy network that updated its weights using proximal policy optimization (PPO) after each interaction. To keep latency low, I offloaded inference to a TensorRT‑optimized model on the edge server and used asynchronous gradient updates via Ray. I also set up a feedback loop where the agent logged success metrics (CTR, watch time) into an Apache Kafka stream for continuous monitoring.

**Result:**  
Within three weeks the agent improved click‑through rate by 18 % and average watch time by 12 %, all while maintaining sub‑100 ms response times. The project taught me how to balance exploration/exploitation trade‑offs in production and the importance of lightweight inference pipelines for real‑time agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
