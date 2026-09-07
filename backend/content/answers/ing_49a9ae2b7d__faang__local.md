---
qid: ing_49a9ae2b7d__faang__local
question: 'Explain: Why Systems Become Unreliable — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 477
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:35:32-05:00'
sources: []
---

**Why ML Systems Become Unreliable**

| Step | What to Cover |
|------|---------------|
| **Clarify** | *Problem*: An ML‑powered service (e.g., recommendation, fraud detection) shows sudden performance drops or incorrect predictions in production. <br> *Assumptions*: 1️⃣ Model was trained offline on historical data; 2️⃣ Production traffic ≠ training distribution; 3️⃣ System has monitoring but no real‑time retraining. |
| **Approach** | 1️⃣ Detect drift (data, concept, or feature). 2️⃣ Isolate the root (distribution shift, feature outages, label noise). 3️⃣ Mitigate via robust pipelines: online learning, fallback rules, and continuous validation. |
| **Depth** | *Data‑drift*: Use KL‑divergence or MMD between incoming batch and training distribution; flag if > threshold. <br>*Concept‑drift*: Track model accuracy on a sliding window of labeled samples (e.g., A/B test feedback). <br>*Feature outages*: Add null‑value detectors; fallback to simpler models that ignore missing features. <br>Implement a “shadow” inference path that runs the new model in parallel and compares outputs before deployment. Complexity: O(n) per batch for drift metrics, negligible runtime overhead. |
| **Edge Cases** | • Sudden spike in traffic (e.g., promotion).  <br>• Feature value distribution changes due to seasonality.  <br>• Label noise in real‑time feedback loop causing false drift alerts. Test by injecting synthetic shift and monitoring alert cadence. |
| **Optimize & Communicate** | *Improvements*: Auto‑trigger retraining when drift persists > k windows; use ensembling of old/new models for gradual rollout. <br>*Narration*: “We monitor statistical distance between incoming data and the training set, and if it exceeds our confidence interval we pause new predictions and fall back to a vetted baseline, ensuring business continuity while we retrain.” |

**Takeaway**: Reliability hinges on continuous observation of *distribution*, *concept*, and *feature* health; without proactive drift detection and graceful degradation, ML systems quickly become brittle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
