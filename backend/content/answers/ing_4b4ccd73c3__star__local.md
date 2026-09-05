---
qid: ing_4b4ccd73c3__star__local
question: 'Explain: Non-functional — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 341
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:52-05:00'
sources: []
---

**Situation:**  
At my last company we launched a chatbot that answered common product questions, but our metrics showed that 35% of users who reached the bot were still frustrated and requested to speak with a live agent. Customer support tickets spiked, especially during holiday sales.

**Task:**  
I was tasked with defining non‑functional requirements for an AI‑powered “smart escalation” feature: it had to detect when the bot’s confidence or sentiment dipped below acceptable thresholds, trigger a handoff to a human, and do so without impacting response latency or data privacy compliance.

**Action:**  
First, I set up real‑time monitoring of the bot’s confidence scores and user sentiment using Azure Cognitive Services. I defined a multi‑criteria rule: confidence < 0.4 **and** negative sentiment > 0.6 would trigger escalation. To keep latency under 300 ms, I embedded the rule in an edge function on AWS Lambda that queued tickets to the live chat queue only when needed. I also added encryption-at-rest for the conversation logs and a GDPR‑aligned data retention policy. Finally, I ran A/B tests with 10,000 users, logging handoff success rates and average time to resolution.

**Result:**  
After deployment, the bot’s escalation accuracy hit 92%, reducing live agent queue times by 45% and cutting support tickets by 28%. The team learned that carefully engineered non‑functional thresholds can dramatically improve user satisfaction without compromising performance or compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
