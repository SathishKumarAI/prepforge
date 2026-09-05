---
qid: ing_97b1ca5a46__star__local
question: 'Explain: Week 2: Regression with multiple input variables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 376
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:01-05:00'
sources: []
---

**Situation** – At my last internship I was tasked to predict the monthly sales of a retail chain that had opened three new stores in Q1. The company already tracked dozens of variables: foot‑traffic counts, weather data, local events, and advertising spend, but their existing one‑variable linear model was off by 15 % on average.

**Task** – Build a multivariate regression model that could incorporate all relevant predictors, reduce the error to below 5 %, and run in under a minute so analysts could use it for daily forecasting.

**Action** – I first cleaned the data (removed outliers, imputed missing values with K‑NN), then used feature engineering: interaction terms between weather and foot‑traffic, and a lagged sales variable. I applied LASSO regression via scikit‑learn to automatically select the most predictive features and avoid overfitting. For evaluation I split the data 80/20, computed RMSE, and performed k‑fold cross‑validation to ensure stability. The model was packaged into a Docker container with a REST API for real‑time predictions.

**Result** – The final model achieved an RMSE of $3,200 versus $4,800 previously, cutting prediction error from 15 % to 4 %. It also reduced inference time from 5 seconds to 0.8 seconds per batch, allowing the business team to adjust inventory in real time. I learned how regularization and proper feature construction can dramatically improve multivariate regression performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
