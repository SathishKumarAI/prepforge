---
qid: ing_125d50ba4b__star__local
question: 'Explain: How we leverage machine learning to predict repairs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 340
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:25-05:00'
sources: []
---

**Situation**  
In our last quarterly sprint for the fleet‑maintenance platform, we were consistently missing the 15‑minute window that OEMs required for predictive service alerts. The data lake had over 3 TB of telemetry from 1,200 vehicles, but our rule‑based engine only caught about 40 % of imminent failures.

**Task**  
I was tasked with building a machine‑learning model to raise the detection rate to at least 80 % while keeping false positives below 5 %. The goal was to deliver a real‑time inference pipeline that could run on our edge gateway without exceeding 200 ms latency.

**Action**  
First, I engineered time‑series features—rolling statistics, lagged residuals, and anomaly scores—from CAN bus signals using Spark SQL. Next, I trained an XGBoost classifier with stratified cross‑validation; feature importance revealed that steering torque variance and brake pressure spikes were the top predictors. To satisfy latency constraints, I distilled the model into a LightGBM version and deployed it via ONNX on the gateway’s ARM CPU. I also set up a continuous monitoring dashboard in Grafana to flag drift and retrain monthly.

**Result**  
The new system lifted true‑positive detections from 40 % to 82 %, while false positives dropped to 3.7 %. We reduced unscheduled downtime by 28 % and saved an estimated $120K annually in labor costs. I learned that blending domain knowledge with automated feature engineering is key, and that model interpretability drives trust among maintenance teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
