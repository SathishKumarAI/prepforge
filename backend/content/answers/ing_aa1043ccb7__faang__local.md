---
qid: ing_aa1043ccb7__faang__local
question: 'Explain: to list some sort of functional requirements'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 509
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise list of *functional* (i.e., “what it does”) requirements that any ML system must satisfy before deployment. I’ll assume we’re talking about a production‑grade model serving pipeline that handles inference, monitoring, and governance.

**Approach**  
1. Identify core capabilities: data ingestion, feature extraction, model inference, output formatting.  
2. Add quality & safety checks: latency, accuracy, drift detection.  
3. Include operational hooks: logging, metrics, rollback, versioning.  
4. Cover compliance: audit trails, privacy controls, explainability.

**Depth**  

| Category | Functional Requirement |
|----------|------------------------|
| **Data Pipeline** | *Real‑time ingestion* of input streams with schema validation and back‑pressure handling. |
| **Feature Engineering** | On‑the‑fly feature extraction that matches training features (scaling, encoding) with deterministic caching. |
| **Inference Engine** | Predictive API exposing a REST/GRPC endpoint that guarantees < X ms latency under Y concurrent requests. |
| **Output Handling** | Structured response in agreed JSON schema, including confidence scores and optional SHAP explanations. |
| **Model Governance** | Versioned model registry; automatic rollback to previous stable version on accuracy drop > Z%. |
| **Monitoring & Alerting** | Continuous drift metrics (e.g., KS test), latency histograms, error rates, with alert thresholds. |
| **Security** | OAuth2/JWT authentication, input sanitization, and encryption at rest for model artifacts. |
| **Compliance** | Maintain audit logs of all inference requests and decisions; support data residency constraints. |

**Edge Cases**  
- *Schema drift*: unseen feature columns → graceful degradation or request rejection.  
- *Model starvation*: sudden spike in traffic → queueing or autoscaling triggers.  
- *Adversarial inputs*: trigger safe‑mode prediction (e.g., “unknown”).  

**Optimize & Communicate**  
To improve, I’d add a *model monitoring dashboard* that auto‑suggests retraining when drift exceeds threshold, and a *canary deployment* mechanism to test new models on 5% traffic. In talking through this, I’d emphasize how each requirement maps to user value (speed, reliability) and regulatory risk mitigation—showing both breadth and depth of my understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
