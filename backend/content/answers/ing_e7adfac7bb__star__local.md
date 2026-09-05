---
qid: ing_e7adfac7bb__star__local
question: 'Explain: Airbnb System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:59-05:00'
sources: []
---

**Situation:** While interviewing for a senior ML engineer role at a FAANG company, I was asked to design the search ranking system for Airbnb’s global marketplace, where 50 M listings are queried by millions of users daily.

**Task:** Build an architecture that can ingest real‑time booking signals, apply personalization models at scale, and return ranked results in under 200 ms with high availability.

**Action:** I proposed a two‑stage pipeline. First, a real‑time feature store (Kafka + KSQL) aggregates click, view, and booking events into per‑listing embeddings stored in Redis for sub‑millisecond lookup. Second, a distributed inference layer using TensorFlow Serving behind Envoy proxies runs a LightGBM model that scores listings based on relevance, price elasticity, and dynamic supply constraints. I added an A/B testing framework (Optimizely) to roll out ranking variants safely. To ensure latency, I sharded the feature store by region and used CDN caching for static metadata.

**Result:** The prototype reduced query latency from 350 ms to 180 ms, increased booking conversion by 12% in a pilot test, and cut infrastructure costs by 18% through efficient caching. I learned how to blend streaming data pipelines with low‑latency inference while maintaining model interpretability for business stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
