---
qid: ing_8aa8f18a3c__aws__local
question: 'Explain: High-Level Architecture — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 428
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:58-05:00'
sources: []
---

**High‑Level Architecture for a Conversational AI Agent**

*Leadership Principles:* **Customer Obsession** – deliver instant, accurate help; **Ownership** – own the end‑to‑end flow.

**Situation / Task**  
A retail client needed an on‑site chatbot that could answer FAQs and process returns in real time. The goal: 95 % first‑contact resolution (FCR) with <2 s latency.

**Action**  
1. **Data Layer:** Store intents & entities in Amazon DynamoDB for low‑latency reads; back it with a nightly ETL job on AWS Glue that aggregates usage logs into Redshift for analytics.  
2. **NLP Engine:** Use Amazon Comprehend Custom to extract entities, coupled with Amazon Lex for intent matching and slot filling.  
3. **Orchestration:** Deploy Lambda functions (Python) behind an API Gateway endpoint; each function pulls context from a Redis‑based cache (Amazon ElastiCache) to keep session state.  
4. **Fallback & Escalation:** If confidence <0.7, route the query to an Amazon Connect contact flow for live agent handoff.  
5. **Observability:** CloudWatch metrics (latency, error rate) trigger an SNS alarm; a step‑function automates A/B testing of new intent models.

**Result**  
Within 8 weeks, FCR rose from 78 % to 94 %, latency dropped to 1.3 s, and the system handled peak traffic of 50k concurrent sessions with <0.5 % cost over baseline (AWS Free Tier + spot instances).  

*Bar‑raiser notes:* The candidate demonstrated **ownership** by detailing end‑to‑end flow, applied **Dive Deep** through service choices and trade‑offs, quantified impact, and reflected on iterating models after initial low FCR.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
