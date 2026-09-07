---
qid: ing_32ec5c82ce__aws__local
question: 'Explain: 131: Step-by-step guide to building your first AI agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 372
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:18-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* A small e‑commerce startup needed an on‑site chatbot that could recommend products and handle returns without human help.  
> *Task:* Build the first end‑to‑end AI agent within two months while staying under a $15k budget.  
> *Action:*  
> 1. **Define scope** – Use AWS Lex for intent detection, Lambda for business logic, and DynamoDB to store user context.  
> 2. **Prototype** – Train a lightweight Rasa NLU model on 200 labeled utterances, export it to SageMaker Neo for edge‑friendly inference.  
> 3. **Integrate** – Connect Lex to the Neo endpoint via API Gateway; Lambda pulls product data from Aurora Serverless and writes conversation history back to DynamoDB.  
> 4. **Iterate** – Run A/B tests on three intent classifiers (Lex, Rasa, custom BERT) using CloudWatch metrics; choose the one with lowest latency (30 ms).  
> 5. **Deploy & Monitor** – Use Step Functions for state management and S3 + QuickSight dashboards to track NPS and resolution time.  
> *Result:* Achieved a 4.6/5 NPS, cut average handling time from 12 min to 1.8 min (85% reduction), and stayed $3k below budget—outperforming the target by 40%.  

**Bar‑raiser focus:** Ownership of every layer, deep dive into model selection and latency trade‑offs, quantifiable impact on customer experience, and lessons learned from failing intent classifiers that drove the final architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
