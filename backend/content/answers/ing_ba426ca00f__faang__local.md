---
qid: ing_ba426ca00f__faang__local
question: 'Explain: Interview questions — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 574
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:57-05:00'
sources: []
---

**Clarify**  
We need to explain how interviewers evaluate an AI system’s *evaluation* (performance metrics) and *observability* (runtime monitoring). I’ll assume the context is production‑grade ML models that must be continuously monitored for drift, fairness, and safety.

---

**Approach**  
1. Define key evaluation metrics per task (accuracy, AUC, F1, calibration).  
2. Map observability pillars: data drift, model drift, latency, error rates, resource usage.  
3. Show how to instrument production pipelines and feed back into the evaluation loop.

---

**Depth**

| Aspect | What to measure | Typical tools / methods |
|--------|-----------------|-------------------------|
| **Model Evaluation** | Accuracy, precision/recall, ROC‑AUC, calibration curves, fairness metrics (demographic parity, equalized odds). | `scikit-learn`, `MLflow` experiments. |
| **Data Drift** | KL divergence of feature distributions, population stability index. | `river`, `Alibi Detect`. |
| **Model Drift** | Prediction distribution shift, concept drift tests (ADWIN, Page‑Hinkley). | `alibi-detect`, custom monitoring scripts. |
| **Observability** | Latency (p99), error rates, CPU/memory usage, request/response logs. | Prometheus + Grafana dashboards, OpenTelemetry traces. |
| **Alerting & Rollback** | Thresholds for drift or performance drop trigger alerts and automated rollback pipelines. | PagerDuty, Argo Rollouts. |

Complexity: Metric calculation is *O(n)* per batch; drift tests can be *O(1)* incremental. Trade‑offs: tighter thresholds → more alerts (false positives) vs. delayed detection.

---

**Edge Cases**

* Small sample size → noisy metrics; use confidence intervals.  
* Adversarial inputs may bypass drift detectors; incorporate adversarial testing.  
* Multi‑label or sequence tasks need custom fairness metrics.  

Testing strategy: unit tests for metric functions, integration tests with synthetic drift, A/B test rollback logic.

---

**Optimize & Communicate**

- **Batching**: Compute metrics in micro‑batches to reduce latency.  
- **Feature Store**: Centralized feature registry ensures consistency between training and serving.  
- **Narrative**: “We evaluate once per epoch during training, then continuously observe at request level; any drift triggers an automated rollback, ensuring zero‑downtime.”  

This structured answer demonstrates clear problem framing, a concrete plan, technical depth with tool choices, awareness of edge cases, and practical optimizations—all key to scoring high in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
