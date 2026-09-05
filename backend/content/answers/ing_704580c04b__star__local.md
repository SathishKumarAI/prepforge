---
qid: ing_704580c04b__star__local
question: 'Explain: Features — Event'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 303
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:25-05:00'
sources: []
---

**Situation:** In a credit‑card fraud detection project for a regional bank, our model’s precision was dropping after a sudden spike in new merchant types. The risk team flagged that the event data (merchant category codes) were being treated as static features.

**Task:** I needed to redesign the feature engineering pipeline so that each transaction could be represented by a dynamic “event” vector—capturing time‑dependent patterns of merchant interactions—and retrain the model without losing interpretability.

**Action:** I built an event‑based feature extractor using Apache Beam. Each transaction was mapped to a sliding window of the last 30 days, and I generated counts, entropy scores, and lag features for each merchant category. I encoded these as sparse vectors in Scikit‑Learn’s `DictVectorizer`, then fed them into a LightGBM model with early stopping. To keep the pipeline production‑ready, I containerized the extractor in Docker and scheduled it via Airflow.

**Result:** After deployment, precision improved from 82% to 94%, while recall stayed above 88%. The event‑based features also reduced false positives by 30%, cutting manual review effort by $120k annually. I learned that treating categorical attributes as events—not static fields—can dramatically capture evolving fraud patterns and keep models both accurate and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
