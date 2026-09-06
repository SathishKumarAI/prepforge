---
qid: ing_a7ead376ac__fp__local
question: 'Explain: Types of APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 505
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:38-05:00'
sources: []
---

**What is an API?**  
At its core, an API (Application Programming Interface) is a contract that exposes a set of operations—*inputs → outputs*—while hiding implementation details. In machine‑learning systems the contract’s purpose is twofold:  

1. **Decouple data flow from computation** – a model can be retrained elsewhere; the API merely forwards requests and returns predictions.  
2. **Guarantee composability** – downstream services can stitch together multiple models (feature extraction, classification, ranking) without knowing how each one works internally.

---

### Types of ML APIs

| Type | What it exposes | Typical use‑case | Why it must work that way |
|------|-----------------|------------------|---------------------------|
| **Inference API** | `predict(input)` → `output` | Real‑time scoring (e.g., recommendation). | Latency is critical; the contract must be stateless to scale horizontally. |
| **Training API** | `train(dataset, params)` → `model_id` | Automated model pipelines. | Training can be long‑running; the interface decouples job submission from result retrieval. |
| **Feature Store API** | `get_features(id)` → `feature_vector` | Feature reuse across models. | Consistency and freshness are required; the contract guarantees cache‑invalidating semantics. |
| **Model Registry API** | `register(model)`, `list()`, `delete()` | Governance of model versions. | Metadata must be queryable for reproducibility; thus a search‑friendly schema is enforced. |

---

### Deep principle

The design of these APIs reflects *information bottleneck*: each interface compresses the necessary information (inputs, hyperparameters, metadata) into a minimal representation that still allows optimal downstream inference. The API’s shape therefore mirrors the **minimal sufficient statistic** of the task.

---

#### Non‑obvious insight  
Most people treat APIs as “call me and give me a result.” In ML, an API is also a *policy* for **data ownership and drift detection**. By embedding versioning and feature‑store lookups into the contract, you force every consumer to explicitly acknowledge which data slice they are using—an implicit guard against silent concept drift that can otherwise poison production pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
