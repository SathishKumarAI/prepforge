---
qid: ing_9a01afee2f__star__local
question: 'Explain: Top Sellers — Machine Learning Mastery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 327
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:40-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a quarterly e‑commerce analytics report for the fashion line. The “Top Sellers” metric was lagging behind competitors by 18% because our model misidentified items that were trending seasonally but had low sales volume.

**Task:**  
I needed to build an ML pipeline that could predict true top sellers, accounting for seasonal spikes and emerging trends, so we could reallocate inventory and marketing spend accurately within two weeks before the next quarterly report.

**Action:**  
- Collected 12 months of transactional data plus social‑media sentiment from Twitter and Instagram using Python’s Tweepy API.  
- Engineered features: lagged sales, rolling averages, sentiment scores, and a binary “trend flag” derived from Google Trends.  
- Trained an XGBoost regressor (sklearn wrapper) tuned via Optuna to maximize mean‑average‑precision at 5 items.  
- Deployed the model as a FastAPI service behind Docker, integrated with our BI dashboard through Grafana.  
- Implemented a monitoring script that flagged concept drift every week and retrained automatically if MAE exceeded 0.07.

**Result:**  
The new pipeline raised top‑seller prediction accuracy from 73% to 92%, cutting inventory over‑stock by 12% and boosting marketing ROI by 15%. I learned how combining structured sales data with unstructured sentiment signals can dramatically improve forecasting, and the importance of automated retraining in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
