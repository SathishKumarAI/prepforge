---
qid: ing_f453fa2c90__faang__local
question: 'Explain: After Each Section — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 511
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:50-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe common pitfalls that arise *after* each major section of an AI project lifecycle (data, modeling, evaluation, deployment).  
Assumptions:  
- “After each section” means immediately before moving on to the next phase.  
- The audience is familiar with ML pipelines but needs concrete pitfalls and mitigations.

---

**Approach**  
1. List the canonical phases (Data → Feature Engineering → Model Training → Evaluation → Deployment).  
2. For each, enumerate typical mistakes that surface right after completion.  
3. Briefly state why they matter and how to avoid them.

---

**Depth**

| Phase | Common Pitfall | Why It Matters | Mitigation |
|-------|----------------|----------------|------------|
| **Data** | *Leakage via time‑split misuse* | Training on future data inflates performance. | Strict temporal split; use windowing or rolling cross‑validation. |
| **Feature Engineering** | *Over‑engineering / multicollinearity* | Inflated variance, harder to interpret. | Apply dimensionality reduction (PCA) or regularization; monitor feature importance. |
| **Model Training** | *Early stopping mis‑tuned* | Premature convergence → underfitting; late stop → overfit. | Use validation curves, patience & learning‑rate scheduling; cross‑validate hyperparameters. |
| **Evaluation** | *Single metric reliance* | Misses trade‑offs (precision vs recall). | Report a metric suite; use ROC/PR curves; calibrate thresholds per business objective. |
| **Deployment** | *Cold start / data drift oversight* | Model performance degrades quickly in production. | Implement monitoring dashboards, periodic re‑training triggers, and drift alerts. |

---

**Edge Cases**

- Small datasets → cross‑validation variance spikes.  
- Imbalanced classes → metrics like accuracy become misleading.  
- Real‑time inference constraints → latency budgets may be violated.

Test each phase with synthetic edge data: extreme values, missingness patterns, concept drift scenarios.

---

**Optimize & Communicate**

Highlight that the goal is to create a *self‑healing* pipeline: after every section, run automated checks (unit tests for data quality, sanity checks on feature stats, validation curves).  
Explain that this reduces downstream surprises and saves time in production. Conclude by stressing continuous monitoring as the ultimate safeguard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
