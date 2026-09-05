---
qid: ing_0ee3d43f99__star__local
question: 'Explain: can reason through by thinking well what'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 319
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:16-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the fraud‑detector for a payment gateway that processed ~3 M transactions per day. The model’s precision had dropped from 92 % to 84 % after a sudden spike in new merchant types, and we were on a tight three‑week sprint to bring it back up.

**Task** – I needed to diagnose why the model was misclassifying legitimate payments as fraud without over‑fitting on the new merchant signals, all while keeping latency below 50 ms per prediction.

**Action** – First, I performed an explainable‑AI audit using SHAP values to see which features were most influential. The audit revealed that the “merchant category code” feature was now dominated by a handful of noisy categories. I engineered a hierarchical encoding: a two‑level embedding where the top level captured broad industry trends and the bottom captured fine‑grained merchant IDs, then retrained a LightGBM model with early stopping on a validation set that included recent merchants. To keep latency low, I compressed the final model to 12 MB using ONNX quantization and deployed it behind a rate‑limited edge cache.

**Result** – Precision recovered to 91 % within two weeks, and false‑positive churn dropped by 35 %. The exercise taught me that thoughtful feature engineering combined with transparent model diagnostics can rapidly restore performance without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
