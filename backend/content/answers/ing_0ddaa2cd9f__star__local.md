---
qid: ing_0ddaa2cd9f__star__local
question: 'Explain: When you add credit, debit, prepaid, or transit cards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 333
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:12-05:00'
sources: []
---

**Situation:** In a fintech startup, our fraud‑detection model was missing key signals because the training set only included standard debit and credit cards; prepaid and transit card transactions were treated as generic “card” events, so false positives rose to 18 % during peak holiday sales.

**Task:** I had to redesign the feature extraction pipeline to capture distinct behaviors of each card type without inflating model complexity or latency beyond our real‑time threshold (≤10 ms per transaction).

**Action:** First, I mapped the raw payment logs to a unified schema and added a “card_type” categorical field. Using Spark SQL, I engineered separate interaction features: time‑of‑day purchase frequency for prepaid cards, average merchant category spend for transit cards, and velocity checks for high‑value credit card bursts. Then I applied one‑hot encoding with sparse matrices in scikit‑learn’s `LogisticRegression` pipeline, ensuring memory usage stayed under 1 GB. Finally, I staged a A/B test on a 5% traffic slice to monitor precision/recall drift.

**Result:** After deployment, false positives dropped from 18 % to 9 %, while overall fraud detection accuracy improved by 4.7 %. The model’s inference latency remained at 8 ms per request. I learned that tailoring feature engineering to card‑type semantics can yield significant gains without compromising performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
