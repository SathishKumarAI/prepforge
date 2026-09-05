---
qid: ing_477fcbaf6e__star__local
question: 'Explain: Metrics to Track — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 340
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:43-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist at a fintech startup, we were launching an automated fraud‑detection model that had to be deployed within three months. Our leadership wanted clear metrics to evaluate the model’s capability before it went live.

**Task:**  
I was responsible for defining and tracking a set of performance indicators that would give us confidence in the model’s predictive power, robustness, and operational readiness.

**Action:**  
First, I set up an evaluation pipeline using scikit‑learn and Spark. I selected **AUC‑ROC** as the primary discrimination metric, but also monitored **Precision@k** (with k=50) to capture how many true fraud cases we flagged among the top alerts. For calibration, I tracked the Brier score and plotted reliability diagrams. To gauge stability, I calculated a rolling **F1‑score** over weekly validation sets and ran drift detection using KS tests on feature distributions. Finally, I automated these metrics into a Grafana dashboard that refreshed every 12 hours and sent alerts if any threshold was breached.

**Result:**  
When we rolled out the model, AUC was 0.94 and Precision@50 exceeded 80%, meeting our SLA targets. The drift monitoring alerted us to a sudden shift in transaction amount distribution two weeks before deployment, allowing us to retrain the model and avoid a potential false‑negative spike. I learned that a balanced mix of discrimination, calibration, stability, and operational metrics is essential for trustworthy AI capability assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
