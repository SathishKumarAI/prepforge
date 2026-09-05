---
qid: ing_c9dc88d589__star__local
question: 'Explain: Step 5: Validate on Dev Set — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 322
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:47-05:00'
sources: []
---

**Situation:**  
During a university capstone project I was building an image‑classification model for detecting skin lesions from dermoscopy images. After training on 80 % of the dataset, my validation loss plateaued at 0.32 and accuracy hovered around 88 %, so I suspected overfitting.

**Task:**  
I needed to verify that the model’s performance was genuinely generalizable before deploying it in a clinical pilot, using a dedicated development set (the remaining 20 % of data) as an unbiased benchmark.

**Action:**  
I split the dev set into three folds, performed stratified cross‑validation, and computed per‑class ROC AUCs. I also plotted confusion matrices to spot systematic misclassifications. To reduce variance, I applied label smoothing during training and used early stopping based on dev loss. Finally, I ran a permutation test (shuffling labels 1 000 times) to confirm the observed accuracy wasn’t due to chance.

**Result:**  
The model achieved an average ROC AUC of 0.93 on the dev set, with sensitivity 92 % and specificity 90 %. The permutation test p‑value was <0.001, confirming statistical significance. I learned that rigorous dev‑set validation—beyond simple holdout metrics—provides confidence in a model’s real‑world performance and helps guard against hidden biases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
