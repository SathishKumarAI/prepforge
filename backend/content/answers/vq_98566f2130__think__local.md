---
qid: vq_98566f2130__think__local
question: When to do re-sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 409
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:04:14-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- What *type* of data are we dealing with (images, text, tabular)?  
- Are we training a classifier, regressor, or unsupervised model?  
- Do we have class imbalance, noisy labels, or missing values?  
Assume we’re building a supervised model where performance on minority classes matters.

**2️⃣ Adopt the “data‑quality vs. data‑quantity” framework**  
- *Quality*: correct labels, representative samples.  
- *Quantity*: enough examples per class to learn robust patterns.  
Re‑sampling shifts the balance between these axes.

**3️⃣ Reason through scenarios step‑by‑step**  
- **Imbalanced classes**: if minority accuracy is poor → consider oversampling or undersampling.  
- **Small dataset**: if variance is high → use augmentation (oversample) to increase diversity.  
- **Overfitting risk**: if the model memorizes a few dominant samples → undersample majority to force generalization.  
- **Evaluation metric**: if precision‑recall or F1 matters more than overall accuracy, re‑sampling can help.

**4️⃣ Avoid common traps**  
- Don’t blindly oversample; it can amplify noise and overfit.  
- Undersampling may discard valuable information—use stratified sampling to preserve structure.  
- Mixing techniques (SMOTE + Tomek links) without understanding their interactions leads to unstable results.

**5️⃣ Sanity‑check & communicate**  
- Plot class distributions before/after.  
- Run cross‑validation to see if performance metrics truly improve.  
- Explain: “We re‑sampled because the minority class had < 10% representation, which caused a 15 % drop in recall. After balanced oversampling, recall rose by ~8 % without hurting precision.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
