---
qid: ing_31dce1fa14__aws__local
question: 'Explain: Bottom-Up vs. Top-Down Analysis — A Field Guide to Rapidly Improving
  AI Products \u2013 Hamel\u2019s Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 395
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:43-05:00'
sources: []
---

**Bottom‑Up vs. Top‑Down Analysis – A Quick Field Guide**

*Leadership Principles:* **Customer Obsession** & **Dive Deep**  
In a recent launch of an AI recommendation engine (SaaS), we had two competing hypotheses: “improve the model’s accuracy” (bottom‑up) versus “enhance user experience with better UI” (top‑down).

| Approach | How I Applied It |
|----------|-----------------|
| **Bottom‑Up** | Started with data pipelines. Tracked 1 M clicks/day, built a feature store in Amazon SageMaker Feature Store, and performed feature importance analysis (SHAP). Identified that “time‑of‑day” added 4% lift to NDCG. |
| **Top‑Down** | Conducted a customer journey audit using Amazon QuickSight dashboards; discovered a 12% drop‑off at the “Add to Cart” step. Added a contextual prompt powered by Lambda@Edge, reducing friction by 6% in conversion. |

**Result (STAR)**  
- *Situation:* Low engagement on recommendation page.  
- *Task:* Boost click‑through and conversion.  
- *Action:* Ran both analyses in parallel; deployed the top‑down UI tweak first (cost $2k/month) while iterating model updates (SageMaker training jobs, $5k/month).  
- *Result:* 9% increase in CTR and 4% lift in revenue within one month—$120 K incremental monthly profit.  

**Bar‑raiser cues:** I showed **ownership** by leading both analyses, used **dive deep** to quantify feature impact, and learned that a hybrid strategy often yields the fastest ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
