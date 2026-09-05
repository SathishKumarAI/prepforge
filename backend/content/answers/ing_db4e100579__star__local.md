---
qid: ing_db4e100579__star__local
question: 'Explain: Putting it together: a bank support agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 373
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:27-05:00'
sources: []
---

**Situation:**  
At my last job I was part of the team that built a virtual support agent for a regional bank that had been receiving over 30 k customer inquiries per month on its legacy ticketing system. The volume caused average response times to spike from 3 h to 12 h, and CSAT scores dropped below 70%.

**Task:**  
I was tasked with designing an AI‑powered chatbot that could triage, answer common questions, and hand off complex issues to human agents—all while staying compliant with PCI‑DSS and GDPR.

**Action:**  
I started by mapping the most frequent ticket categories (balance checks, fraud alerts, account updates) and built a rule‑based intent classifier in spaCy. I then integrated an LLM fine‑tuned on anonymized chat logs to handle open‑ended queries, using OpenAI’s API with prompt engineering that included context windows of prior user messages. For compliance, I wrapped every interaction in a secure microservice that logged encrypted payloads and performed real‑time data masking. Finally, I built an escalation pipeline that routed unresolved tickets to the nearest human agent via a RESTful queue.

**Result:**  
Within two months the chatbot handled 42 % of all inquiries automatically, cutting average first‑response time from 12 h to 45 min and lifting CSAT to 88%. The team also reduced ticket backlog by 28 k items, freeing agents to focus on high‑value cases. I learned that blending rule‑based filtering with a fine‑tuned LLM, all under strict audit controls, is the sweet spot for enterprise support AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
