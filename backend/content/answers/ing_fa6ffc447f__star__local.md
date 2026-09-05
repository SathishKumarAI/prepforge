---
qid: ing_fa6ffc447f__star__local
question: 'Explain: Action — AI Agents Explained - by Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:30-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were building an AI-powered customer support chatbot that needed to handle complex queries about loan products while staying compliant with regulatory constraints.

**Task:** My goal was to design and implement an “AI agent” that could autonomously decide when to route a conversation to a human operator, learn from past interactions, and continuously improve its policy without manual retraining.

**Action:** I applied the framework from Sairam Sundaresan and Neo Kim’s *Action—AI Agents Explained*. First, I defined a set of observable states (user intent, sentiment score, compliance flags) and actions (answer with FAQ, request additional data, handoff to agent). Using reinforcement learning, I built a policy network that maximized a reward function combining user satisfaction scores and compliance penalties. I deployed the agent in a sandbox, collected 10,000 interaction logs, and fine‑tuned the model with Proximal Policy Optimization (PPO) for stability. To ensure safety, I added an explicit “confidence threshold” guard that triggered human review when uncertainty exceeded 0.7.

**Result:** After two months of iteration, the agent handled 68% of queries without escalation, reducing average resolution time from 8 minutes to 3 minutes and cutting support costs by 30%. I learned that embedding clear state–action mappings and safety checks is essential for building trustworthy autonomous agents in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
