---
qid: ing_c44d1ad98f__aws__local
question: 'Explain: Key Takeaways for Interviews — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 444
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:37-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In my last role I led a project to replace manual ticket triage for a SaaS platform that handled ~12 k tickets/day. The support team’s SLA was 4 h but we were hitting 7 h on average, costing the business $350K/month in escalations.

*Task*: Build an AI‑driven automation layer that could classify and route tickets with minimal human intervention while keeping quality high.

*Action*:  
1. **Data Dive** – Collected 200k historical tickets, performed NLP feature engineering (TF‑IDF + embeddings) and built a multi‑label classifier in SageMaker.  
2. **System Design** – Deployed the model behind an API Gateway → Lambda (stateless inference), caching recent predictions in ElastiCache for 5 min to reduce latency.  
3. **Scalability & Cost** – Chose **Lambda@Edge** for global routing, auto‑scaling with DynamoDB Streams to trigger retraining; kept total cost <$1K/month versus $8K manual ops.  
4. **Quality Loop** – Implemented A/B testing and a feedback channel that sent misclassifications back into the training set (continuous learning).

*Result*: SLA improved from 7 h → 2.5 h, ticket resolution speed up by 60%, and we saved $330K annually. Post‑deployment, the model’s precision/recall stayed >92% after quarterly drift checks.

**What a Bar‑Raiser Hears**

- *Ownership*: I owned the full cycle—from data prep to production monitoring.  
- *Dive Deep*: Showed concrete metrics (SLA hours, cost savings) and technical trade‑offs (Lambda vs EC2).  
- *Quantified Impact*: Clear before/after numbers.  
- *Learning from Failure*: Built a retraining pipeline that automatically corrects drift—demonstrating resilience and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
