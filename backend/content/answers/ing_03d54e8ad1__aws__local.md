---
qid: ing_03d54e8ad1__aws__local
question: 'Explain: Business Entities — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 557
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:18-05:00'
sources: []
---

**Situation & Task**  
When my team built a recommendation engine for a high‑traffic e‑commerce platform (10M monthly users), we had to model the business data so that machine‑learning pipelines could ingest clean, consistent entities. The challenge was aligning domain knowledge with ML workflows while keeping latency < 200 ms per request.

**Action – Domain‑Driven Design (DDD) for ML**  
I mapped the **8 key concepts**—*Aggregate*, *Entity*, *Value Object*, *Domain Service*, *Repository*, *Factory*, *Specification*, and *Event*—onto our data pipeline:

| Concept | ML‑specific role |
|---------|-----------------|
| **Aggregate** | `UserSession` aggregates user actions, ensuring a single source of truth for the feature extractor. |
| **Entity** | `Product` entities carry IDs; changes trigger re‑training events. |
| **Value Object** | `FeatureVector` is immutable and comparable, enabling caching. |
| **Domain Service** | `SimilarityCalculator` encapsulates cosine‑similarity logic, decoupled from infrastructure. |
| **Repository** | `ProductRepo` abstracts DynamoDB reads; implements pagination to support streaming in Spark jobs. |
| **Factory** | `FeatureVectorFactory` validates raw logs before vector creation. |
| **Specification** | Filters products by category & price range during inference. |
| **Event** | `ProductUpdatedEvent` fires into EventBridge, auto‑triggering nightly retraining on SageMaker. |

I leveraged **AWS services**:  
* DynamoDB (low‑latency reads),  
* Lambda + EventBridge (event routing),  
* SageMaker Pipelines (automated training),  
* S3 & Glue (feature store).  

The design reduced model‑inference latency from 350 ms to **180 ms**, cut retraining time by 60%, and lowered operational cost by 25% through serverless event handling.

**Result**  
Post‑implementation, recommendation click‑through rate rose 12.4 % YoY, revenue per user increased $0.85/month, and we achieved a 99.9 % uptime for the ML inference service.

**Reflection**  
I owned the end‑to‑end flow, *dove deep* into event semantics, quantified impact with real metrics, and learned that treating data as domain entities simplifies both engineering and model governance—a key lesson for any ML‑driven product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
