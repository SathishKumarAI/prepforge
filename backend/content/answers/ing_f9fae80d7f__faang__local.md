---
qid: ing_f9fae80d7f__faang__local
question: 'Explain: 1.11.1.1.4. Categorical Features Support'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 486
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:50-05:00'
sources: []
---

**Clarify**  
We’re asked how a ML pipeline supports *categorical* features—i.e., variables that take on discrete labels (e.g., “red”, “blue”). The key is transforming these into numeric form while preserving information and avoiding pitfalls like high dimensionality or leakage.

**Approach**  
1. Identify categorical columns.  
2. Decide encoding strategy per column type: *ordinal* vs *nominal*.  
3. Apply the chosen encoder, fit on training data only.  
4. Transform test/validation sets with the same mapping.  
5. Monitor cardinality and sparsity; consider dimensionality‑reduction if needed.

**Depth**  
- **Label Encoding (Ordinal)**: Map each category to a unique integer. Works for tree‑based models or when an intrinsic order exists. Complexity O(n).  
- **One‑Hot / Binary Encoding (Nominal)**: Create binary columns per level; suitable for linear models and neural nets. Complexity O(n·k) where k is cardinality—can explode for high‑cardinality features.  
- **Target/Mean Encoding**: Replace categories with the target mean (or smoothed variant). Reduces dimensionality but risks leakage; must be computed within cross‑validation folds.  
- **Embedding / Hashing Trick**: Learn low‑dimensional embeddings or hash categories into buckets, useful for deep learning and very high cardinality.

Trade‑offs: one‑hot is simple but sparse; label encoding may mislead linear models; target encoding can overfit; embeddings require more data and training time.

**Edge Cases**  
- Missing or unseen categories → add “unknown” bucket.  
- Extremely high cardinality → hash or frequency cut‑off.  
- Imbalanced classes in target encoding → apply smoothing or regularization.

**Optimize & Communicate**  
I’d start with a pipeline that auto‑detects categorical types, applies one‑hot for low‑cardinality columns and target/embedding encoding for high‑cardinality ones, validating each choice via cross‑validated AUC. I’d document the mapping and leakage safeguards so the model remains reproducible. This structured strategy balances interpretability, performance, and scalability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
