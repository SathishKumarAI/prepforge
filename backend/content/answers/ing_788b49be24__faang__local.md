---
qid: ing_788b49be24__faang__local
question: 'Explain: AI System Design Glossary'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 536
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:18-05:00'
sources: []
---

**AI System‑Design Glossary – FAANG‑style Answer**

| Term | Definition (in system context) | Typical use case |
|------|--------------------------------|------------------|
| **Model** | A trained mathematical function that maps inputs to outputs (e.g., a transformer or CNN). | Inference in recommendation engines. |
| **Inference Engine** | Runtime component that loads a model and executes predictions, often on GPU/TPU clusters. | Real‑time ad click‑through scoring. |
| **Training Pipeline** | End‑to‑end workflow: data ingestion → preprocessing → distributed training → checkpointing. | Periodic re‑training of language models. |
| **Feature Store** | Centralized repository for raw and engineered features, versioned and served at low latency. | Serving user embeddings to downstream services. |
| **Model Registry** | Metadata catalog (version, metrics, lineage) that tracks which model is in production. | A/B testing of new vision models. |
| **Serving Layer** | API gateway + load balancer that routes inference requests to healthy replicas. | Global image classification service. |
| **Observability** | Metrics (latency, error rates), logs, and model‑specific diagnostics (e.g., drift). | Detecting concept drift in fraud detection. |
| **Explainability** | Methods (SHAP, LIME) that attribute predictions to input features for compliance. | Credit‑worthiness scoring audit. |
| **Data Pipeline** | Batch/stream ingestion, transformation, and storage; often built on Kafka + Spark/Flink. | Real‑time sensor data for predictive maintenance. |

---

### How I’d explain it in an interview

1. **Clarify** – “You want a concise glossary that ties each term to its role in a production AI stack.”  
2. **Approach** – List terms, give a one‑sentence definition, then map to real use cases.  
3. **Depth** – Include storage (feature store), lifecycle (registry, training pipeline), runtime (inference engine, serving layer), and observability/explainability for trust.  
4. **Edge Cases** – Mention version conflicts in the registry, cold‑start latency in the serving layer, or drift detection thresholds.  
5. **Optimize & Communicate** – Highlight that a clean glossary reduces onboarding time and aligns cross‑functional teams; I’d show it as a living document in Confluence with examples.

Word count: ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
