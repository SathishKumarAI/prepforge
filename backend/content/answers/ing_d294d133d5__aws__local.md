---
qid: ing_d294d133d5__aws__local
question: 'Explain: Problem Statement — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 470
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:45-05:00'
sources: []
---

**Problem Statement – Build a Conversational Agent for Customer Support**

**Situation / Task**  
In my last role at an e‑commerce startup, our support ticket volume grew from 2k to 12k tickets/month. The average first‑response time (FRT) was 3 hrs, hurting CSAT scores (down to 78%). I led a cross‑functional team to design a **conversational AI** that could triage and resolve common queries in real time.

**Action**  
- **Requirements & Design** – Defined intent taxonomy (shipping, returns, payment) and mapped them to FAQ knowledge base. Built an end‑to‑end pipeline:  
  - **Amazon Lex** for natural language understanding (NLU).  
  - **AWS Lambda** orchestrates intent routing.  
  - **Amazon DynamoDB** stores dynamic FAQ and user context; TTL removes stale entries.  
  - **Amazon Kendra** indexes product manuals for on‑the‑fly search.  
- Implemented fallback to human agents via **Amazon Connect** when confidence < 0.7.  
- Adopted **CI/CD with AWS CodePipeline**; automated unit & integration tests (95% coverage).  
- Monitored latency in CloudWatch, auto‑scaling Lambda based on queue depth.

**Result**  
- FRT dropped from 3 hrs to **12 min** (+85%).  
- CSAT rose from 78 % to **92 %** within two months.  
- Cost per ticket reduced by **$0.30** (from $2.10 to $1.80) due to automated resolution.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered instant answers, improving satisfaction.  
- *Ownership & Dive Deep*: Took full responsibility for end‑to‑end architecture and continuously iterated on intent models based on real usage data.

**Bar‑raiser Takeaway**  
Showed deep technical knowledge (service choices, scaling), quantified business impact, and a learning loop: retraining the model quarterly from new ticket logs to maintain accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
