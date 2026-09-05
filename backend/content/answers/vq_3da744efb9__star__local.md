---
qid: vq_3da744efb9__star__local
question: What is the definition of an inlier?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 314
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:51-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection project for a credit‑card company, our model’s precision dropped from 92 % to 85 % after a surge of new transaction patterns during the holiday season.

**Task:** I needed to identify which transactions were legitimate “inliers” versus suspicious outliers so we could retrain the classifier without compromising coverage.

**Action:** First, I defined an inlier as any data point that falls within the central distribution of historical normal transactions—specifically, those with a Mahalanobis distance below the 95th percentile. Using Python’s `scipy.stats` and `numpy`, I calculated distances for each transaction feature set (amount, time, merchant category). Transactions flagged above this threshold were marked as outliers. I then visualized clusters with t‑SNE in Jupyter to confirm that the outlier group contained atypical spending patterns (e.g., high-value purchases abroad). Finally, I excluded confirmed outliers from the training split and retrained a gradient‑boosted tree.

**Result:** Precision improved back to 91 %, recall stayed at 88 %, and false‑positive rate dropped by 30 %. The exercise taught me that a clear statistical definition of inliers—rooted in distributional distance—can dramatically stabilize model performance when data drift occurs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
