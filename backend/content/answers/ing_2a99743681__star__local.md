---
qid: ing_2a99743681__star__local
question: 'Explain: The Assumption That Turned Out to Be Wrong'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 276
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:18-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection project for an online payments platform, our model was built on the assumption that transaction amounts were normally distributed across all user segments.

**Task:**  
I needed to validate this assumption and ensure the model’s sensitivity to high‑value anomalies without inflating false positives.

**Action:**  
First, I performed exploratory data analysis using Python’s pandas and seaborn, plotting histograms per segment. The plots revealed heavy right‑skewness in business accounts versus a near‑normal spread for individual users. I then replaced the Gaussian kernel density estimator with a log‑transformed KDE for high‑value segments and retrained a gradient‑boosted tree (XGBoost) incorporating this feature scaling. I also implemented cross‑validation stratified by segment to prevent leakage.

**Result:**  
The updated model reduced false positives by 35% while increasing true‑positive detection of fraudulent transactions by 22%, raising overall fraud recovery from $1.2 M to $1.8 M annually. I learned that blindly trusting statistical assumptions can mask critical distributional nuances, and rigorous EDA is essential before choosing a modeling strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
