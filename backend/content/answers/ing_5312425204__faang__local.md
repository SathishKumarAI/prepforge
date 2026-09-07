---
qid: ing_5312425204__faang__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 435
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:34-05:00'
sources: []
---

**Step 3: Splitting Data (Train / Dev / Test)**  

---

### 1️⃣ Clarify  
We’re asked how to partition a labeled dataset for an AI model so that training, validation (dev), and evaluation (test) are fair and representative. Key assumptions:  
- The data is IID or can be stratified by class.  
- No time‑series leakage unless the task is sequential.  

### 2️⃣ Approach  
1. **Decide ratios** – common split: 70 % train, 15 % dev, 15 % test (or 80/10/10).  
2. **Stratify** by target labels to preserve class distribution.  
3. **Randomize** the ordering before partitioning to avoid order bias.  
4. **Hold‑out test set** must stay untouched until final evaluation.  

### 3️⃣ Depth (Technical Detail)  
- Use `train_test_split` from scikit‑learn with `stratify=y`.  
- For large datasets, perform a two‑stage split: first separate test, then split remaining into train/dev.  
- Complexity is O(n).  
- If data has temporal or geographical structure, use *group* or *time‑based* splits to prevent leakage.  

### 4️⃣ Edge Cases  
- **Class imbalance** → oversample minority in dev/test if needed.  
- **Small datasets** → consider k‑fold cross‑validation instead of a single split.  
- **Streaming data** → use rolling windows for continuous evaluation.  

### 5️⃣ Optimize & Communicate  
Explain that this split ensures unbiased hyperparameter tuning (dev) and an honest performance estimate (test). Emphasize the importance of never touching the test set during model development, and mention that reproducibility can be achieved by seeding the random state. This narrative demonstrates clear reasoning, practical implementation steps, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
