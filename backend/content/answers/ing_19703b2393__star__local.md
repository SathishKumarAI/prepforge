---
qid: ing_19703b2393__star__local
question: 'Explain: Your fine-tuned model''s training loss looked great, but outputs
  in production are worse than the base model. Walk me through your debugging process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 356
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:18-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was fine‑tuning a BERT‑based fraud detection model on new transaction data. In training, the loss dropped from 0.42 to 0.12 and accuracy hit 94 %. Yet in production, the precision fell from 88 % (base) to 72 %, with many false positives flagged.

**Task:**  
Identify why the fine‑tuned model underperformed despite excellent training metrics, isolate the root cause, and restore production performance without re‑training from scratch.

**Action:**  
1. **Data drift check** – plotted feature distributions; found a shift in transaction amounts: new data had a heavier tail (mean $120 vs $45).  
2. **Label verification** – sampled 500 predictions; discovered 30 % of “fraud” labels were mislabeled in the training set due to a labeling script bug.  
3. **Re‑sampling strategy** – applied SMOTE on the minority class and performed stratified k‑fold validation, keeping an independent holdout that mirrored production distribution.  
4. **Calibration tweak** – adjusted temperature scaling on logits; measured ROC‑AUC improved from 0.78 to 0.84.  
5. **Continuous monitoring** – set up a drift alert pipeline using Evidently AI.

**Result:**  
Precision rose back to 87 % and recall to 81 %, matching the base model’s performance while retaining new data insights. I learned that training loss alone can be misleading; aligning data distribution, verifying labels, and continuous monitoring are essential for production reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
