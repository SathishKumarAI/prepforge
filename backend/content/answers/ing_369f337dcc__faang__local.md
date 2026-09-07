---
qid: ing_369f337dcc__faang__local
question: 'Explain: A/B Testing — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:50:57-05:00'
sources: []
---

**A/B Testing + Kubernetes Deployment Strategies**

| **Step** | **What it means** |
|----------|-------------------|
| **Clarify** | *Problem:* We want to compare two model versions (A vs B) in production without downtime. Assume we have a stateless inference service, traffic‑splitting knobs, and metrics collection. |
| **Approach** | 1️⃣ Deploy both pods with distinct tags (`model-v1`, `model-v2`). <br>2️⃣ Use *Istio/Envoy* or Kubernetes Ingress to split traffic (e.g., 90 % → A, 10 % → B). <br>3️⃣ Monitor key metrics (latency, error‑rate, AUC). <br>4️⃣ If B meets thresholds, promote it; otherwise roll back. |
| **Depth** | - *Deployment strategy:* Canary or blue‑green via a Service with weighted endpoints.<br>- *Traffic split*: `Service.spec.selector` + `EndpointSlice` annotations or Envoy’s VirtualService.<br>- *Metrics:* Prometheus scrape + Grafana dashboards; use ML ops tools (MLflow, Kubeflow Pipelines).<br>- *Complexity:* O(1) per request, overhead negligible. |
| **Edge Cases** | • Sudden spike in B traffic → overload; guard with circuit breakers.<br>• Data drift causes high error‑rate in B; fail fast. <br>• Pod restarts: ensure session affinity is off for stateless inference. |
| **Optimize & Communicate** | • Auto‑scale based on latency thresholds.<br>• Use a feature flag system (LaunchDarkly) to toggle traffic weights at runtime. <br>Explain trade‑offs: faster rollout vs risk of degraded user experience; heavier instrumentation vs cost. Always end with a clear decision rule for promotion or rollback. |

*Result:* A controlled, low‑risk A/B test that integrates cleanly into Kubernetes, giving you measurable confidence before full production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
