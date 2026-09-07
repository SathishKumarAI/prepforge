---
qid: vq_3ebe0f7c15__aws__local
question: Q18- What’s the F1 score? How would you use it?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 437
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:54-05:00'
sources: []
---

**Situation / Task**  
While leading a fraud‑detection pilot for the Payments team, we noticed our precision‑heavy rule engine was missing many fraudulent transactions (high recall needed). The product owner asked me to evaluate a new ML model that promised better balance between false positives and false negatives.

**Action**  
I introduced the **F1 score**—the harmonic mean of Precision and Recall—to quantify this trade‑off. I first defined precision = TP/(TP+FP) and recall = TP/(TP+FN). Using our test set (5 M transactions, 0.2% fraud), the baseline rule had Precision = 0.92, Recall = 0.38 → F1 ≈ 0.52. The new XGBoost model yielded Precision = 0.85 and Recall = 0.71 → **F1 = 0.78**.  
I also plotted the precision‑recall curve and chose a threshold that maximized F1 while keeping FP below 3 % to avoid customer churn. For production, I deployed the model on **Amazon SageMaker**, scheduled nightly retraining with fresh data via **AWS Glue**, and exposed it through an **API Gateway** endpoint for real‑time scoring.  

**Result**  
Post‑deployment, fraud detection accuracy improved from 38 % to 71 % recall (a 85 % relative lift) while false positives dropped by 12 %. Monthly revenue loss due to undetected fraud fell from $120K to $35K. The F1 score guided us to the sweet spot that balanced customer experience and risk, directly supporting our **Customer Obsession** principle.

**Learnings**  
I learned that a single metric can mislead if not contextualized; hence I always pair F1 with business‑level KPIs. This practice of diving deep into metrics aligns with Amazon’s **Dive Deep** and **Ownership** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
