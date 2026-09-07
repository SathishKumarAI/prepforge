---
qid: ing_4257f7a626__aws__local
question: 'Explain: Three-Tier Routing (Auto / Hybrid / Escalate)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 454
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:04-05:00'
sources: []
---

**Three‑Tier Routing (Auto / Hybrid / Escalate)**  
*Leadership Principles: Customer Obsession & Ownership*

> **Situation:** My team was building a real‑time support chatbot for an e‑commerce platform that handled ~10k tickets/day. Customers demanded instant resolution, but the AI model’s confidence varied widely.  
> 
> **Task:** Design a routing pipeline that balances speed, accuracy, and cost while keeping SLA < 2 min.

**Action (Design):**

1. **Auto Tier – Self‑service**  
   *AWS Lambda* + *Amazon Lex* processes the query; if the intent confidence > 0.85, return an answer immediately. Low latency (<200 ms) and negligible cost (~$0.0002 per request).  

2. **Hybrid Tier – Human‑in‑the‑Loop**  
   If confidence 0.6–0.85, route to *Amazon Connect* contact flow that offers a “Speak with an agent” option while the bot pre‑fills context. This reduces agent effort by 40 % and costs ~$0.01 per interaction.  

3. **Escalate Tier – Full Escalation**  
   Confidence < 0.6 or flagged sentiment triggers *Amazon SQS* to a dedicated “escalated tickets” queue, where senior agents use the full CRM stack. Queue depth capped at 5 % of total traffic; we monitor with CloudWatch metrics.

**Result:** Post‑deployment, resolution time dropped from 4.2 min to **1.8 min** (45 % improvement), cost per ticket fell by **30 %**, and customer satisfaction scores rose from 78 % to **88 %** within two weeks.  

*Bar‑raiser notes:* I demonstrated ownership by owning the end‑to‑end flow, dove deep into confidence thresholds with A/B testing, quantified impact through real metrics, and iterated after an initial mis‑routing incident that taught me to add a “confidence buffer” before escalation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
