---
qid: ing_18027b5fb6__star__local
question: 'Explain: What’s expected at different levels — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:50-05:00'
sources: []
---

**Situation** – In my last role I was asked to design a recommendation engine that would run on users’ phones, delivering personalized content without draining battery or over‑using data.

**Task** – My goal was to create an end‑to‑end mobile system that could ingest user interaction logs, train a lightweight model offline, update it incrementally in the background, and serve predictions with sub‑100 ms latency on Android and iOS.

**Action** – I broke the problem into three layers:  
1. **Data ingestion & feature pipeline** – used protobuf streams to batch sensor events (touches, location) and stored them in a local SQLite DB, then applied TensorFlow Lite’s `tf.data` API to extract features on‑device.  
2. **Model training & compression** – trained an XGBoost model on the server, distilled it into a 1 MB quantized neural net with TensorFlow Lite, and pushed updates via Firebase Cloud Messaging using delta packaging to reduce bandwidth.  
3. **Inference & caching** – wrapped the TFLite interpreter in a Kotlin/Swift wrapper that cached top‑k predictions for 5 seconds, ensuring low CPU usage; I also added an adaptive sleep window based on battery level.

**Result** – The app achieved a 35% hit rate for relevant content while keeping background training to under 2 minutes per hour of use and never exceeding 200 mAh per day. User retention rose by 12%, and we cut data transfer costs by 40%. I learned how to balance ML accuracy with mobile constraints, and that clear layer separation makes the system maintainable across platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
