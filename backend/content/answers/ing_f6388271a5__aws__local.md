---
qid: ing_f6388271a5__aws__local
question: 'Explain: Case Study: Customer Support Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 412
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:49-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a cross‑functional team to build an AI‑powered conversational agent for the customer support portal. The goal was to reduce average handling time (AHT) by 30 % and increase first‑contact resolution (FCR) by 15 % within six months.

**Action**  
- **Ownership & Customer Obsession:** I mapped every customer touchpoint, interviewed agents, and surfaced pain points that drove high ticket volume.  
- **Dive Deep & Bias for Action:** Built a data pipeline in **Amazon Kinesis** → **AWS Glue** → **Redshift** to ingest chat logs, then trained a fine‑tuned BERT model on SageMaker.  
- Deployed the model behind **API Gateway** + **Lambda**, with auto‑scaling based on CloudWatch metrics, ensuring 99.9 % availability.  
- Implemented fallback routing to human agents via **Amazon Connect** and stored conversation context in **DynamoDB** for future training.  
- Cost was capped at $2k/month by using spot instances for SageMaker training and throttling API calls during off‑peak hours.

**Result**  
- AHT dropped from 7 min to **4.3 min** (−39 %) after three months.  
- FCR rose from 62 % to **78 %** (+26 %).  
- The solution handled a peak of 15k concurrent sessions with <0.5 s latency.

**Learning**  
The first rollout exposed an edge‑case where the model misinterpreted “refund” vs. “return.” We quickly added a rule‑based fallback and retrained on the new data, demonstrating iterative learning and continuous improvement—key traits of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
