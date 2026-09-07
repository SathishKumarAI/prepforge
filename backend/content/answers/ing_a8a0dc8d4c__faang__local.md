---
qid: ing_a8a0dc8d4c__faang__local
question: 'Explain: Summary — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 420
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:16:47-05:00'
sources: []
---

**Reliability in ML System Design**

| **Stage** | **Key Points** |
|-----------|----------------|
| **Clarify** | • *Problem:* Build an end‑to‑end ML pipeline that stays accurate and available over time.<br>• *Assumptions to verify:* data drift frequency, latency SLAs, acceptable error budget, monitoring stack. |
| **Approach** | 1. **Observability:** instrument data ingestion, model inference, and post‑processing with metrics (accuracy, latency, concept‑drift).<br>2. **Versioning & Rollbacks:** keep data, feature store, and model artifacts in a reproducible registry.<br>3. **Canary/Shadow Deployments:** gradually expose new models while comparing predictions to production. |
| **Depth** | • *Data drift detection:* use KS‑test or population stability index on feature distributions; trigger re‑training if thresholds exceed.<br>• *Model retraining pipeline:* automated DAG (e.g., Airflow) that pulls latest data, trains with cross‑validation, and pushes only if AUC improvement ≥ 0.5%.<br>• *Fault tolerance:* circuit breakers around inference services; graceful degradation to fallback models. Complexity: O(n log n) for retraining, constant‑time inference. |
| **Edge Cases** | • Sudden spikes in traffic → auto‑scale; <br>• Feature value outliers → robust scaling; <br>• Label noise → active learning loop to request human review. |
| **Optimize & Communicate** | *Improvements:* add anomaly detection on latency, use feature importance drift to prioritize retraining. *Narrative:* “We treat ML reliability like a safety‑critical system: continuous monitoring, automated safe rollouts, and quick rollback paths ensure that the model’s performance never silently degrades.” |

*Word count: 204*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
