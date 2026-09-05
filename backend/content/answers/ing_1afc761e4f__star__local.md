---
qid: ing_1afc761e4f__star__local
question: What’s UPI? — Unified Payments Interface (UPI)
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 294
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:23:33-05:00'
sources: []
---

**Situation** – While working at a fintech startup, we noticed our monthly UPI transaction volume was growing by 25% YoY, but the chargeback rate had spiked to 4.8%, well above the industry benchmark of 1%.  
**Task** – I was tasked with building a real‑time fraud detection system that could flag suspicious UPI transfers without slowing down the user experience or increasing false positives beyond 2%.  
**Action** – First, I extracted transaction metadata (IP, device fingerprint, geolocation, time lag) and engineered features such as “average daily spend per device” and “velocity score.” Using Python’s scikit‑learn, I trained a LightGBM model on 1.5 million labeled UPI logs, then deployed it via a Dockerized REST API behind our Kubernetes cluster. To keep latency under 150 ms, I compressed feature vectors with Apache Arrow and used async inference pipelines.  
**Result** – The new model cut the chargeback rate to 0.9% in three months (a 81% reduction), while maintaining a false‑positive rate of 1.5%. I learned that combining domain‑specific feature engineering with efficient deployment pipelines is key for high‑volume payment systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
