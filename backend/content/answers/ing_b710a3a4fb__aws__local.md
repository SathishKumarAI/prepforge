---
qid: ing_b710a3a4fb__aws__local
question: 'Explain: Proactiveness — AI Agents Explained - by Sairam Sundaresan and
  Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 420
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:47-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were asked to build a *proactive* customer‑support chatbot that could anticipate user needs and initiate actions before the user typed a query. The goal was to reduce average first‑contact resolution time by 30 % while keeping cost per ticket below $0.50.

**Action (Technical)**  
1. **Data ingestion** – Collected clickstream, chat logs, and CRM data via Kinesis Data Streams into S3 for batch training.  
2. **Modeling** – Trained a sequence‑to‑sequence model on SageMaker, fine‑tuned with reinforcement learning to predict next best action (e.g., “Show FAQ”, “Escalate”).  
3. **Serving** – Deployed the model behind an API Gateway + Lambda for low‑latency inference; used DynamoDB Streams to trigger proactive messages via SNS/SQS.  
4. **Observability** – Integrated CloudWatch metrics and X-Ray tracing; set up automated A/B tests with a 10 % traffic split.

**Result**  
- First‑contact resolution rose from 62 % to 86 % (Δ +24 %).  
- Average ticket cost fell to $0.32, 36 % below target.  
- Latency stayed <120 ms for 99.9 % of requests.

**Reflection (Leadership Principles)**  
*Customer Obsession* – We focused on reducing friction in the support journey.  
*Ownership & Dive Deep* – Built end‑to‑end pipeline, monitored every component, and iterated on failure signals to improve model confidence.  

Bar‑raiser takeaway: Showed ownership of data quality, deep understanding of ML lifecycle, quantified impact, and a learning loop that turned initial low‑confidence predictions into high‑accuracy proactive actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
