---
qid: ing_f66a84f7d6__star__local
question: What is the difference between precision and recall? How F1 combines both?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 338
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:32-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection pilot at my last company, our model was flagging about 5% of all transactions as fraudulent, but the audit team complained that many legitimate payments were being blocked.

**Task** – I had to tune the classifier so we reduced false positives (increase precision) without letting actual fraud slip through (maintain recall). The goal was a balanced metric that reflected both concerns.

**Action** – First, I plotted the precision‑recall curve by varying the decision threshold. I noticed that raising the threshold boosted precision from 0.72 to 0.85 but dropped recall from 0.68 to 0.50. To find a sweet spot, I calculated the F1 score—2 × (precision × recall)/(precision+recall)—for each threshold and chose the one with the highest F1 (≈0.74). I then retrained the model with cost‑sensitive weighting to penalize false negatives more heavily, which nudged recall back up while keeping precision above 0.80.

**Result** – The final deployment achieved a precision of 0.82 and recall of 0.72, giving an F1 of 0.77—a 12% lift over the baseline. I learned that precision and recall are complementary trade‑offs; F1 provides a single metric to guide threshold selection when both false positives and false negatives carry cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
