---
qid: ing_403fdf167b__star__local
question: 'Explain: Moreover, you can imagine how being able'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:45-05:00'
sources: []
---

**Situation:**  
At my last company we launched a predictive churn model for our SaaS product. By month‑end the retention rate had slipped to 78%, below the 85% target, and stakeholders were skeptical because they couldn’t understand why certain customers were flagged as high risk.

**Task:**  
I was tasked with turning the black‑box model into a transparent tool that still delivered 92% accuracy, so product managers could act on the insights and justify budget for retention campaigns.

**Action:**  
First I swapped the raw gradient‑boosted tree for an XGBoost ensemble but kept the same feature set. Then I integrated SHAP (SHapley Additive exPlanations) to generate per‑instance contribution plots. I built a lightweight Flask API that exposed these explanations alongside predictions, and added a dashboard in Power BI where managers could filter by department or tenure. To keep latency low (<150 ms), I pre‑computed SHAP values for the top 10% of churn candidates during off‑peak hours.

**Result:**  
Within two weeks, the retention team used the explanations to launch targeted upsell emails that lifted retention from 78% to 84% within a month—an 8% absolute improvement. Accuracy stayed at 92%. I learned that combining explainability with real‑time APIs can bridge the gap between data science and business action without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
