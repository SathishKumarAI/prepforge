---
qid: ing_984bfb4dce__star__local
question: What is a health check? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 328
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:14-05:00'
sources: []
---

**Situation**  
At my previous startup, we had a real‑time anomaly detection model serving traffic from over 1 M users per day. After a sudden spike in false positives, the engineering team asked for a “health check” to surface issues before they impacted customers.

**Task**  
Design and implement an automated health check that could run every 15 minutes, flagging any drift in data distribution or model performance degradation while keeping latency under 200 ms per request.

**Action**  
I built a microservice using Python/Flask with Prometheus for metrics. The service pulled the last hour’s feature statistics (mean, std, min/max) from our Kafka stream and compared them to baseline values stored in Redis. For performance, I used Scikit‑Learn’s `partial_fit` on a lightweight calibration model to compute an online ROC‑AUC against recent predictions. If either drift or AUC fell below thresholds, the service emitted a Prometheus alert and sent a Slack message with actionable diagnostics (e.g., “feature X shifted by 2σ”). I also added an optional “shadow” mode that ran the new model in parallel for a week before full rollout.

**Result**  
The health check reduced undetected degradation from weeks to hours, cutting false positives by 35 % and preventing a potential $250K loss. It also gave us confidence to iterate models faster, learning that continuous monitoring is as critical as batch validation in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
