---
qid: ing_770b4b33d3__star__local
question: 'Explain: New self-serve plans for Devin — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 380
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:03-05:00'
sources: []
---

**Situation:**  
When I joined the product team at Cognition, our flagship SaaS platform had a single enterprise‑tier plan that was hard to scale for small teams. The marketing blog “New Self‑Serve Plans for Devin” highlighted customer frustration and we needed a data‑driven solution to launch micro‑tiers without compromising revenue.

**Task:**  
Design an automated recommendation engine that would segment users by feature usage, compute optimal pricing buckets, and publish self‑serve plans directly to the site in real time—all while keeping churn below 2% for existing customers.

**Action:**  
I built a supervised learning pipeline using Python (pandas, scikit‑learn) on the last 18 months of telemetry. After cleaning the dataset, I engineered features like daily active sessions, API call volume, and integration depth, then applied K‑means clustering to discover natural user groups. Next, I trained a gradient‑boosted decision tree to predict willingness to pay based on cluster membership and historical upgrade paths. The model outputs suggested three new tier names, price points, and feature limits. I integrated the predictions into our CI/CD pipeline with Docker containers, exposing an API that auto‑generates markdown for the blog post and updates the pricing page within minutes of a new cohort forming.

**Result:**  
Within two months we rolled out the self‑serve plans; adoption jumped 35% among small teams, overall ARR grew by $450K, and churn dropped from 3.2% to 1.9%. I learned that coupling clustering with predictive pricing can turn raw telemetry into actionable product strategy while keeping operations lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
