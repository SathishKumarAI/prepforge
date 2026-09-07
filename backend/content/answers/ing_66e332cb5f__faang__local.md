---
qid: ing_66e332cb5f__faang__local
question: 'Explain: Deploying and Maintaining Production AI Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 498
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:35-05:00'
sources: []
---

**Deploying & Maintaining Production AI Systems**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | Restate the problem: “We need a scalable pipeline that trains, serves, and monitors ML models in production.” Ask assumptions: data volume, latency targets, SLAs for drift detection, compliance needs. | Sets scope and identifies constraints (e.g., GDPR). |
| **Approach** | 1️⃣ *Model Lifecycle*: versioned training → packaging (ONNX/TensorFlow‑Lite) → containerized deployment. 2️⃣ *Serving*: use a model server (TorchServe/TF Serving) behind an API gateway with autoscaling. 3️⃣ *Observability*: telemetry (latency, error rates), feature & prediction monitoring, drift alerts. 4️⃣ *CI/CD*: automated tests, canary releases, rollback strategy. | Gives a high‑level map before coding. |
| **Depth** | • **Training**: use data pipelines (Airflow/Delta Lake) with reproducible environments (Docker + Conda). <br>• **Deployment**: container image pushed to registry; orchestrated by Kubernetes; sidecar for logging. <br>• **Monitoring**: Prometheus/Grafana dashboards; ML‑specific metrics via Evidently or Fiddler; anomaly detection on feature distributions. <br>• **Governance**: model cards, audit logs, access controls (RBAC). Complexity: training O(n log n), inference latency ~ms; trade‑off between batch vs online inference. | Covers key technical choices and performance considerations. |
| **Edge Cases** | • Data shift → false positives in alerts.<br>• Model poisoning attacks.<br>• Cold starts causing latency spikes.<br>• Regulatory changes requiring model audit. Test by simulating drift, load spikes, and unauthorized access. | Highlights robustness checks. |
| **Optimize & Communicate** | • Cache frequent predictions; use vectorized inference.<br>• Adopt feature store to avoid data duplication.<br>• Document pipeline in README + Swagger docs for API consumers. Narrate by walking interviewers through the flowchart, emphasizing trade‑offs and monitoring signals that keep the system healthy. | Shows proactive thinking and clear communication. |

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
