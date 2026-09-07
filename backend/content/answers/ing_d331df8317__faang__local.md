---
qid: ing_d331df8317__faang__local
question: 'Explain: Monitoring and drift — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 402
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:23-05:00'
sources: []
---

**Clarify**  
We’re asked how to *monitor* an AI model for performance loss (drift) and keep it observable in production.  
Assumptions: we have a deployed ML pipeline, labeled data is scarce, and stakeholders need actionable alerts.

**Approach**  
1. **Data drift detection** – monitor feature distributions vs training set using KS/Chi‑2 tests or Wasserstein distance.  
2. **Concept drift detection** – track prediction statistics (accuracy, AUC) on a holdout or streaming validation set.  
3. **Model health metrics** – latency, error rates, resource usage.  
4. **Observability stack** – log every request/response pair with metadata; feed into a time‑series DB and alerting system.

**Depth**  
- *Feature drift*: compute mean/std per feature monthly; flag > 3σ change → retrain trigger.  
- *Concept drift*: use sliding window of predictions, run online AUC drift test (e.g., ADWIN).  
- *Alerting*: threshold‑based alerts + anomaly detection (Isolation Forest) on composite health score.  
Complexity: O(n) per batch for statistics; memory ≈ O(k) for sliding windows. Trade‑off between granularity and overhead.

**Edge Cases**  
- Sparse labels → rely more on unsupervised drift.  
- Seasonal patterns → mask expected shifts to avoid false positives.  
- Adversarial data → add robustness checks (e.g., outlier detection).

**Optimize & Communicate**  
Start with lightweight monitoring, iterate to full observability as trust grows. Present the pipeline diagram, show sample alerts, and explain how each metric feeds into a model‑retraining decision loop. This shows structured thinking, depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
