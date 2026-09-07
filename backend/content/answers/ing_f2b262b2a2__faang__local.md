---
qid: ing_f2b262b2a2__faang__local
question: 'Explain: Cardinality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 450
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:27-05:00'
sources: []
---

**Clarify**  
You’re asking about *cardinality* in the context of machine‑learning data sets—i.e., how many distinct values a feature can take. Clarify whether you mean categorical cardinality (unique categories) or numeric range, and confirm that you want an explanation, not code.

**Approach**  
1. Define cardinality mathematically.  
2. Explain why it matters for preprocessing and model choice.  
3. Give concrete examples (low vs high).  
4. Discuss pitfalls and mitigations.

**Depth**  
Cardinality = `|UniqueValues(feature)|`.  
*Low‑cardinality*: ≤ 10 distinct values → one‑hot or ordinal encoding works; models like linear regression, tree ensembles handle it natively.  
*High‑cardinality*: thousands to millions (e.g., user IDs) → one‑hot explodes dimensionality and sparsity; use target/embedding encoding, hashing trick, or feature hashing.  

Impact:  
- **Memory**: O(N·C) for one‑hot vs O(N) for embeddings.  
- **Model bias**: High cardinality can cause overfitting if each category gets its own weight.  
- **Training time**: Linear in number of features; embeddings reduce this.  

Typical mitigations: frequency thresholding, dimensionality reduction (PCA on encoded matrix), or deep learning models that learn embeddings directly.

**Edge Cases**  
- Continuous numeric fields mis‑identified as categorical → treat as low cardinality but still need scaling.  
- Rare categories in training vs test → can cause OOV issues; use “unknown” bucket.  

**Optimize & Communicate**  
For a production pipeline, I’d add a cardinality check step: log values, flag > 10k unique items, and automatically switch to embedding or hashing. In an interview, I’d emphasize the trade‑off between interpretability (one‑hot) and scalability (embeddings), and note that modern frameworks (PyTorch, TensorFlow) handle embeddings efficiently.

*(≈200 words)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
