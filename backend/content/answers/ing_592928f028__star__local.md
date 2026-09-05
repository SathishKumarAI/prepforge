---
qid: ing_592928f028__star__local
question: 'Explain: 1.1.3.2.3. AIC and BIC criteria — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 389
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:03-05:00'
sources: []
---

**Situation**  
During a client‑facing analytics project, my team had to build a predictive model for churn using the company’s historical subscription data (≈ 25k rows). The initial approach was a simple Lasso regression in scikit‑learn, but the performance plateaued and we suspected over‑ or under‑fitting.

**Task**  
I needed to select the optimal regularization strength and decide whether adding polynomial interaction terms improved the model without inflating variance—essentially choosing the right complexity for our linear model.

**Action**  
I turned to information criteria. For each candidate λ (α in Lasso) and each feature set, I fitted a `LinearRegression` on a train split, then computed the log‑likelihood assuming Gaussian errors (`-0.5 * n_samples * np.log(rss/n_samples)`), where RSS is residual sum of squares. Using that, I calculated AIC = 2k – 2ℓ and BIC = k log(n) – 2ℓ, with k the number of estimated parameters (including intercept). I plotted AIC/BIC against λ and model complexity; the curves revealed a clear minimum at α=0.02 with only 12 non‑zero coefficients. I then validated this choice on a held‑out test set, achieving an R² increase from 0.61 to 0.68.

**Result**  
The chosen model reduced mean squared error by 18 % and dropped the number of features from 45 to 12, cutting inference time by half. I learned that AIC/BIC can be adapted to sklearn pipelines by manually computing log‑likelihoods, offering a principled alternative to cross‑validation when comparing nested linear models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
