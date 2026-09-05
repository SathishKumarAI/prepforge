---
qid: ing_88d73c5bd6__star__local
question: ROC-AUC vs PR-AUC - what does each measure, and why does ROC-AUC look deceptively
  good on imbalanced data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 344
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:18-05:00'
sources: []
---

**Situation:**  
During a fraud‑detection pilot at my previous company, the dataset was heavily skewed: only 2 % of transactions were fraudulent. We initially evaluated our classifier using ROC‑AUC and were thrilled with a score of 0.96.

**Task:**  
I needed to verify whether that performance reflected real-world usefulness and to choose a metric that would guide model tuning for the rare fraud class.

**Action:**  
I compared ROC‑AUC against PR‑AUC, calculating both from our validation set. I plotted precision–recall curves and noted that while the false positive rate stayed low across thresholds (hence the high ROC), the precision dropped sharply once we pushed sensitivity above 70 %. I also ran a Monte Carlo simulation to see how many legitimate transactions would be flagged at different thresholds, revealing a 15 % false‑positive load. By focusing on PR‑AUC, I tuned the decision threshold to maximize recall without sacrificing precision beyond acceptable limits.

**Result:**  
The PR‑AUC dropped from 0.82 (ROC) to 0.45 when considering only the top 5 % of predictions, highlighting the risk of overestimating performance on imbalanced data. After re‑tuning, we achieved a precision of 68 % at 80 % recall, reducing false alarms by 40 %. I learned that ROC can be deceptively optimistic because it treats all negatives equally; PR focuses directly on the minority class and is more informative for real-world deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
