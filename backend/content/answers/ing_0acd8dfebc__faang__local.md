---
qid: ing_0acd8dfebc__faang__local
question: 'Explain: 1.1. Requirements Notation and Conventions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 428
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:09:18-05:00'
sources: []
---

**1. Clarify**

> *Question:* “Explain requirements notation and conventions in ML.”  
> I’ll assume we’re talking about how practitioners formally capture data‑science specs (e.g., feature lists, model contracts, evaluation metrics) so that data engineers, ML ops, and business stakeholders share a common language.

**2. Approach**

1. Identify the stakeholder groups.  
2. List key notation types: feature schemas, model cards, API contracts, dataset versioning.  
3. Show how each is documented (JSON Schema, OpenAPI, MLflow).  

**3. Depth**

- **Feature schema:** JSON or Avro with field names, types, nullability, constraints; e.g., `{"age": {"type":"int","min":0,"max":120}}`.  
- **Model contract:** Expected input shape, output labels, latency SLA, confidence thresholds.  
- **Evaluation metrics:** Explicitly state metrics (AUC‑ROC, F1) and acceptable ranges per deployment phase.  
- **Data lineage & versioning:** Use DVC or LakeFS to tag datasets (`dataset_v2.3`).  
- **Documentation tooling:** Adopt MLflow’s Model Registry for model card generation; OpenAPI for serving endpoints.

**4. Edge Cases**

- *Ambiguous fields* → enforce default values or mandatory validation rules.  
- *Multi‑label outputs* → define per‑class thresholds.  
- *Evolving schemas* → use backward‑compatibility tags and migration scripts.  

Testing: unit tests on schema validators, integration tests against the serving API, drift checks that compare runtime metrics to contract limits.

**5. Optimize & Communicate**

Explain that standardized notation reduces miscommunication, speeds onboarding, and enables automated CI/CD pipelines. Highlight trade‑offs: richer schemas increase documentation overhead but yield earlier bug detection. Conclude by recommending a minimal viable set (feature schema + model card) and scaling as the product matures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
