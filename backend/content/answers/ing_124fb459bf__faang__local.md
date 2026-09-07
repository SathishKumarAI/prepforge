---
qid: ing_124fb459bf__faang__local
question: 'Explain: E - Evaluation and Observability — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 544
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:24-05:00'
sources: []
---

**E – Evaluation & Observability: Answer Frameworks for AI Systems**

### 1️⃣ Clarify  
We’re asked how to evaluate an AI model *and* make its behavior observable during production.  
Assumptions to confirm:  
- The system is a predictive ML service (e.g., classification or recommendation).  
- Production traffic is high‑volume, low‑latency, and needs compliance/monitoring.  

### 2️⃣ Approach  
1. **Define evaluation metrics** that capture accuracy, fairness, calibration, and cost.  
2. **Set up online A/B testing & drift detection** to compare real‑time performance against a baseline.  
3. **Instrument telemetry** (latency, error rates, feature distribution) for observability.  
4. **Automate alerts & dashboards** that surface anomalies quickly.  

### 3️⃣ Depth  
- **Metrics**: Macro‑F1 + ROC‑AUC for classification; RMSE + MAE for regression; plus bias metrics per demographic slice.  
- **Online Evaluation**: Use *bandit* or *contextual bandit* strategies to allocate traffic while learning. Drift detection via *Population Stability Index (PSI)* and *KS-test* on feature histograms.  
- **Observability Stack**:  
  - *Instrumentation*: OpenTelemetry traces + Prometheus metrics.  
  - *Feature Store Auditing*: Log every feature value used in a request.  
  - *Model‑level logs*: Store predictions, confidence scores, and input vectors for post‑mortem.  
- **Alerting**: Thresholds on latency >95th percentile or F1 drop >5% over 30 min trigger ops alerts.  

### 4️⃣ Edge Cases  
- Sudden data shift (e.g., new user demographics).  
- Model overload → queue backpressure.  
- Feature value outliers causing NaNs in predictions.  
Test by simulating drift, injecting malformed features, and load‑spiking the service.

### 5️⃣ Optimize & Communicate  
- **Batch vs. Streaming**: Batch re‑evaluation nightly; streaming for real‑time drift.  
- **Model Versioning**: Store checkpoints with metadata (metrics snapshot).  
- **Narrative**: “We’ll monitor both *what* it predicts and *how* we predict, ensuring any deviation is caught before it impacts users.”  

This framework balances rigorous offline evaluation with continuous online observability, a core requirement for production‑grade AI at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
