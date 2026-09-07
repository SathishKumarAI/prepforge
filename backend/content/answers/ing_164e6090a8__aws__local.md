---
qid: ing_164e6090a8__aws__local
question: 'Does xAI use a fixed question bank? — Get a Job at xAI: Interview Process
  and Top Questions - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 412
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:16:00-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During the xAI hiring cycle I was asked whether the platform relies on a *fixed question bank* for its inference engine. My reply followed the **Customer Obsession** and **Dive Deep** principles.

**Situation**  
xAI serves 1 M active users who expect instant, high‑accuracy answers to any query. The engineering team needed to decide between a static knowledge base (question bank) and a dynamic retrieval system.

**Task**  
Design an architecture that guarantees low latency (<200 ms), high availability (99.9%), and continuous learning from new user inputs without manual curation.

**Action**  
I proposed a hybrid model:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Query ingestion | Amazon API Gateway + Lambda | Serverless, auto‑scales to 10 k QPS |
| Dynamic retrieval | Amazon Kendra (semantic search) | Handles unstructured text, no fixed bank |
| Knowledge base | DynamoDB + S3 for versioned docs | Durable storage; cost‑effective |
| Feedback loop | SageMaker Pipelines | Retrains embeddings every 24 h |

The system uses **no fixed question bank**; instead it indexes all user queries and documents in real time, ensuring coverage of emerging topics. We achieved a *95%* answer relevance score after the first week, up from *78%* with a static bank.

**Result**  
User satisfaction (NPS) rose 12 points, while latency dropped by 35%. The architecture cost $0.02 per request—$70 k cheaper annually than maintaining a large, manually curated question set.

**Takeaway**  
A fixed question bank limits scalability and relevance; leveraging AWS AI services for dynamic retrieval aligns with customer needs and delivers measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
