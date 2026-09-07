---
qid: ing_b83efdcd72__faang__local
question: 'Explain: So all we''ll say is traffic, weather — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:43-05:00'
sources: []
---

**Clarify**  
You’re asked to design a system that predicts road‑traffic and weather for navigation apps (e.g., Google Maps). Confirm assumptions: real‑time updates, global coverage, low latency (< 200 ms), high availability, privacy compliance, scalability to millions of concurrent users, and integration with third‑party data sources.

**Approach**  
1. **Data ingestion layer** – collect telemetry from vehicles (GPS, speed, OBD), mobile devices, IoT sensors, and external APIs. Use Kafka or Pulsar for event streaming.  
2. **Processing pipeline** – a combination of stream processors (Flink/Beam) for near‑real‑time analytics and batch jobs (Spark/Hadoop) for model training.  
3. **Modeling** – use spatial‑temporal models: LSTM/GRU or Graph Neural Networks for traffic; ConvLSTM or DeepAR for weather. Store trained weights in a model registry.  
4. **Serving layer** – low‑latency inference via TensorFlow Serving or TorchServe behind an API gateway, with CDN caching per region.  
5. **Storage & indexing** – use distributed time‑series DB (Cassandra/TimescaleDB) for raw data; vector index (FAISS) for similarity search in routing.

**Depth**  
- *Complexity*: Ingestion O(1) per event; processing O(log n) on stream; inference O(k) where k is model size.  
- *Trade‑offs*: Batch vs. streaming accuracy, model freshness vs. compute cost, edge caching vs. consistency.

**Edge Cases**  
- Sudden road closures (sensor failure), missing weather data, privacy leaks from user devices. Test with synthetic spikes and data dropouts.

**Optimize & Communicate**  
Iteratively add adaptive learning (online updates) to reduce drift; use autoscaling for compute nodes. Explain the trade‑off matrix clearly: latency vs. accuracy, cost vs. coverage. This showcases structured thinking, technical depth, and practical engineering judgment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
