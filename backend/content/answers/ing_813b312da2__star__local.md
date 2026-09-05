---
qid: ing_813b312da2__star__local
question: 'Explain: Explicit mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:48-05:00'
sources: []
---

**Situation** – At my last company I was working on a churn prediction model for a telecom provider that had just rolled out a new pricing tier. The training data included over 50,000 customers with dozens of categorical fields (plan type, payment method, device brand) and numerical fields (usage hours, data consumed).  

**Task** – My goal was to build an interpretable model that could accurately predict churn within the next billing cycle while keeping inference latency under 5 ms for real‑time targeting. I had to decide how to encode the categorical features so the model would learn meaningful patterns without exploding dimensionality.  

**Action** – I implemented explicit mapping by creating a one‑to‑one dictionary for each categorical column, assigning unique integer indices and then applying *target encoding* with smoothing (α = 5) to capture churn likelihood per category. For high cardinality fields like device brand I used frequency encoding. I also added interaction terms between plan type and payment method, then fed the engineered features into a LightGBM model with early stopping on a validation split.  

**Result** – The final pipeline reduced feature count from ~12,000 to 1,200 while improving AUC‑ROC from 0.78 to 0.86 and achieving inference latency of 3 ms per record. I learned that careful explicit mapping balances expressiveness and efficiency, especially when deploying models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
