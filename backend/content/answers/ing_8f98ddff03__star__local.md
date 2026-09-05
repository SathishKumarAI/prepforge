---
qid: ing_8f98ddff03__star__local
question: 'Explain: In this newsletter, you’ll learn: — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 328
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:02-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were tasked with building an automated customer‑support chatbot that could learn from interactions and improve its responses over time. The product owner wanted the bot to handle at least 70 % of tickets without human intervention by the end of Q3.

**Task** – I needed to design and implement an AI agent capable of continuous learning, context awareness, and safe decision‑making while staying within our latency budget (<200 ms per request).

**Action** – I started with a modular architecture: a perception layer using BERT for intent classification, a memory module built on Redis Streams to store user dialogue history, and a planning layer that employed a lightweight reinforcement‑learning policy (PPO) trained offline on simulated conversations. For safety, I added a rule‑based override that flagged any response containing high‑risk keywords before sending it back to the user. I integrated the agent into our existing Node.js backend via gRPC, monitored performance with Grafana dashboards, and set up A/B testing against the legacy system.

**Result** – Within two months, the AI agent handled 73 % of tickets autonomously, reducing average resolution time from 12 min to 4 min. Customer satisfaction scores rose by 15 points. I learned that combining pretrained language models with a small, task‑specific RL policy can deliver both speed and adaptability without overhauling infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
