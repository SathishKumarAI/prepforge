---
qid: ing_ae896acf9c__star__local
question: 'Explain: Parental Leave — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 367
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:17-05:00'
sources: []
---

**Situation:**  
At my previous employer, the HR analytics team noticed a significant drop in employee engagement scores after new parents returned from maternity or paternity leave. The company wanted to understand which factors were driving this dip and how to tailor re‑integration programs.

**Task:**  
I was tasked with building a predictive model that could forecast post‑leave engagement risk for each employee, so HR could intervene proactively before the problem manifested.

**Action:**  
First, I gathered data from the HRIS (time off logs, performance ratings, tenure) and the internal communication platform (message activity, sentiment scores). Using Python’s scikit‑learn, I engineered features such as “average daily messages in last 30 days,” “number of projects assigned during leave,” and “sentiment change pre/post leave.” After cleaning missing values with pandas, I trained a gradient‑boosted tree model (XGBoost) and tuned hyperparameters via cross‑validation. I validated the model against a holdout set, achieving an AUC of 0.81. Finally, I packaged the pipeline into a FastAPI service that HR could query in real time.

**Result:**  
The model identified high‑risk employees with 78% precision at a 5% false‑positive rate. When HR used these insights to launch targeted mentorship and flexible‑work plans, engagement scores for returned parents rose by 12 points over six months, and turnover dropped by 3%. I learned that blending behavioral data from internal channels with traditional HR metrics can uncover subtle signals of disengagement, and that deploying the model as a lightweight API accelerates adoption across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
