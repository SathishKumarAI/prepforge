---
qid: ing_c852d42eb0__star__local
question: 'Q11: What is the difference between an agent and a workflow?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 320
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:16-05:00'
sources: []
---

**Situation:**  
During my last project at a fintech startup, we were tasked with automating our customer support pipeline. The existing manual process was taking 4–5 hours per ticket, and our SLA slipped past the 24‑hour target.

**Task:**  
I had to design an end‑to‑end solution that could reduce handling time to under 1 hour while still allowing human oversight for complex cases.

**Action:**  
I first mapped a **workflow**: a linear sequence of steps—ticket intake, sentiment analysis, routing, escalation, and closure—implemented in Zapier. The workflow was deterministic; each ticket followed the same path unless flagged as “high priority.”  
Next, I introduced an **AI agent** powered by GPT‑4 and custom fine‑tuning. This autonomous agent could read the entire conversation, ask clarifying questions, generate draft responses, and even propose next actions without following a pre‑defined sequence. I integrated the agent into our workflow as a “smart step,” letting it decide whether to resolve automatically or hand off to a human.

**Result:**  
Ticket turnaround dropped from 4.5 hours to 45 minutes on average—an 80 % reduction—and SLA compliance rose from 68 % to 97 %. I learned that workflows provide structure and predictability, while agents bring flexibility and learning capability; combining both yields the best of both worlds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
