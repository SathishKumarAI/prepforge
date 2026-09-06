---
qid: ing_12acb6dbb9__think__local
question: 'Explain: Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 433
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:57:59-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What does “evaluation patterns” mean?* In AI, it usually refers to systematic ways of measuring model performance (e.g., cross‑validation, train/val/test splits).  
   - *Assume the audience knows basic ML terminology but not deep evaluation theory.*  

**2️⃣ Adopt a mental model: “Evaluation as a loop”**  
   1. **Data partitioning** → split data into subsets.  
   2. **Metric selection** → choose accuracy, F1, ROC‑AUC, etc.  
   3. **Procedure design** → decide k‑fold CV, nested CV, hold‑out, or online evaluation.  
   4. **Result aggregation & interpretation** → average scores, confidence intervals, bias–variance analysis.  

**3️⃣ Step‑by‑step reasoning**  
   - Start with the goal (e.g., compare models).  
   - Identify the data characteristics (size, class imbalance).  
   - Pick a partition strategy that preserves representativeness.  
   - Choose metrics aligned with business objectives.  
   - Run the evaluation procedure, collect statistics, and analyze variance to detect overfitting or data leakage.  

**4️⃣ Avoid common pitfalls**  
   - *Data leakage*: never test on training‑set data.  
   - *Over‑optimistic CV*: use nested CV when tuning hyperparameters.  
   - *Metric misalignment*: accuracy is misleading for imbalanced data; prefer precision/recall or AUC.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each step logically follows the previous one.  
   - Explain why each choice matters (e.g., “We use 10‑fold CV because it balances bias and variance”).  
   - Summarize the pattern: **Partition → Metric → Procedure → Interpretation**, ensuring reproducibility and fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
