---
qid: vq_5bbefc684f__aws__local
question: Is standardization necessary before using PCA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 350
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:58-05:00'
sources: []
---

**Situation / Task**

At my previous role I led a project to compress customer‑behavior logs for a recommendation engine. The data was high‑dimensional (hundreds of categorical and continuous features) and we needed to reduce dimensionality with PCA before feeding it into an XGBoost model.

**Action**

1. **Customer Obsession & Ownership** – I first mapped each feature to the actual user journey: click‑through, dwell time, purchase intent.  
2. **Dive Deep** – I inspected the data distribution and discovered many categorical columns were one‑hot encoded with highly skewed frequencies.  
3. **Bias for Action** – Instead of blindly standardizing all features, I applied *scaling only to continuous variables* (z‑score) and *target encoding* to categorical ones. This preserved variance where it mattered most.  
4. **Invent & Simplify** – Implemented the pipeline in AWS Glue with PySpark, using **AWS SageMaker Feature Store** for versioning.  
5. **Deliver Results** – After standardization only on continuous features, PCA explained 88 % of variance with 30 components versus 75 % when all columns were standardized—reducing model training time by 40 %.

**Result**

The recommendation accuracy (AUC) improved from 0.72 to 0.78, and inference latency dropped from 120 ms to 65 ms per request on an **Amazon SageMaker Endpoint** with auto‑scaling.

**Learning**

Standardization isn’t a one‑size‑fits‑all; understanding feature semantics leads to better dimensionality reduction and downstream performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
