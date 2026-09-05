---
qid: vq_81e1720c3c__star__local
question: What is the purpose of selection bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 299
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:14-05:00'
sources: []
---

**Situation:** In a client‑facing recommendation engine for an e‑commerce platform, our model’s click‑through rate (CTR) was only 1.2%, far below the target of 3%. We noticed that most training data came from users who had already made purchases in the past month.

**Task:** I needed to identify why the model underperformed and redesign the data pipeline so it could generalize to new shoppers, not just repeat buyers.

**Action:** First, I performed a bias audit: plotted feature distributions for active vs. inactive users and found that 70% of our labeled examples were from frequent purchasers, creating a selection bias toward high‑value customers. To counter this, I introduced stratified sampling—ensuring equal representation across purchase frequency buckets—and added synthetic data for cold starts using SMOTE on demographic features. I also incorporated a domain‑adaptation loss in the training loop to penalize overfitting to the biased subset.

**Result:** After retraining with the corrected dataset, CTR rose from 1.2% to 3.8%, surpassing the target by 27%. The project taught me that selection bias can silently sabotage model performance; actively diagnosing and correcting it not only boosts metrics but also aligns the system with real‑world user diversity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
