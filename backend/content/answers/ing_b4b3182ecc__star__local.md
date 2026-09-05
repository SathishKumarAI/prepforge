---
qid: ing_b4b3182ecc__star__local
question: 'Explain: distance from the rider consider the rider'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 409
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:59-05:00'
sources: []
---

**Situation** – In my last role at a bike‑sharing startup, the marketing team noticed that our trip‑duration predictions were off by 30 % for commuters who rode during peak hours. The data showed that “rider type” (casual vs. member) heavily influenced how far people would travel before dropping off.

**Task** – I was asked to build a distance metric that incorporated rider class so the model could weight trips differently, improving the accuracy of our trip‑duration estimator for both segments.

**Action** – I started by profiling the data: I computed the covariance matrix of all location coordinates separately for casual and member riders. Using Mahalanobis distance, I defined a weighted Euclidean metric where the weights came from each rider group’s covariance—this naturally down‑weights directions with high variance (e.g., popular commuting corridors) and emphasizes unique travel patterns. I then integrated this distance into our gradient‑boosted tree feature set as an engineered variable (“rider‑aware distance”). To keep computation fast, I pre‑computed the inverse covariance matrices on a Spark cluster and cached them for real‑time inference.

**Result** – After deploying the new metric, the mean absolute error of trip‑duration predictions dropped from 9.2 min to 6.5 min—a 29 % improvement. The marketing team used the refined model to target promotions at members who were likely to travel longer distances, boosting revenue by 12 %. I learned that tailoring distance calculations to user subgroups can reveal hidden structure and dramatically improve predictive performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
