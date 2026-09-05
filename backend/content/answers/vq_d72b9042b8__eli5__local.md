---
qid: vq_d72b9042b8__eli5__local
question: What is the ROC Curve, and how do you make one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 314
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:01-05:00'
sources: []
---

Imagine a bouncer at a club who has to decide who gets in.  
The **true positive rate (TPR)** is the fraction of real party‑goers the bouncer lets through.  
The **false positive rate (FPR)** is the fraction of non‑party‑goers he mistakenly lets in.

A **ROC curve** plots TPR against FPR as we change the bouncer’s strictness (the threshold).  
If the bouncer is very lax, everyone gets in: high TPR but also high FPR.  
If he’s super strict, only a few get in: low TPR and low FPR.  

To make one:  
1. Run your AI model on a labeled test set and record its predicted scores for each case.  
2. Pick many threshold values (e.g., 0, 0.1,…,1). For each threshold, classify cases as “positive” if the score exceeds it.  
3. Compute TPR = true positives / all actual positives; compute FPR = false positives / all actual negatives.  
4. Plot TPR on the vertical axis versus FPR on the horizontal axis for every threshold.  

The resulting curve shows how well your model balances catching real positives against mislabeling negatives. A perfect model hugs the top‑left corner; a random guess sits along the diagonal line y = x.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
