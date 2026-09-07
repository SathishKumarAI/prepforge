---
qid: ing_9c2196a6a7__aws__local
question: 'Explain: The Problem — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 573
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:51-05:00'
sources: []
---

**The Problem – Knowledge Management for an AI‑Powered Customer Support System**

*Situation:*  
In a global SaaS company, the AI chatbot handled ~70 % of inbound tickets, but support agents complained that the bot’s knowledge base was stale and fragmented across Jira, Confluence, and legacy PDFs. This caused answer latency (average 3 min) and a 12 % increase in escalations.

*Task:*  
Design an end‑to‑end system to ingest, index, and serve up‑to‑date domain knowledge so the AI can retrieve accurate answers in <200 ms, while keeping costs under $5k/month.

*Action:*  
1. **Data ingestion pipeline** – Lambda + S3 event triggers parse PDFs/Docs → Textract → DynamoDB for metadata.  
2. **Vector store** – Amazon Kendra (enterprise search) with custom embeddings from SageMaker Endpoint (sentence‑transformer).  
3. **Real‑time update** – EventBridge rule on Confluence changes triggers re‑index; fallback to daily batch via Glue.  
4. **Serving layer** – API Gateway + Lambda@Edge for low‑latency lookup, backed by Kendra’s search API.  
5. **Monitoring** – CloudWatch metrics (search latency, error rate) trigger auto‑scaling of Lambda concurrency.

*Result:*  
- Search latency dropped from 3 min to <200 ms (95th percentile).  
- Escalation rate fell 18 % within two weeks.  
- Monthly cost stayed $4.2k, 15 % below budget.  

**Leadership Principles Anchored**

| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Customer Obsession** | Built a system that directly improved agent efficiency and customer satisfaction. |
| **Ownership & Dive Deep** | Took full responsibility for data quality, latency, and cost; iterated on embeddings until precision hit 92 %. |

**Bar‑raiser Takeaways**

- **Quantified Impact:** Concrete metrics (latency, escalation %).  
- **Depth of Analysis:** Chose Kendra over custom Elasticsearch after evaluating query speed vs. maintenance overhead.  
- **Learning from Failure:** Initial prototype with SageMaker hosted model hit 350 ms latency; switched to Kendra embeddings to meet SLA.  

This approach balances scalability (auto‑scaling Lambdas, serverless services), availability (Kendra’s multi‑AZ design), and cost, while ensuring the AI system remains a true knowledge engine for both agents and customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
