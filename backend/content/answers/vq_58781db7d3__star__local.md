---
qid: vq_58781db7d3__star__local
question: What exactly is a factor variable, and why would you use one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 306
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:03-05:00'
sources: []
---

**Situation** – In my last role I was building a predictive model for churn on a SaaS platform with over 150,000 monthly active users. The dataset had dozens of categorical features like subscription plan, region, and device type that were encoded as strings.

**Task** – I needed to convert those high‑cardinality categories into a format suitable for gradient‑boosted trees while preserving interpretability and avoiding the curse of dimensionality.

**Action** – I created factor variables by mapping each category to an integer code (e.g., “Basic”=0, “Pro”=1, “Enterprise”=2). I then used one‑hot encoding only on the top five most frequent levels and applied target‑encoding for the rest. In Python’s scikit‑learn pipeline, I leveraged `OrdinalEncoder` followed by `OneHotEncoder(handle_unknown='ignore')`. This approach kept the feature matrix sparse, reduced memory usage by ~35%, and avoided leakage by cross‑validating the encoding.

**Result** – The model’s AUC improved from 0.78 to 0.86, and churn predictions were delivered in under 2 seconds per batch. I learned that factor variables are a practical bridge between raw categorical data and machine‑learning algorithms, balancing expressiveness with computational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
