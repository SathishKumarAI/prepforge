---
qid: ing_eb0d00bdbe__think__local
question: 'Explain: What is feature scaling? Compare normalization and standardization,
  and tell me which models actually need it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 473
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:31:33-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - *Feature scaling* means transforming numeric attributes so they occupy a comparable range or distribution.  
   - Assume we’re talking about supervised learning, tabular data, and typical ML pipelines.

**2️⃣ Mental model / framework**  
   - Think of two main scaling families: **min‑max normalization** (maps to [0, 1]) and **z‑score standardization** (zero mean, unit variance).  
   - Identify which algorithms are *distance‑based* or *regularised*, as they’re sensitive to scale.

**3️⃣ Step‑by‑step reasoning**  
   1. Explain the mathematical formulas for both methods.  
   2. Contrast their effects on outliers and distribution shape.  
   3. List models that rely on Euclidean distance, dot products or regularisation: k‑NN, SVM (with RBF), logistic regression, linear regression, Lasso/Ridge, neural nets, PCA, t‑SNE, etc.  
   4. Note that tree‑based methods (random forests, XGBoost) are largely scale‑agnostic.  
   5. Conclude which models *must* be scaled and why.

**4️⃣ Common traps to avoid**  
   - Don’t say “all models need scaling”; only those whose objective depends on feature magnitude do.  
   - Forget that standardization is preferable when the data are roughly Gaussian, while min‑max preserves sparsity for some algorithms.  
   - Ignore the fact that scaling should be fitted *only* on training data and applied to test data.

**5️⃣ Sanity‑check & verbalise**  
   - Re‑explain in a sentence: “Normalization squashes values into [0,1], useful when you want to preserve sparsity; standardization centers them, ideal for algorithms that assume Gaussian inputs.”  
   - Verify by mentally walking through an example (e.g., k‑NN on two features with vastly different ranges).  
   - Finally, state the takeaway: *Scale before training models that use distances or regularisers; skip trees.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
