---
qid: ing_23a6adc0af__aws__local
question: 'Explain: Conversation memory — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 450
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:06-05:00'
sources: []
---

**Situation / Task**  
When I joined the customer‑support team at a SaaS fintech, we had to build an AI‑powered chat agent that could remember past interactions and use that context to resolve tickets faster. The goal was a 30 % reduction in average resolution time while keeping accuracy above 90 %.  

**Action (Design)**  
I scoped the requirements: persistent conversation state per user, real‑time inference, low latency (<200 ms), and compliance with GDPR.  
* **Storage:** DynamoDB Global Tables for active sessions (single‑write throughput of 5 kWCU) and S3 Glacier for archival logs.  
* **Processing:** Lambda functions triggered by API Gateway to update the session table; SageMaker Endpoint for intent classification & slot filling, with a custom tokenizer that loads user‑specific embeddings from Secrets Manager.  
* **Contextual Retrieval:** A read‑through cache (Elasticache Redis) holds the last 10 turns per user, refreshed on every request.  
* **Observability:** CloudWatch metrics feed into a Grafana dashboard; automated alerts if accuracy drops below 88 %.  

**Result**  
After two sprints we deployed to production. Resolution time fell from 12 min to **8 min (33 % improvement)**, and user satisfaction scores rose by **4.7/5**. The system handled 1.2 M messages/day with an average cost of $0.02 per message—below the target budget of $0.03.  

**Reflection & Bar‑raiser Insight**  
I owned the end‑to‑end pipeline, diving deep into data drift and latency bottlenecks. I quantified impact (time savings, cost), and when a sudden spike in false positives hit us, I led a blameless post‑mortem that introduced an adaptive confidence threshold—turning failure into a learning loop. This aligns with **Ownership** (own the customer journey) and **Dive Deep** (root cause analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
