---
qid: ing_d0084aa5e3__faang__local
question: 'Explain: Input data drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 548
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:44:24-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *concept (or input) drift*—the change over time in the statistical relationship between features and target labels—and practical ways to spot it and keep a model healthy.

---

### 1️⃣ Approach  

| Step | What to do |
|------|------------|
| **Define** | Formalize drift as \(P(Y|X)\) changing, not just marginal \(P(X)\). |
| **Detect** | Compare recent data distributions (or predictive performance) against a reference. |
| **Address** | Retrain or adapt the model; update feature engineering; employ monitoring dashboards. |

---

### 2️⃣ Depth  

*Detection*  
- **Statistical tests**: KS, AD test on \(P(X)\); KL‑divergence for joint distributions.  
- **Performance metrics**: sliding‑window AUC/accuracy drift; use *prequential evaluation*.  
- **Feature‑wise monitoring**: track mean/std or histogram shifts with control charts.

*Remediation*  
- **Retraining**: schedule periodic full retrain or incremental learning (e.g., online SGD).  
- **Adaptive models**: ensemble of recent vs. historic models; weighted voting that decays older weights.  
- **Feature engineering**: add temporal features, use robust scaling, or transform skewed variables.

*Complexity*  
- Statistical tests are \(O(n \log n)\); monitoring dashboards run in real‑time with constant overhead.  
- Retraining cost depends on model size; online methods keep it linear per sample.

---

### 3️⃣ Edge Cases  

| Issue | Why it breaks |
|-------|---------------|
| **Label lag** | Delayed feedback makes drift detection slow. |
| **Minor shifts** | Statistical tests may miss subtle but impactful changes. |
| **Feature explosion** | High‑dimensional data inflates false positives in drift alerts. |

---

### 4️⃣ Optimize & Communicate  

- **Threshold tuning**: use ROC‑style calibration to balance sensitivity vs. false alarms.  
- **Explainability**: report which features drifted; link to business metrics.  
- **Narrative**: “We monitor the joint distribution of key predictors and target via a sliding window; when KL divergence exceeds 0.05, we trigger an automated retrain pipeline that preserves recent data while respecting compliance constraints.”  

This structured answer shows clear problem framing, concrete detection/mitigation techniques, awareness of pitfalls, and an operational mindset—all signals of FAANG‑level thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
