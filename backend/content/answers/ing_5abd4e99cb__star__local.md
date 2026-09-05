---
qid: ing_5abd4e99cb__star__local
question: 'Explain: Your offline evals improved but the online metric dropped after
  launch. Walk me through the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 259
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:05-05:00'
sources: []
---

**Situation:**  
After deploying our recommendation engine, we saw a 12% lift in offline AUC but a 7% drop in the live click‑through rate (CTR) over the first week.

**Task:**  
Identify why the model that looked great in the lab was hurting real traffic and restore the CTR without sacrificing too much precision.

**Action:**  
I started by reconciling the feature distributions between our offline test set and production data. Using Python’s pandas, I plotted the KDE of key user‑interest embeddings; they were skewed toward new users in production. Next, I added a small “freshness” penalty to the inference pipeline, re‑ranking items with an exponential decay on recency. To validate quickly, I ran a 1‑hour A/B test on a 5% traffic slice and monitored latency with Prometheus.

**Result:**  
The adjusted model lifted CTR back up by 4%, bringing it within 2% of the baseline while only dropping offline AUC by 0.3%. I learned that feature drift can flip performance metrics, and that lightweight post‑processing tweaks can bridge the gap between lab gains and real‑world impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
