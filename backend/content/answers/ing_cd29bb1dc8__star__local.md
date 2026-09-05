---
qid: ing_cd29bb1dc8__star__local
question: 'Explain: And that doesn''t really make sense, because'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 332
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:08-05:00'
sources: []
---

**Situation** – In my last role I was reviewing a colleague’s proposal for an anomaly‑detection model on our customer churn data. She claimed that adding more features would always improve accuracy because “more information can’t hurt.”  
**Task** – I needed to challenge that assumption, show the risks of blindly increasing dimensionality, and provide a better approach for feature selection.  
**Action** – First I plotted the training loss versus validation loss while incrementally adding features; I observed a clear divergence after 12 variables, indicating over‑fitting. I then applied recursive feature elimination with cross‑validation to rank features by importance, and used a LASSO regularizer (α = 0.01) to shrink less useful coefficients toward zero. Finally, I re‑trained the model on the top 8 predictors, which reduced training time from 45 min to 12 min while keeping the F1‑score stable.  
**Result** – The final model achieved a 3.2% higher precision (0.78 vs. 0.75) and a 15% reduction in inference latency, proving that “more features” can indeed hurt performance when not managed properly. I learned to always validate feature addition with empirical evidence rather than intuition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
