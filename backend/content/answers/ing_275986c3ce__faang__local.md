---
qid: ing_275986c3ce__faang__local
question: 'Explain: Model quality metrics — What is concept drift in ML, and how to
  detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 515
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:15:09-05:00'
sources: []
---

**Clarify**  
We’re asked to define *concept drift*—the change over time of the underlying relationship between features and target—and explain practical ways to spot it and react.

---

### Approach
1. **Define concept drift** (covariate vs label).  
2. **Detection methods**: statistical tests, sliding‑window performance, drift‑detector algorithms.  
3. **Remediation steps**: data collection, model retraining, incremental learning, ensemble strategies.  

---

### Depth

| Type | What it is | Detection | Remedy |
|------|------------|-----------|--------|
| **Covariate Drift** | Feature distribution changes but \(P(y|x)\) stays same | KS test, population stability index (PSI) on feature histograms | Update preprocessing pipelines; re‑sample training data |
| **Label Drift** | Target distribution shifts (e.g., churn rate rises) | Monitor confusion matrix, ROC‑AUC over time | Retrain with recent labeled data |
| **Concept Drift** | \(P(y|x)\) changes (true decision boundary moves) | *Statistical tests*: Hoeffding bound on performance metrics; *drift detectors*: ADWIN, Page–Hinkley, DDM; *sliding‑window* loss comparison | Incremental retraining, maintain a pool of recent instances, ensemble with aging weights |

- **ADWIN** keeps a variable‑size window; if the mean inside drops below an older segment by more than a bound, drift is flagged.  
- **Page–Hinkley** tracks cumulative deviation from baseline loss.

Complexity: O(n) per sample for online detectors; retraining cost depends on model (e.g., linear models can be updated in log‑time).  

---

### Edge Cases
- **Noisy labels** → false drift alerts.  
- **Seasonality** misinterpreted as drift—use seasonal decomposition first.  
- **Very sparse data** → detectors may never trigger; consider synthetic resampling.

---

### Optimize & Communicate

1. **Automate monitoring dashboards** (loss curves, PSI).  
2. **Set thresholds conservatively** to balance false positives/negatives.  
3. **Explain decisions to stakeholders**: show drift plots and impact on metrics.  

By combining statistical detection with adaptive retraining pipelines, we keep model performance stable even as real‑world distributions evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
