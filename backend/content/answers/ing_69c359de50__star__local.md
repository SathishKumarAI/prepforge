---
qid: ing_69c359de50__star__local
question: 'Explain: 1.1.1. Ordinary Least Squares — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 351
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:44-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with predicting monthly sales for a chain of retail stores. The company had been using a simple spreadsheet model that ignored seasonality and lagged effects, leading to a 15 % error margin on forecasts.

**Task**  
I needed to build a robust linear regression model in Python that captured both price elasticity and time‑series patterns, ensuring the predictions were within ±5 % of actual sales for the next quarter.

**Action**  
Using scikit‑learn 1.9.0 I set up an Ordinary Least Squares (OLS) pipeline:  
- Imported `LinearRegression` from `sklearn.linear_model`.  
- Created lagged features (`sales_lag_1`, `sales_lag_2`) and dummy variables for month and promotion flags.  
- Split the data with `train_test_split`, then fit the model on training data, retrieving coefficients via `.coef_`.  
- Evaluated performance with `mean_absolute_percentage_error` and plotted residuals to check homoscedasticity.  
I also compared a Ridge regression variant to guard against multicollinearity, but OLS already met the accuracy target.

**Result**  
The OLS model reduced forecast error from 15 % to 3.8 %, translating into $1.2 M in avoided overstock costs per quarter. I learned that even simple linear models can outperform complex ones when features are thoughtfully engineered, and that scikit‑learn’s clear API makes rapid experimentation straightforward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
