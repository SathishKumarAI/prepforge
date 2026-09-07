---
qid: ing_4e3efe8e4f__faang__local
question: 'Explain: Decouple What is Important to the Business and Changes Frequently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 452
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:46:42-05:00'
sources: []
---

**Clarify**

You’re asked how to separate “business‑critical” requirements (e.g., revenue impact, regulatory compliance) from parts that evolve often (feature experiments, A/B tests).  
Assumptions: we have a ML pipeline with data ingestion → feature store → model training → inference; stakeholders change feature specs and business rules frequently.

**Approach**

1. **Define a contract layer** – an interface that exposes only the stable outputs needed by downstream systems.  
2. **Feature‑store abstraction** – keep raw features in one place, derived features in another, with versioning.  
3. **Model registry & governance** – lock down production models; allow experimentation models to live in a separate namespace.  
4. **Policy engine** – encode business rules (pricing, risk limits) outside the model logic.

**Depth**

- *Feature Store*: store raw and derived features separately; tag each with semantic version numbers. Training pipelines consume only the “stable” feature set.  
- *Model Registry*: use tools like MLflow to pin production models; experiments run against a copy of the registry that can be swapped out without touching the contract layer.  
- *Policy Engine*: implement as a microservice or rules engine (e.g., Drools) so business logic can change without retraining models.  
- *CI/CD*: pipelines automatically deploy new feature definitions to the store and trigger re‑training only when necessary.

**Edge Cases**

- Feature drift: monitor distribution shifts; if drift > threshold, flag for retraining.  
- Regulatory changes: policy engine must be auditable; logs of rule evaluations required.  
- Feature deprecation: keep backward compatibility by retaining old feature columns until all consumers are migrated.

**Optimize & Communicate**

Explain that this decoupling reduces churn in production, speeds experimentation, and gives clear audit trails. Highlight trade‑offs: added infrastructure complexity vs. lower risk of unintended business impact when models change. Conclude with metrics: reduced MTTR for model rollbacks and faster feature rollout cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
