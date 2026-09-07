---
qid: ing_cd29bb1dc8__aws__local
question: 'Explain: And that doesn''t really make sense, because'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 391
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:41-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a fraud‑detection pipeline for a $2 B e‑commerce platform. The ML team produced a model that flagged 35% of transactions as fraudulent, yet our post‑mortem revealed that 90% of those “frauds” were actually legitimate purchases—an outcome the stakeholders said “doesn’t really make sense.”  

**Action**  
I owned the investigation and dove deep into the data. First, I audited feature engineering: a time‑zone field was inadvertently correlated with transaction status because it was derived from the merchant’s server timestamp instead of the customer’s device clock. This leakage inflated precision. Next, I re‑trained the model using a **Feature Store** (AWS SageMaker Feature Store) that enforced strict versioning and lineage, removed the leaked feature, and added counterfactual sampling to balance classes. I also introduced an **Explainability Layer** with Amazon SageMaker Clarify so we could see SHAP values in real time.  

**Result**  
After deployment, fraud‑flagged transactions dropped from 35% to 12%, while actual fraud detection improved by 18% (from 60% to 78%). Cost savings of ~$1.2 M annually were realized by reducing manual review effort. The incident reinforced our commitment to **Ownership** and **Dive Deep**, and it taught the team that even a single engineered feature can derail an entire solution—highlighting the importance of rigorous data governance in ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
