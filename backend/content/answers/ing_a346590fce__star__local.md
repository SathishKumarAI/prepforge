---
qid: ing_a346590fce__star__local
question: 'Explain: The Interview Question — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 409
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:22-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup last year, our credit‑card processing volume had grown to 12 M transactions per month, but we were losing roughly 3 % of revenue to fraudulent activity—about $9 million annually. The existing rule‑based system flagged only 60 % of frauds and produced a 30 % false‑positive rate, clogging customer support.

**Task**  
I was tasked with building a real‑time fraud detection model that increased true‑positive rate by at least 15 percentage points while keeping the false‑positive rate below 10 %. The solution also needed to integrate into our existing Kafka‑based data pipeline and provide explanations for each flag so compliance could audit decisions.

**Action**  
I started by engineering a feature set of 200 time‑series, categorical, and behavioral variables (e.g., transaction velocity, device fingerprint entropy, geo‑distance drift). Using Scikit‑Learn I trained an XGBoost classifier with class‑weighting to address the 1:100 fraud ratio. To handle concept drift, I deployed a microservice that retrained nightly on the last 30 days of data and logged feature importance for auditability. For real‑time inference, I wrapped the model in a TensorFlow Lite API behind an HTTP/2 gateway, achieving <10 ms latency per request. Finally, I built a dashboard in Grafana to surface top risk factors and allow analysts to adjust thresholds dynamically.

**Result**  
Within three months we saw fraud losses drop from 3 % to 1.7 %, saving $5.4 million annually while keeping false positives at 8 %. The model’s explainability earned us a compliance audit pass with zero findings. I learned that combining robust feature engineering, careful class‑weight tuning, and an automated retraining pipeline is essential for scalable fraud detection in high‑volume environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
