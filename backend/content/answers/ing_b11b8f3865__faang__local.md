---
qid: ing_b11b8f3865__faang__local
question: 'Explain: Explain precision, recall, and F1. Give a concrete case where
  99% accuracy means the model is useless.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 395
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:35:30-05:00'
sources: []
---

**Clarify**  
You’re asking for definitions of *precision*, *recall*, and *F1-score*—the three key metrics for binary classification—and a concrete illustration where a model reports 99 % accuracy yet is practically useless.

**Approach**  
1. Define TP, FP, FN, TN.  
2. Derive each metric from those counts.  
3. Provide an example with class imbalance (rare positive).  
4. Show how high accuracy can hide low precision/recall.  

**Depth**  
- **Precision = TP / (TP + FP)** – the fraction of predicted positives that are correct.  
- **Recall = TP / (TP + FN)** – the fraction of true positives captured.  
- **F1‑score = 2·(precision·recall)/(precision+recall)** – harmonic mean, balances both.  

*Example*: Suppose we classify rare disease in 10 000 patients: only 100 truly have it.  
A model predicts “no disease” for everyone → accuracy = 99 % (9 900/10 000).  
But **TP=0**, **FP=0** ⇒ precision and recall are undefined or zero, F1‑score = 0. The model never identifies a sick patient—completely useless.

**Edge Cases**  
- Extremely imbalanced data (rare positives) → accuracy misleading.  
- Multi‑class problems require macro/micro averaging of these metrics.  

**Optimize & Communicate**  
When evaluating, always report precision/recall/F1 along with confusion matrix. For deployment, set a threshold that trades off between false positives and negatives based on business impact. This ensures the model’s *usefulness* is measured by its real‑world performance, not just raw accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
