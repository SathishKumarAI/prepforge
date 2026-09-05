---
qid: ing_eb0d00bdbe__eli5__local
question: 'Explain: What is feature scaling? Compare normalization and standardization,
  and tell me which models actually need it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 246
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:22-05:00'
sources: []
---

Think of feature scaling like preparing ingredients for a recipe. Imagine you’re baking cookies and you have sugar measured in cups and flour in grams. If you mix them together without converting units, the batter will taste off because one ingredient dominates the flavor. Feature scaling does the same: it puts all variables on a common “taste scale” so no single feature overwhelms the model.

**Normalization (min‑max)** rescales each variable to a 0–1 range, like turning every measurement into a percentage of its maximum value.  
**Standardization (z‑score)** subtracts the mean and divides by the standard deviation, turning the data into “average units” where most values fall between –1 and +1.

Models that look at distances or assume features are on similar scales—such as k‑Nearest Neighbors, Support Vector Machines, and neural networks—benefit from scaling. Tree‑based methods (decision trees, random forests) can work fine without it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
