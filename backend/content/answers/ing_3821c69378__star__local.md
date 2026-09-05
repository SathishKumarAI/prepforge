---
qid: ing_3821c69378__star__local
question: 'Explain: Threshold tuning - precision/recall as a business decision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 326
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:32-05:00'
sources: []
---

**Situation**  
I was leading the fraud‑detection team at a mobile payments startup that processed $120 M/month in transactions. Our new anomaly model had 88 % precision and 75 % recall, but the CFO flagged that too many legitimate users were being blocked.

**Task**  
Balance customer experience with revenue loss by choosing a threshold that maximized business value: minimize false positives (customer churn) while still catching high‑risk fraud that costs $15k per incident.

**Action**  
I plotted the precision–recall curve and calculated the expected cost for each operating point. Using a simple cost matrix—$50 for an unnecessary block, $15 000 for a missed fraud—I ran a grid search on the probability cutoff. I also introduced a secondary “confidence band” to defer borderline cases to manual review. The chosen threshold was 0.63: precision rose to 92 % and recall to 68 %. We logged the decisions in an A/B experiment and updated the model weekly.

**Result**  
Within two weeks, customer‑reported false blocks dropped by 35 %, while detected fraud incidents fell from 12 to 9 per week—saving $135 k/month. The exercise taught me that threshold tuning is a business‑first activity: you must quantify the trade‑offs and iterate quickly with real‑world metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
