---
qid: ing_10fef2badd__faang__local
question: 'Explain: Requirements & success metrics — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 409
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:12-05:00'
sources: []
---

**Clarify**  
We’re designing an AI system that must meet business *requirements* (e.g., accuracy, latency, cost, privacy) and demonstrate *success* via measurable metrics.  
Assumptions:  
- The problem domain is known (classification/regression).  
- Data volume & quality are adequate.  
- Stakeholders value both model performance and operational constraints.

**Approach**  
1. **Define functional requirements** (accuracy ≥ X, inference ≤ Y ms).  
2. **Translate to technical specs**: data pipeline, compute budget, storage, compliance rules.  
3. **Select evaluation metrics** that align with business KPIs (e.g., F1 for imbalanced classes, AUC‑ROC for ranking).  
4. **Establish a baseline and iterative benchmarking loop**.

**Depth**  
- *Requirements*: Accuracy, latency, throughput, cost per inference, explainability, regulatory compliance.  
- *Success metrics*:  
  - **Statistical**: precision/recall, ROC‑AUC, MAE/MSE.  
  - **Operational**: latency distribution (99th percentile), CPU/GPU utilization, energy consumption.  
  - **Business**: conversion lift, churn reduction, revenue impact.  
- *Validation*: hold‑out test set + cross‑validation; monitor for concept drift.

**Edge Cases**  
- Distribution shift → re‑evaluate metrics daily.  
- Rare class imbalance → use precision@k or cost‑sensitive loss.  
- Model updates causing performance regressions → A/B testing before rollout.

**Optimize & Communicate**  
Explain trade‑offs: higher accuracy may increase latency; batch inference reduces cost but hurts real‑time needs. Use dashboards to show metric trends and alert thresholds. Conclude with a continuous improvement loop: collect feedback, retrain, redeploy, and re‑measure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
