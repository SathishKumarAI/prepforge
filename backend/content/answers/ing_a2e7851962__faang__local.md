---
qid: ing_a2e7851962__faang__local
question: 'Explain: Heuristics — What is concept drift in ML, and how to detect and
  address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 462
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:17-05:00'
sources: []
---

**Clarify**  
You’re asking about *concept drift*: when the statistical relationship between input features and the target variable changes over time. I’ll assume a supervised learning setting with an online or streaming data source, and that we already have a baseline model trained on historic data.

**Approach**  
1. Define the concept (distribution of \(X,Y\)).  
2. Monitor for deviations using statistical tests or drift‑detection algorithms.  
3. When drift is flagged, decide whether to retrain, update incrementally, or adjust the model’s weighting.

**Depth**  

| Step | Technique | Why it works | Complexity |
|------|-----------|--------------|------------|
| Drift detection | *Population stability index (PSI)*, *Kolmogorov–Smirnov test*, *ADWIN/EDD* | Quantifies shift in feature or prediction distributions; ADWIN adapts to streaming data with \(O(\log n)\) memory | \(O(d)\) per record |
| Label‑based detection | *Prediction error monitoring* (rolling window of accuracy, F1) | Directly measures performance loss | \(O(1)\) per record |
| Model update | Retrain on recent window, online learning (SGD), or ensemble with aging weights | Keeps the model aligned to current distribution | Depends on method; retraining is \(O(n\cdot d)\) |

**Edge Cases**  
- *No labels*: rely solely on unsupervised drift detectors.  
- *Sudden vs gradual drift*: ADWIN handles both, but a sliding window may miss abrupt changes.  
- *Feature engineering shifts*: drift in engineered features can be mistaken for concept drift; validate with domain knowledge.

**Optimize & Communicate**  
Start with lightweight statistical checks (PSI) to flag potential drift. When flagged, trigger a more expensive online retraining pipeline that uses only the most recent data window, reducing storage costs. Explain trade‑offs: frequent retraining keeps accuracy high but increases compute; conservative thresholds reduce noise but risk stale models. Conclude by highlighting monitoring dashboards and alerting mechanisms to keep stakeholders informed—exactly what FAANG teams expect in production ML ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
