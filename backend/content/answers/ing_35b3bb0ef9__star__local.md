---
qid: ing_35b3bb0ef9__star__local
question: 'Explain: Interview Walkthrough — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 306
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:35-05:00'
sources: []
---

**Situation** – At my previous company we had a customer‑support platform that handled over 12,000 tickets per month. The response time was lagging at 4 hours on average, and churn risk was high for our enterprise tier.  
**Task** – I was tasked with designing an AI‑powered conversational agent to triage incoming inquiries, provide instant answers for the most common issues, and hand off only complex cases to human agents, aiming to cut response time by 70% and reduce ticket volume by 30%.  
**Action** – I chose Rasa NLU for intent classification (trained on 3,200 labeled tickets) and integrated it with a GPT‑4 backend for dynamic FAQ responses. We set up a fallback rule that escalated to a human only when confidence dropped below 0.45 or the user requested “talk to a person.” The agent was deployed behind our existing chat widget; we used Docker Compose for zero‑downtime rollout and A/B testing to compare with the legacy system.  
**Result** – Within two months, average response time fell to 1 hour, ticket volume dropped by 32%, and customer satisfaction scores rose from 3.8 to 4.5 out of 5. I learned that combining rule‑based escalation with generative AI yields both reliability and naturalness in a production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
