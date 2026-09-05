---
qid: ing_903bfb4b91__star__local
question: 'Explain: Logistics — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 419
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:14-05:00'
sources: []
---

**Situation:**  
In my final year CS324 project we were tasked to redesign the home‑delivery routing for a regional e‑commerce platform that was consistently missing its 10 pm cut‑off, costing us about $12k in overtime per week.

**Task:**  
I had to build an ML‑driven logistics planner that could predict daily demand at each zip code and suggest optimal depot assignments and route sequences to keep deliveries on time while minimizing fuel usage.

**Action:**  
Using Python 3.9, I collected historical order data, weather feeds, and traffic APIs. I engineered features such as day‑of‑week, holiday flags, and a lagged demand score, then applied K‑means clustering (k=8) to group similar zip codes. For each cluster I trained a Gradient Boosting Regressor (XGBoost) to forecast next‑day volume. The predictions fed into an OR‑Tools routing solver that respected vehicle capacity and time windows. I iterated on feature sets, adding a rolling‑average of real‑time traffic, which improved prediction RMSE from 12.4% to 7.8%.

**Result:**  
The new system cut average delivery times by 18 % (from 52 min to 42 min) and reduced overtime costs by $10k per week. It also lowered fuel consumption by 5%. I learned that blending predictive analytics with combinatorial optimization yields tangible operational gains, and that continuous feature refinement is key to keeping models relevant in dynamic logistics environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
