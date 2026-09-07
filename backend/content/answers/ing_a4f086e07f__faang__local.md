---
qid: ing_a4f086e07f__faang__local
question: What is concept drift? — What is concept drift in ML, and how to detect
  and address it
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 397
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:38-05:00'
sources: []
---

**Concept Drift in ML**

| **Stage** | **What to Cover** |
|-----------|------------------|
| **Clarify** | *Problem*: A model trained on historical data starts mis‑predicting because the underlying data distribution changes over time. <br>*Assumptions*: We have a streaming or periodic batch setting, labeled feedback available, and performance metrics that can be monitored. |
| **Approach** | 1️⃣ Define drift types (covariate, label, prior probability). <br>2️⃣ Monitor performance statistics (accuracy, AUC) and distributional checks (KS test, KL divergence). <br>3️⃣ Trigger re‑training or adaptation when thresholds are crossed. |
| **Depth** | *Detection*: Sliding‑window evaluation vs cumulative baseline; use statistical tests like Page‑Hinkley or ADWIN for online detection. <br>*Addressing*: Retrain on recent data, employ ensemble methods (online bagging), or adaptive models (e.g., Hoeffding trees). Complexity: O(n) per update for windowed stats; memory trade‑off between window size and sensitivity. |
| **Edge Cases** | Sudden concept shift vs gradual drift; noisy labels can trigger false positives; imbalanced classes may mask performance drops. Test on synthetic drift scenarios (e.g., rotating decision boundary). |
| **Optimize & Communicate** | • Use incremental learning to avoid full retraining. <br>• Log drift events for auditability. <br>Explain that monitoring metrics is like a health check: you only act when the signal crosses a clinically relevant threshold, balancing false alarms against missed drifts. |

*Key takeaway*: Concept drift is a distributional shift; detecting it requires statistical monitoring, and addressing it demands adaptive retraining or model ensembles that can learn from evolving data streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
