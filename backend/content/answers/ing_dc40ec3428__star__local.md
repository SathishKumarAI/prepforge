---
qid: ing_dc40ec3428__star__local
question: 'Explain: Step 4. Add Agent Skills — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 317
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:21-05:00'
sources: []
---

**Situation**  
In the spring of 2024 I was leading a rapid‑prototype project for a fintech startup that wanted an AI assistant to automatically triage customer support tickets and suggest resolution steps.

**Task**  
I had to design and implement a set of “agent skills” so the bot could recognize ticket categories, fetch relevant knowledge base articles, and generate concise replies—all within a 48‑hour sprint deadline.

**Action**  
First, I mapped the required skill set into modular components: a natural‑language understanding (NLU) classifier built with spaCy, an intent‑matching service using Rasa, and a retrieval‑augmented generation layer powered by OpenAI’s GPT‑4. I wrapped each component as a micro‑service in Docker, orchestrated via Kubernetes, and exposed them through a lightweight GraphQL API. To enable the agent to “learn” from user feedback, I added an online reinforcement loop: every bot reply was logged, scored against SLA metrics, and fed back into the NLU model for continuous fine‑tuning.

**Result**  
Within two weeks we launched the prototype; ticket triage accuracy rose from 68% to 93%, reducing average handling time by 35%. The feedback loop cut manual re‑labeling effort by 70%, and I documented a reusable skill‑assembly framework that other teams adopted for their own chatbot projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
