---
qid: ing_d2d699fc1e__eli5__local
question: What is Cross-Validation? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 268
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:15-05:00'
sources: []
---

Imagine you’re a chef who wants to prove a new soup tastes great before serving it at a big banquet.  
Instead of tasting the whole pot once, you split the soup into several small bowls, taste each bowl separately, and then combine your opinions. That way you’re sure the flavor is consistent across all portions, not just lucky in one spot.

In machine learning, *cross‑validation* does the same thing for a model.  
You divide your data (the “soup”) into **k** groups called *folds*.  
For each fold you train the model on the other k–1 folds and test it on the held‑out one.  
After repeating this k times, you average the results to get a reliable estimate of how well the model will perform on new data.

Key terms:  
- **Training set** – data used to teach the model.  
- **Test (validation) set** – data used only to check performance.  
- **Fold** – one part of the split data.  

Cross‑validation helps guard against overfitting and gives you a trustworthy measure of accuracy, just like tasting each bowl ensures your soup is truly delicious everywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
