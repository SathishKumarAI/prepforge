---
qid: ing_7c83e063fb__aws__local
question: 'Explain: Zhipu / Z.ai GLM Family - June 2026 NEW — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 455
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:42-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A client needed a unified view of the newly released **Zhipu / Z.ai GLM Family** (June 2026) to guide product road‑mapping and compliance checks.

*Task*: Build an internal “Model Taxonomy Service” that automatically ingests model metadata, classifies each GLM variant, and exposes a REST API for downstream analytics teams.

*Action*:  
1. **Requirements & Design** – Define three taxonomy levels: *Domain* (e.g., NLP, CV), *Architecture* (Transformer‑based, Retrieval‑augmented), and *Capability* (Text Generation, Summarization).  
2. **AWS Stack** –  
   - **Amazon SageMaker Model Registry** to store versioned model artifacts.  
   - **AWS Glue** for ETL of metadata from the Zhipu portal.  
   - **Lambda + API Gateway** as a lightweight front‑end; *DynamoDB* (partition key: `ModelID`) holds taxonomy tags.  
3. **Scalability & Availability** – Serverless components guarantee 99.99 % SLA; DynamoDB auto‑scales to 10,000 RCU/WCU for peak 5k queries/sec.  
4. **Cost Optimization** – Spot Lambda invocations and on‑demand Glue jobs keep spend <$0.02 per request.

*Result*: Deployed in 3 weeks, the service reduced model classification time from **15 min to <30 s**, cutting analyst effort by **70 % (≈120 hrs/month)**. The API now powers a dashboard that informs quarterly roadmap decisions for 12 product lines.

**Bar‑raiser focus**: Demonstrated ownership of end‑to‑end delivery, deep dive into AWS pricing/latency trade‑offs, quantified impact on productivity, and iterated the design after initial latency spikes by adding caching in ElastiCache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
