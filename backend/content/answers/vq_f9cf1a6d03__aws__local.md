---
qid: vq_f9cf1a6d03__aws__local
question: Q19- How would you handle an imbalanced dataset?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 394
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:23:32-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection team at my previous firm, our training set was **98 % legitimate transactions** and only 2 % fraudulent. The model’s recall dropped to 0.15, missing most frauds.

**Action (Dive Deep + Ownership)**  
1. **Data audit in Athena/S3** – identified class imbalance and feature sparsity.  
2. **Resampling strategy**:  
   * Oversampled fraud cases using SMOTE (scikit‑learn) → 20 % fraud.  
   * Undersampled legitimate cases with stratified sampling to preserve distribution.  
3. **Feature engineering** in Glue – created transaction‑time windows and aggregated merchant risk scores.  
4. Trained a Gradient Boosting model on SageMaker, iterating hyper‑parameters via SageMaker Experiments.  
5. Deployed the pipeline to an EventBridge → Lambda → SageMaker endpoint for real‑time scoring.

**Result (Deliver Results)**  
- Recall increased from **0.15 to 0.72**; precision rose to 0.68.  
- False positives dropped by **35 %**, saving ~$1.2M annually in unnecessary investigations.  
- The end‑to‑end pipeline costs < $200/month and scales automatically via SageMaker Auto Scaling.

**Learnings (Bias for Action + Customer Obsession)**  
Tried multiple resampling methods before settling on SMOTE; each iteration was logged, and the best model was promoted to production after A/B testing with live traffic. This iterative, data‑driven approach ensured we delivered tangible value while keeping customer impact low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
