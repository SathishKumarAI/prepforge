---
qid: ing_3aba242808__eli5__local
question: 'Explain: 1.1.4. Multi-task Lasso — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 240
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:09:16-05:00'
sources: []
---

Imagine you’re a chef who must prepare several dishes at once—salad, soup, and cake. Each dish needs its own set of ingredients (features), but some ingredients are useful for many dishes (shared features). A **Multi‑task Lasso** is like a smart recipe book that tells the chef to keep only the ingredients that help all dishes while discarding the ones that don’t.  

In machine learning, we predict several related outputs (tasks) from the same input data. The Multi‑task Lasso adds a penalty to the model’s coefficients so that many of them are set exactly to zero—just like removing useless spices. It encourages the model to use the *same* small group of features across all tasks, making predictions simpler and often more accurate.  

Key terms:  
- **Coefficient** – weight given to each feature in a linear model.  
- **Penalty** – extra cost added during training to discourage large or many coefficients.  
- **Zeroing out** – setting a coefficient exactly to zero so the feature is ignored.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
