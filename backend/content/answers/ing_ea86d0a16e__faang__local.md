---
qid: ing_ea86d0a16e__faang__local
question: 'Explain: Evals & quality loop — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:14-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of an *evaluation‑and‑quality‑loop* for an AI system—i.e., how we continuously measure performance, surface issues, and feed corrections back into the model pipeline. Key assumptions: we have a live ML service (e.g., recommendation), labeled data is scarce, latency ≤ 100 ms, and we need to preserve user privacy.

**Approach**  
1. **Data capture layer** – log inputs, predictions, user feedback, and contextual metadata.  
2. **Evaluation engine** – batch & online metrics (accuracy, AUC, fairness).  
3. **Anomaly detection** – drift detectors on feature distributions and performance curves.  
4. **Feedback loop** – flagged samples enter a prioritised labeling queue; retraining triggers incremental updates via MLOps pipelines.  
5. **Governance & monitoring** – dashboards + alerting, with rollback capability.

**Depth**  
- *Capture*: Store immutable event logs in a time‑series store (e.g., ClickHouse) for sub‑second retrieval.  
- *Evaluation*: Compute per‑segment metrics on 1 M events/day; use online learning to update estimates in O(1).  
- *Drift*: Apply KS‑test + sliding windows; if drift > threshold → auto‑trigger data augmentation.  
- *Retraining*: Use incremental gradient descent with a warm start from the last checkpoint; schedule nightly jobs, but allow hot‑patches for severe regressions.  
- Complexity: Evaluation O(n) per batch; anomaly detection O(k log k); retraining linear in dataset size.

**Edge Cases**  
- Missing labels → use semi‑supervised learning or user‑implicit signals.  
- Privacy violations → enforce differential privacy on logged data.  
- Model blackout during retrain → fallback to last stable checkpoint.

**Optimize & Communicate**  
We can reduce latency by caching recent predictions in Redis and using model distillation for the online inference tier. For communication, I’d present a diagram of the pipeline, highlight how each component satisfies SLAs, and explain trade‑offs (e.g., tighter drift thresholds increase false positives but catch regressions earlier). This structured narrative demonstrates clear problem framing, methodical planning, and depth—all key to a FAANG signal score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
