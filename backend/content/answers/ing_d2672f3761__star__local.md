---
qid: ing_d2672f3761__star__local
question: 'Explain: Marketing — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 314
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:17-05:00'
sources: []
---

**Situation:**  
When I joined Glean, the marketing team was struggling to keep up with the influx of product usage data from our new knowledge‑base platform. Campaigns were being launched on a “fire‑fight” basis because we had no reliable way to predict which user segments would respond best to personalized outreach.

**Task:**  
I needed to build an ML‑driven segmentation engine that could automatically surface high‑value customer groups for targeted marketing, reducing manual research time by 70% and improving campaign lift.

**Action:**  
Using Python’s scikit‑learn, I engineered features from clickstream logs, retention scores, and feature adoption rates. I trained a Gradient Boosting Classifier to predict “churn risk” versus “campaign responsiveness.” After validating the model on a hold‑out set (AUC = 0.82), I deployed it via an internal API that fed directly into HubSpot’s segmentation rules. I also created a lightweight dashboard in Tableau so marketers could see real‑time cohort scores and experiment with different thresholds.

**Result:**  
Within three months, the marketing team cut research time from 3 days to 6 hours per campaign, and targeted campaigns saw a 25% higher open rate and a 15% lift in conversion. I learned how to translate raw product telemetry into actionable marketing signals while keeping the pipeline maintainable for non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
