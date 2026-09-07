---
qid: ing_c2485e5fae__faang__local
question: 'Explain: AI Evaluations & Observability <a name="evals"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:44-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *AI evaluations and observability*.  
Assumptions: the audience knows basic ML but not deployment pipelines; we want a concise overview of why we need metrics during training & inference and how to instrument them.

---

**Approach**  
1. Define “evaluation” (model‑level performance) vs “observability” (runtime monitoring).  
2. List key metrics for each stage.  
3. Show typical tooling (MLflow, Prometheus, SageMaker Debugger).  
4. Mention feedback loops and alerting.

---

**Depth**  

| Phase | Purpose | Core Metrics | Typical Tool |
|-------|---------|--------------|-------------|
| **Training** | Gauge learning progress & generalization | Loss curve, validation accuracy, AUC‑ROC, calibration error, class‑wise F1 | TensorBoard, MLflow Tracking |
| **Model Card** | Communicate assumptions & constraints | Bias metrics (demographic parity), fairness gaps, data drift indicators | Fairness ML libraries, OpenAI Model Cards |
| **Inference** | Ensure healthy serving | Latency (p99), throughput, error rate, request/response size, resource utilization | Prometheus + Grafana, CloudWatch |
| **Observability** | Detect degradation over time | Drift score (KL divergence of feature distributions), concept drift (prediction‑vs‑ground truth mismatch), anomaly alerts | SageMaker Debugger, Evidently AI |

*Trade‑offs*: More granular metrics → higher overhead; coarse metrics may miss subtle drift.  
Complexity: O(1) per request for latency; O(n) for drift checks (windowed statistics).

---

**Edge Cases**  

- **Cold start** in serverless inference can inflate latency spikes—monitor separately.  
- **Unlabeled data** during production → use semi‑supervised drift detection.  
- **Model updates** may cause sudden performance drops; A/B test before rollout.

---

**Optimize & Communicate**  

Start with a minimal viable set (latency + error rate). Iterate by adding drift and fairness checks once baseline is stable. Explain to stakeholders that observability turns silent “model health” into actionable alerts, reducing mean time to recovery from weeks to minutes. Use clear dashboards; keep the narrative focused on *what* we’re measuring, *why*, and *how it protects business value*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
