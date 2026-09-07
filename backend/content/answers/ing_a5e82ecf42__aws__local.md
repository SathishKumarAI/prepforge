---
qid: ing_a5e82ecf42__aws__local
question: 'Explain: where this geosharing aspect comes in okay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 395
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:02-05:00'
sources: []
---

**Situation & Task**  
I was tasked at a fintech startup to build an on‑device recommendation engine that surfaced nearby offers to users without compromising privacy or latency. The core challenge: *geosharing*—sharing user location data with the model while respecting GDPR and minimizing server round‑trips.

**Action**  
1. **Edge Inference** – I deployed a quantized TensorFlow Lite model on smartphones (AWS IoT Greengrass).  
2. **Privacy‑Preserving Aggregation** – User coordinates were obfuscated with differential privacy before being sent to an Amazon Kinesis Data Streams pipeline.  
3. **Feature Store** – Stored anonymised geo‑hotspots in Amazon DynamoDB (partitioned by region) and updated via Lambda on every ingest event.  
4. **Model Retraining** – Every 12 hrs, SageMaker Pipelines pulled the latest aggregated data, retrained a CatBoost model, and pushed it back to Greengrass.

**Result**  
- Latency dropped from 2 s (cloud‑only) to <300 ms on device.  
- Accuracy improved by **18 % CTR** due to richer local context.  
- Data transfer reduced by **70 %**, cutting monthly Kinesis costs from $12k to $3.6k.

**Why it matters**  
*Customer Obsession*: Users received hyper‑relevant offers instantly, without sharing raw location data.  
*Ownership & Dive Deep*: I owned the entire pipeline—from edge inference to privacy compliance—and iterated on each component based on real metrics.  

Bar‑raisers look for ownership, depth of technical trade‑offs, and a clear, quantified impact—all demonstrated here.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
