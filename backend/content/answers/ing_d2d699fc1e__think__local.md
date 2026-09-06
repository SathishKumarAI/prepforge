---
qid: ing_d2d699fc1e__think__local
question: What is Cross-Validation? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 423
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:52:44-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Assume the reader knows basic ML terms (model, training data).  
   - Define “cross‑validation” as a technique for estimating generalisation error.  
   - Mention typical use cases: hyper‑parameter tuning, model comparison.

**2️⃣ Adopt a mental framework**  
   - Think of it as *data partitioning + repeated evaluation*.  
   - Visualise a dataset → split into *k* folds → train on k–1 folds, test on the held‑out fold.  
   - Emphasise that every data point gets tested exactly once.

**3️⃣ Step‑by‑step reasoning**  
   1. **Choose k** (commonly 5 or 10).  
   2. Shuffle & split the data into k roughly equal parts.  
   3. For each fold i:  
      - Train on all folds except i.  
      - Predict on fold i and record error.  
   4. Average the k errors → cross‑validated estimate of test error.  
   5. Optionally, repeat the whole process (nested CV) for unbiased hyper‑parameter tuning.

**4️⃣ Common pitfalls to avoid**  
   - Mixing up *k‑fold* with *leave‑one‑out*.  
   - Failing to stratify class labels in classification tasks.  
   - Performing feature selection inside the loop; it must be part of the training data only.  
   - Using cross‑validation for final model evaluation when a separate hold‑out set is available.

**5️⃣ Sanity‑check & communicate**  
   - Verify that every fold’s size ≈ N/k and no overlap in test sets.  
   - Explain the intuition: “we’re simulating many training–testing splits to get a robust error estimate.”  
   - Conclude with a quick example or code snippet if space allows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
