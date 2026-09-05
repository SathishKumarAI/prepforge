---
qid: ing_fd32f0b11d__star__local
question: 'Explain: Design — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 353
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:09-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, the inbound ticket volume had doubled in six months, and our manual triage was lagging behind, pushing average first‑response times from 12 h to 48 h.

**Task**  
I was tasked with designing an agentic AI system that could autonomously route tickets, draft responses, and request additional data without human intervention, while keeping compliance and data privacy intact.

**Action**  
First, I mapped the ticket workflow into a state‑machine diagram and used LangChain to chain LLM prompts with domain‑specific knowledge bases. I then applied reinforcement learning from human feedback (RLHF) so the agent could learn optimal routing policies based on SLA metrics. To safeguard privacy, I built a secure token‑masking layer that stripped PII before the LLM processed text. Finally, I integrated the system into our existing ticketing API and set up a monitoring dashboard with Prometheus to track latency and resolution rates.

**Result**  
Within three months, first‑response time dropped from 48 h to 3 h, and the AI handled 70% of tickets without escalation. Customer satisfaction scores rose by 15 points, and we reduced support staff hours by 30%. I learned that designing agentic AI requires a tight loop of domain mapping, safe data handling, and continuous feedback‑driven policy tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
