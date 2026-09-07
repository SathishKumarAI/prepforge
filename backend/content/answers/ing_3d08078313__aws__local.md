---
qid: ing_3d08078313__aws__local
question: 'Explain: Metric Selection — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 434
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:39-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing SaaS startup I led the migration of our recommendation engine to an embeddings‑based similarity search. The core challenge was selecting a metric that would drive business value while remaining scalable on AWS.

**Action (AWS & Design)**  
1. **Metric definition** – We chose *cosine similarity* because it normalizes vector length, matching our user‑centric personalization goal and reducing bias from high‑frequency terms.  
2. **Implementation** – Trained embeddings with Amazon SageMaker’s built‑in `TextEmbedding` algorithm; stored vectors in an Amazon DynamoDB table (partition key = entity ID).  
3. **Search layer** – Deployed an Amazon Kinesis Data Streams pipeline to update vectors in real time, feeding them into an Elastic Search domain (AWS OpenSearch) with a custom cosine similarity plugin for low‑latency nearest‑neighbor queries.  
4. **Scalability & Cost** – Leveraged on‑demand instances for the first 3 months; switched to Spot instances and reserved capacity once traffic stabilized, cutting compute cost by 38 %. Auto‑scaling ensured 99.9 % availability during peak usage.

**Result**  
- Improved recommendation relevance by **22 %** (measured via click‑through rate).  
- Reduced latency from 350 ms to 70 ms per query, enabling real‑time personalization on mobile devices.  
- Cut operational cost for the similarity layer from $12k/month to $7.2k/month.

**Reflection**  
*Ownership*: I owned the end‑to‑end pipeline and drove cross‑team alignment.  
*Dive Deep*: Continuous A/B testing revealed that cosine outperformed Euclidean by 18 % in relevance, a nuance we’d otherwise have missed.  
*Learning*: Initial attempts with Euclidean similarity caused skewed recommendations; pivoting to cosine saved us from a potential 15 % churn spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
