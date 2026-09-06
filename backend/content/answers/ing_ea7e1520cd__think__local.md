---
qid: ing_ea7e1520cd__think__local
question: 'Q74: A candidate claims their AI system achieves 95% accuracy. What questions
  do you ask to assess whether this is meaningful?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 397
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:29:48-05:00'
sources: []
---

**1️⃣ Clarify the claim and set assumptions**  
- Ask for the *definition* of “accuracy” (overall, per class, weighted).  
- Confirm the *dataset* used (size, source, labeling process) and whether it reflects real‑world scenarios.  
- Inquire about *data splits*: training/validation/test, cross‑validation, or a single hold‑out set.

**2️⃣ Apply a mental model of evaluation robustness**  
Use the “Evaluation Triangle”: **Dataset → Metric → Procedure**.  
- Dataset: is it representative and free from leakage?  
- Metric: does accuracy capture what matters (e.g., imbalanced classes)?  
- Procedure: are splits independent, randomized, repeated?

**3️⃣ Step‑by‑step reasoning toward a verdict**  
1. Check for *label noise* or *ambiguous samples*.  
2. Verify that the test set was unseen during training and hyper‑parameter tuning.  
3. Examine class distribution; 95 % accuracy can be trivial if one class dominates.  
4. Look for evidence of overfitting: compare train vs. test scores, learning curves.  
5. Seek external validation or benchmark comparison.

**4️⃣ Common traps to avoid**  
- Assuming “accuracy” alone is sufficient; ignore precision/recall/F1.  
- Overlooking data leakage (e.g., duplicate records in train/test).  
- Ignoring class imbalance that inflates accuracy.  
- Accepting a single‑shot result without replication.

**5️⃣ Sanity‑check & verbalize the assessment**  
Summarize: “Given the dataset, metric, and evaluation procedure, 95 % accuracy would be meaningful only if…”.  
If gaps remain, request additional evidence (confusion matrix, ROC curves, cross‑validation results) before accepting the claim.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
