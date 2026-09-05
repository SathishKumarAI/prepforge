---
qid: ing_f70e8efb32__star__local
question: 'Explain: Data Correctness — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 379
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:39-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was leading the redesign of our credit‑risk model. The production pipeline ingested millions of daily transaction logs from three disparate data lakes; a recent audit revealed that 8 % of records were missing key fields, causing the model to output wildly inflated risk scores and flag legitimate customers.

**Task:**  
I needed to build a robust data‑quality layer that would detect, correct, and prevent such corruption in real time while keeping latency under 200 ms so the scoring service could still serve live app requests.

**Action:**  
1. Implemented an Apache Flink stream job that applied deterministic checksum validation on each record and cross‑checked against a master schema stored in Confluent Schema Registry.  
2. Added a fallback rule engine using Drools to impute missing values based on historical averages per merchant category, with a confidence score threshold.  
3. Deployed a Prometheus alerting dashboard that visualised field‑level integrity metrics and triggered automated retraining when drift exceeded 1 %.  
4. Integrated the corrected stream into our model serving stack (TensorFlow Serving) via gRPC, ensuring end‑to‑end latency remained <180 ms.

**Result:**  
Within two weeks of deployment, data‑corruption incidents dropped from 8 % to <0.5 %, and the model’s false‑positive rate fell by 32 %. The system also reduced manual remediation time from days to minutes. I learned that coupling schema validation with rule‑based imputation, monitored through real‑time dashboards, is key to maintaining data reliability in high‑velocity ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
