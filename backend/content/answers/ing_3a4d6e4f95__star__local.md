---
qid: ing_3a4d6e4f95__star__local
question: 'Explain: country of booking and etc based on — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 319
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:12-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the accuracy of our trip‑origin predictions for a rideshare platform that operates in over 30 countries. The existing rule‑based system misidentified the country of booking about 18 % of the time, which caused billing errors and poor driver allocation.

**Task:**  
I needed to build an end‑to‑end ML pipeline that could classify the country from raw trip data (GPS traces, timestamps, user device locale) with >95 % accuracy, while keeping latency below 50 ms for real‑time dispatch.

**Action:**  
I started by engineering a feature set: geohash grids, time‑zone offsets, and language‑model embeddings of the pickup address. I trained a LightGBM classifier on a labeled dataset of 2 million trips, using stratified K‑fold cross‑validation to tune hyperparameters. For deployment I wrapped the model in a FastAPI microservice behind an Nginx gateway, and used Redis for caching recent predictions. To satisfy latency constraints I added a fallback rule‑based module that triggers only when the ML confidence <0.6.

**Result:**  
The new system reduced country misclassification to 3 %, cutting billing disputes by 60 % and improving driver assignment efficiency by 12 %. I also documented the feature importance, which helped the product team prioritize future data collection efforts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
