---
qid: ing_5d8b5180da__star__local
question: 'Explain: The Problem — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 309
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:07-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our transaction volume had grown to 12 million USD per month, but we were losing roughly 3% of revenue to credit‑card fraud, which meant $360k in losses and eroding customer trust.

**Task** – I was tasked with building an AI‑driven fraud detection pipeline that could flag suspicious transactions in real time while keeping false positives below 2%.

**Action** – First, I collected a labeled dataset of past fraud cases (≈50k instances) and engineered features such as velocity metrics, device fingerprinting, and geographic anomalies. Using Python and Scikit‑Learn, I trained an XGBoost model, then deployed it with TensorFlow Serving behind our microservice architecture. To handle concept drift, I set up a nightly retraining job that ingested the latest 30 days of data and updated the model automatically. For real‑time scoring, I integrated Redis Streams to push transaction data into the model and returned predictions within 200 ms.

**Result** – Within three months, fraud losses dropped from $360k to $180k per month (50% reduction). The false‑positive rate fell from 4.8% to 1.9%, improving customer satisfaction scores by 15%. I learned the importance of continuous model monitoring and balancing precision against user experience in high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
