---
qid: ing_d19364b12b__aws__local
question: 'Explain: What you’re actually trying to do — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 466
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:39-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to build an on‑device credit‑score model that runs in the background of every user’s phone while preserving battery life and data privacy.

**Action**  
*Customer Obsession & Ownership*: I began with a deep dive into the user journey—profiling 200 k daily active users (DAUs) across Android/iOS, measuring average session length (~12 min), and battery budget (<2 % per day).  
*Technical Design*:  
1. **Feature Extraction** – lightweight sensors (GPS, accelerometer) fed to a *TensorFlow Lite* model with 32‑bit quantization.  
2. **Model Serving** – `MobileInferenceEngine` scheduled via Android’s WorkManager / iOS BackgroundTasks, throttling inference to once per hour or on significant context change.  
3. **Data Governance** – all raw data encrypted at rest (`AES-256`) and never transmitted; model updates delivered through signed OTA packages stored in an S3 bucket, fetched with `AWS IoT Core` secure MQTT.  
4. **Scalability & Cost** – OTA size <1 MB; AWS Lambda (≈$0.0000167 per 100 ms) pushes new weights to devices at a cost of <$10/day for millions of users.

*Bias for Action*: I prototyped with 5,000 test phones, iterating on inference latency (<120 ms) and battery drain (<1.3 %/day).  

**Result**  
Post‑launch, the model achieved an AUC‑ROC of **0.87** against a cloud baseline (0.85), reduced server load by 60 %, and cut infrastructure spend from $150k/month to $70k/month while keeping user churn <2 %.  

**Learnings**  
The biggest failure was over‑optimizing for model size, which hurt accuracy; the fix was to add a second tier of *Edge TPU* inference for high‑risk users—an example of learning and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
