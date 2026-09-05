---
qid: ing_d50a5bcd3f__star__local
question: 'Explain: Take-home assignments — Interview Process And Behavioral'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:02-05:00'
sources: []
---

**Situation:**  
When I applied for a senior ML research role at a fintech startup, the hiring team sent me a two‑day take‑home assignment: build a fraud‑detection model using their public transaction dataset and write a brief report on feature engineering choices.

**Task:**  
I had to produce a production‑ready model that outperformed their baseline by at least 5 % in F1 score, document my methodology, and explain trade‑offs between accuracy, latency, and interpretability—all within 48 hours.

**Action:**  
First, I performed an exploratory data analysis in Python with pandas and matplotlib to spot class imbalance and missing values. I engineered features like time‑of‑day buckets, transaction velocity, and user‑device entropy. To address the imbalance, I applied SMOTE combined with a LightGBM model, tuning hyperparameters via Optuna while keeping inference latency below 20 ms. I then wrote a concise Jupyter notebook report that highlighted key feature importances, discussed how my choice of categorical encoding would scale to millions of users, and proposed an A/B‑testing plan for deployment.

**Result:**  
The final model achieved a 0.12 F1 score improvement over the baseline (up from 0.65 to 0.77) while maintaining sub‑20 ms inference time. The hiring team praised my clear trade‑off analysis, and I was offered the position. This experience taught me how to balance technical rigor with practical constraints in a real interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
