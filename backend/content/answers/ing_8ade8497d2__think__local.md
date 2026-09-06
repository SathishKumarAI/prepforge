---
qid: ing_8ade8497d2__think__local
question: 'Explain: 1.1.2.4. Setting the regularization parameter: leave-one-out Cross-Validation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 520
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:13:57-05:00'
sources: []
---

### 1. Clarify the Problem & State Assumptions  
- **Goal**: Choose the best regularization strength (λ) for a model.  
- **Context**: We’ll use *leave‑one‑out* cross‑validation (LOOCV).  
- Assume a supervised learning task (regression or classification), a fixed algorithm, and a dataset of size n.

### 2. Mental Model / Framework  
1. **Regularization** controls model complexity → bias–variance trade‑off.  
2. **Cross‑validation** estimates generalisation error by repeatedly training on all but one sample and testing on the held‑out one.  
3. **LOOCV** is a special case where each fold contains exactly one observation.

### 3. Step‑by‑Step Reasoning  
1. **Define λ grid**: Choose candidate values (e.g., [0, 0.01, 0.1, 1, 10]).  
2. For each λ:
   - Initialize cumulative error = 0.
   - Loop i=1…n:
     * Train model on data \{all except i\} with current λ.
     * Predict y_i for the left‑out sample.
     * Compute loss (squared error, log‑loss, etc.) and add to cumulative error.
   - After loop, compute average LOOCV error = cumulative/n.  
3. **Select λ** with minimal average LOOCV error.  
4. Retrain final model on full dataset using selected λ.

### 4. Common Traps & Wrong Turns  
- **Data leakage**: Mixing training and test data (e.g., scaling computed from all data before CV).  
- **Computational cost**: LOOCV is O(n²) in naive form; use analytical shortcuts for linear models when available.  
- **Over‑fitting the λ grid**: Too many λ values or a too‑narrow range can bias selection.

### 5. Sanity Checks & Communication  
- Verify that LOOCV error decreases as n grows (variance should shrink).  
- Compare chosen λ to what you’d get with k‑fold CV; they should be similar.  
- When explaining: “We leave one observation out, train on the rest, predict the left‑out one, repeat for all samples, average the loss, and pick the regularisation that minimises this average.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
