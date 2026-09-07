---
qid: ing_d2d699fc1e__faang__local
question: What is Cross-Validation? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 384
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:50:36-05:00'
sources: []
---

**Clarify**  
*Restate:* Cross‑validation is a model evaluation technique that partitions the available data into complementary subsets, trains on one part and tests on another. *Assumptions to confirm:* Do we need K‑fold, stratified folds? Is the dataset large enough for a hold‑out set?  

**Approach**  
1. Split data into *K* roughly equal folds.  
2. For each fold: train on the other \(K-1\) folds, test on the held‑out fold.  
3. Aggregate performance (mean/median of metrics).  

**Depth**  
The classic K‑fold CV repeats this process *K* times; the choice of *K* balances bias vs variance—small *K* yields high bias but low variance, large *K* reduces bias at the cost of higher computational load. Stratified CV preserves class distribution in each fold, crucial for imbalanced problems. Leave‑one‑out (LOO) is a special case with \(K = N\).  

**Edge Cases**  
- Time‑series data: use *time‑based* or *blocked* CV to avoid look‑ahead bias.  
- Extremely small datasets: may require nested CV for hyperparameter tuning.  
- Highly correlated features across folds can inflate performance estimates.  

**Optimize & Communicate**  
For large-scale training, parallelize fold training (e.g., using joblib). Report both mean and standard deviation to convey stability. Explain trade‑offs in an interview: “Choosing 5‑fold CV gives a quick estimate; 10‑fold reduces bias but costs twice the computation.” This shows you understand not just the mechanics but the practical implications of cross‑validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
