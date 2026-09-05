---
qid: ing_eaa7b02ae2__star__local
question: 'Explain: Pre-screen questionnaire — Meta Machine Learning Engineer (MLE)
  Interview Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 344
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:33-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a fraud‑detection model for credit card transactions. The data pipeline was ingesting over 10 M records per day, but the model’s precision dropped from 94% to 88% during a sudden spike in legitimate merchant activity.

**Task:**  
I had to restore precision without hurting recall or increasing latency beyond our real‑time threshold of 50 ms per prediction. The deadline was two weeks before the next quarterly audit.

**Action:**  
First, I deployed an online A/B test using feature toggles to isolate the problem: a shift in merchant categories was skewing the feature distribution. I built a lightweight meta‑model that predicts when a transaction’s category is likely to be mislabelled and routes those cases through a secondary, more complex pipeline (gradient‑boosted trees) while keeping the default fast logistic regression for the rest. I also introduced an adaptive thresholding mechanism based on recent false‑positive rates, calculated via sliding window statistics in Kafka Streams. Finally, I automated monitoring with Prometheus alerts to trigger retraining when drift exceeded 2%.

**Result:**  
Precision rebounded to 93% and recall remained at 92%, keeping latency under 48 ms. The dual‑pipeline approach cut cost by 30% compared to a full‑scale model, and the adaptive thresholding reduced false positives by 15% over three months. I learned that combining lightweight meta‑models with dynamic thresholds can balance performance and scalability in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
