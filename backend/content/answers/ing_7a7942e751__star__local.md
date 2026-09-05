---
qid: ing_7a7942e751__star__local
question: 'Explain: Ad Prediction System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:38:57-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new display‑ad platform that was supposed to deliver personalized ads in real time. Within the first month, our click‑through rate (CTR) lagged 18% below the industry benchmark, and user engagement on the ad pages dropped sharply.

**Task:**  
I was tasked with building an ad prediction model that could boost CTR by at least 12% while keeping latency under 50 ms for a production environment serving millions of impressions per day.

**Action:**  
First, I gathered click logs, contextual features (time of day, device type), and user‑segment data. Using feature engineering in Python with Pandas, I engineered interaction terms and encoded categorical variables via target encoding to preserve signal. For modeling, I trained a LightGBM gradient‑boosted tree ensemble on 3 million samples, tuning hyperparameters through Bayesian optimization (scikit‑optimize). To meet latency constraints, I converted the final model into ONNX format and deployed it in a Docker container behind an Nginx reverse proxy, achieving inference times of ~30 ms. I also set up A/B testing with a 10% traffic split to monitor CTR changes live.

**Result:**  
The new system lifted our overall CTR from 0.45% to 0.58%, surpassing the target by 15%. Page dwell time increased by 7%, and we saw a 9% lift in revenue per impression within two weeks of rollout. I learned how critical end‑to‑end optimization—feature design, model choice, and deployment pipeline—is for real‑world ML success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
