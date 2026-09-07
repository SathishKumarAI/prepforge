---
qid: ing_03c64b2031__aws__local
question: 'Explain: We want to add semantic search to our existing product. Design
  the service.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 438
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:07-05:00'
sources: []
---

**Situation & Task (S)**  
Our SaaS analytics platform serves ~1 M daily active users. Current keyword search returns noisy results and hurts conversion (bounce rate ↑12 %). I was tasked to design a **semantic‑search service** that improves relevance, scales with user growth, and costs <$50k/month.

**Approach & Action (A)**  
I scoped requirements: 1) real‑time query latency <200 ms, 2) support ~10 k new documents per day, 3) handle >100 K concurrent queries. I chose **Amazon SageMaker** for fine‑tuning a *Sentence‑Transformer* model on our domain corpus; embeddings stored in **Amazon OpenSearch Service** (now Amazon ES).  
Pipeline:  
1. Ingest → Lambda → SageMaker endpoint → embedding → Opensearch index update.  
2. Query → API Gateway + Lambda → search by cosine similarity, return top‑k docs.  

For cost/availability I leveraged **OpenSearch’s auto‑scaling** and **reserved instances** (3‑yr). To reduce latency I added a **Redis‑compatible ElastiCache layer** caching the top 5 k embeddings per query.

**Result (R)**  
Within 4 weeks of launch, precision@10 rose from 0.38 to 0.62 (+63 %), reducing bounce by 14 % and increasing upsell clicks by 9 %. Monthly spend stayed at $42k, 20 % below the budget.

**Reflection (T)**  
I learned that *data‑driven validation* (A/B testing) is critical before scaling a model; initial prototype over‑fitted to generic embeddings. I now always include an **embedding drift monitor** in CI/CD.  

> *Leadership Principles:* **Customer Obsession**, **Dive Deep**, **Bias for Action**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
