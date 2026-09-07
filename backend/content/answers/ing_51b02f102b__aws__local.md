---
qid: ing_51b02f102b__aws__local
question: 'Explain: Functional — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 372
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:48-05:00'
sources: []
---

**Functional – Customer Support Agent (AI)**  

*Situation*: A large SaaS company rolled out a generative‑AI feature that customers used to draft emails. Within the first month, support tickets surged by **35 %**, many complaining about hallucinations and data privacy concerns.  
*Task*: Reduce ticket volume and improve customer confidence in the AI while keeping SLA ≤ 4 h.  
*Action*:  
- **Customer Obsession & Ownership**: I mapped pain points via a 3‑day rapid survey, identified 12 recurring error messages, and owned the remediation plan.  
- **Dive Deep**: Leveraged AWS CloudWatch logs and Athena to trace hallucination triggers; discovered that 7 % of requests exceeded token limits, causing model fallback errors.  
- **Bias for Action & Invent & Simplify**: Deployed an Amazon SageMaker endpoint with a custom pre‑processor that sanitizes inputs and a Lambda “fallback” route to a human agent when confidence < 0.6. Added a public FAQ in Amazon Connect, reducing repeat tickets by **42 %**.  
- **Deliver Results**: SLA improved from 4 h to 1.5 h; ticket volume dropped 28 %, and NPS rose from 70 to 84 within two weeks.  

*Result*: The solution cut operational cost by $12K/month, scaled automatically via Amazon SageMaker’s auto‑scaling, and left the support team free to tackle higher‑value issues. I documented lessons learned in a post‑mortem and updated the knowledge base, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
