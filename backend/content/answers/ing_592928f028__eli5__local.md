---
qid: ing_592928f028__eli5__local
question: 'Explain: 1.1.3.2.3. AIC and BIC criteria — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 256
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:47-05:00'
sources: []
---

Think of fitting a linear model like choosing a recipe for soup.  
AIC (Akaike Information Criterion) and BIC (Bayesian Information Criterion) are two judges that decide how good the recipe is while keeping it simple.

* **AIC** rewards a recipe that explains the data well but gives a small penalty for each extra ingredient (parameter). It prefers a tasty soup even if you add a few more spices, as long as the taste improves noticeably.  
* **BIC** also looks at how much the soup fits, but it penalizes new ingredients more heavily, especially when you have many data points. BIC is stricter; it only adds an ingredient if it makes a big difference.

Both judges combine *goodness of fit* (how close the model’s predictions are to the actual values) with a *simplicity penalty* (the number of parameters). The lower the AIC or BIC, the better the balance between accuracy and parsimony. In scikit‑learn’s linear models, you can compute these scores to pick the most appropriate model without overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
