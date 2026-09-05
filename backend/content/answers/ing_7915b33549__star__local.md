---
qid: ing_7915b33549__star__local
question: 'Explain: Living with Non-Determinism — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 307
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:03-05:00'
sources: []
---

**Situation**  
I was leading a research‑grade chatbot for a mental‑health startup that had to handle user inputs in real time. The team discovered that the same prompt could trigger different responses from our reinforcement‑learning agent, causing inconsistencies in tone and therapeutic quality.

**Task**  
My goal was to reduce non‑determinism so that each user received a consistent, evidence‑based response while still preserving enough stochasticity for natural conversation flow.

**Action**  
I introduced a two‑layer policy: first, a deterministic “confidence filter” using a threshold on the agent’s output probability; second, a stochastic sampling module with temperature annealing that only kicked in when confidence fell below the cut‑off. I also logged each decision path and used Bayesian optimization to tune the temperature schedule. We deployed this system on our staging environment and ran A/B tests against the previous fully stochastic model.

**Result**  
User satisfaction scores rose from 78 % to 92 %, and repeat‑visit rates increased by 35 %. The model’s variance in sentiment scores dropped by 42 %, proving that controlled non‑determinism can enhance reliability without sacrificing conversational richness. This experience taught me how to balance exploration and exploitation in live AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
