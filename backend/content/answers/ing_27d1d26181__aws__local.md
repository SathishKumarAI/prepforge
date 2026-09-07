---
qid: ing_27d1d26181__aws__local
question: You have thumbs-up/down and click logs from a live RAG product. How do you
  turn that into retrieval improvements?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 393
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:42-05:00'
sources: []
---

**Situation & Task**  
While launching a live Retrieval‑Augmented Generation (RAG) chatbot for our enterprise SaaS, we saw that the thumbs‑up/down and click logs were under‑utilized. My goal was to convert those signals into measurable retrieval improvements.

**Action**  
1. **Data Pipeline** – Ingested raw events into Amazon Kinesis Data Streams → processed with AWS Glue ETL to enrich each record (user ID, session, query timestamp).  
2. **Feature Store** – Stored per‑query engagement metrics in DynamoDB (click‑through rate, dwell time) and fed them into SageMaker Feature Store for model training.  
3. **Retrieval Model Update** – Trained a gradient‑boosted tree on 1 M labeled examples to predict relevance score. Deployed the model as a SageMaker endpoint; integrated with our OpenSearch cluster via Lambda so that each query’s top‑k documents are re‑ranked in real time.  
4. **Feedback Loop** – Implemented an automated retraining schedule (every 12 h) using Step Functions, ensuring fresh data drives the next model iteration.

**Result**  
Within three weeks of deployment:  
- **CTR increased by 18%** and **average dwell time rose 22%**.  
- Retrieval latency stayed <200 ms, keeping SLA intact.  
- Cost grew only 5% (Kinesis + Glue + SageMaker) while the model’s inference cost was amortized across all queries.

**Learning & Ownership**  
I drove ownership from ingestion to deployment, “dive deep” into metric nuances, and iterated quickly—showing bias for action and delivering quantifiable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
