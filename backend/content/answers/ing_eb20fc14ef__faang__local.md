---
qid: ing_eb20fc14ef__faang__local
question: 'Explain: Cardinality Examples'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 488
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:33-05:00'
sources: []
---

**Clarify**  
You’re asking about *cardinality* in ML—how the number of distinct values in a feature affects model choice and preprocessing. I’ll assume we’re dealing with tabular data where features can be categorical or numeric, and we want to know when high vs low cardinality matters.

**Approach**  
1. Define low vs high cardinality thresholds.  
2. Explain why each case changes encoding, memory, sparsity, and algorithm suitability.  
3. Give concrete examples (e.g., user ID, ZIP code).  
4. Mention trade‑offs and practical tips.

**Depth**  

| Cardinality | Encoding & Impact | Algorithmic Considerations | Example |
|-------------|------------------|---------------------------|---------|
| **Low (< 50)** | One‑hot or target encoding keeps sparsity manageable. | Tree‑based models handle one‑hot fine; linear models may overfit if many levels. | Gender, Country (≈200). |
| **Medium (50–1k)** | Frequency or embedding encodings reduce dimensionality. | Gradient‑boosted trees still ok; deep nets benefit from learned embeddings. | Product category IDs in e‑commerce. |
| **High (> 1k)** | Use hashing trick, target encoding, or low‑dim embeddings to avoid OOM. | Models sensitive to sparsity (linear) suffer; tree‑based and neural nets thrive with dense reps. | User ID in recommendation systems (~10M users). |

**Edge cases**  
- **Rare categories** can inflate variance when one‑hotting; target encoding may introduce leakage.  
- **Hash collisions** in hashing trick lead to noise—use a large enough hash space.  
- **Dynamic cardinality** (new IDs over time) breaks static embeddings unless updated.

**Optimize & Communicate**  
Start with exploratory analysis: `value_counts()` → decide threshold. For high‑card features, prototype both one‑hot and embedding; evaluate AUC/accuracy vs memory. In production, switch to target encoding with regularization or use a hashing layer in a neural net for scalability. Explain that the choice balances bias–variance trade‑off, computational cost, and deployment constraints—exactly what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
