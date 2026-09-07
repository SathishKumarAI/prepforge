---
qid: ing_66a212e6a7__faang__local
question: 'Explain: Build the domain model — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 602
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:58-05:00'
sources: []
---

**Clarify**  
The interview asks how to *build a domain model* using the **8 key concepts of Domain‑Driven Design (DDD)** for a machine‑learning system (e.g., recommendation engine).  
Assumptions: we’re modeling business logic, not just data pipelines; persistence and integration are secondary.

---

### 1. Context & Boundaries  
- **Define the bounded context** (“Recommendation Service”) where ML models live.  
- Identify external contexts (Data Lake, User Profile) that interact via well‑defined interfaces.

### 2. Core Domain  
- The *core* is the business rule: “Generate personalized recommendations.”  
- Model it as an aggregate root **`RecommendationEngine`** that orchestrates feature extraction, model inference, and post‑processing.

### 3. Ubiquitous Language  
- Use terms like *FeatureVector*, *ModelVersion*, *ScoreThreshold*.  
- Keep domain entities, value objects, and services spelled the same across code, docs, and conversations.

### 4. Entities & Value Objects  
| Entity | Responsibility |
|--------|----------------|
| `UserProfile` | Holds user attributes (id, demographics). |
| `ModelVersion` | Tracks ML model metadata (hash, training date). |

| Value Object | Responsibility |
|--------------|----------------|
| `FeatureVector` | Immutable set of features. |
| `RecommendationScore` | Encapsulates score + confidence. |

### 5. Aggregates  
- **`RecommendationEngine`** aggregates `UserProfile`, `ModelVersion`, and the recommendation logic, enforcing consistency.

### 6. Domain Services  
- **`FeatureExtractionService`**, **`InferenceService`** (calls ML runtime), **`PostProcessingService`** for ranking & filtering.

### 7. Repositories  
- Provide persistence abstraction: `UserRepository`, `ModelRepository`.  
- Keep query logic out of domain; use specification patterns if needed.

### 8. Events & Messaging  
- Emit domain events: `RecommendationGenerated`, `ModelUpdated`.  
- Use them for audit, downstream analytics, or triggering re‑training pipelines.

---

**Depth** – Each component is a single responsibility, enabling unit tests and clear versioning. Complexity of inference service is *O(1)* per request; repository access is *O(log n)* with indexing.

**Edge Cases** –  
- Missing features → fallback to default vector.  
- Stale model → trigger retraining event.  
- Concurrent updates → optimistic locking on `ModelVersion`.

**Optimize & Communicate** –  
- Cache frequent feature vectors to reduce extraction cost.  
- Use async messaging for heavy post‑processing, keeping API latency low.  
- Document the bounded context diagram and Ubiquitous Language glossary so all stakeholders stay aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
