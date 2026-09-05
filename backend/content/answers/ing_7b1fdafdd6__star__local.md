---
qid: ing_7b1fdafdd6__star__local
question: 'Explain: Agents, Tool Use & MCP - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:16-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had to launch an automated customer support bot for our mobile app. The existing chatbot could only handle FAQs; it was hitting a 35 % satisfaction drop when users asked about multi‑step processes like loan applications.

**Task** – I needed to build a new agent that could orchestrate multiple internal tools (CRM, credit‑score API, payment gateway) and learn from user interactions in real time, improving both accuracy and speed of resolution.

**Action** – I designed the system around a *Multi‑Component Planner* (MCP). The core agent was built with LangChain on top of OpenAI GPT‑4 to generate high‑level plans. For each step, I created lightweight “tool” wrappers: a REST wrapper for the credit‑score API, an SQL executor for CRM data, and a Stripe client for payments. The planner used a reinforcement‑learning loop that scored plan success against a reward function (response time < 2 s and accuracy > 90 %). We deployed the agent in a canary rollout, monitored telemetry, and iterated on tool parameters until the bot handled 80 % of complex queries autonomously.

**Result** – Post‑deployment we saw a 48 % drop in ticket volume for loan inquiries and a 27 % increase in CSAT. The system also cut average resolution time from 4.2 s to 1.8 s, freeing our human agents for higher‑value tasks. I learned that coupling an intelligent planner with well‑defined tool interfaces dramatically boosts productivity while keeping the architecture modular and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
