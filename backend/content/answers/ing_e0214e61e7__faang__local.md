---
qid: ing_e0214e61e7__faang__local
question: 'Explain: Traffic — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 484
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:20:22-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a “back‑of‑the‑envelope” system that predicts traffic patterns (e.g., congestion, travel time) for a city or highway network. Assume we have historical GPS traces, real‑time sensor feeds, and need sub‑minute latency with 99% accuracy.

**Approach**  
1. **Data ingestion** – Kafka topics per sensor/vehicle stream; batch layer from nightly logs.  
2. **Feature store** – Redis for low‑latency lookup of static maps (road segments, intersections).  
3. **Modeling** – Online learning with a lightweight gradient boosting tree (XGBoost) or a streaming LSTM that updates every minute.  
4. **Prediction service** – Stateless gRPC endpoints behind a load balancer; cache recent predictions in Memcached.  
5. **Monitoring** – Prometheus metrics for latency, throughput, and drift detection.

**Depth**  
- *Time series handling*: Use sliding windows (e.g., last 15 min) per segment.  
- *Feature engineering*: Traffic density, speed variance, weather, events.  
- *Scalability*: Kafka partitions ≈ number of segments; each consumer handles a subset.  
- *Latency*: Inference <50 ms per request by keeping the model size <10 MB and using CPU‑optimized libraries.  
- *Complexity*: O(N) for N road segments during batch updates; inference is O(1).

**Edge Cases**  
- Sudden accidents → outlier removal, fallback to historical average.  
- Sensor dropouts → impute with nearest neighbor or use Kalman filter.  
- New roads → hot‑swap model parameters without downtime.

**Optimize & Communicate**  
To reduce latency further, we could pre‑compute predictions for high‑traffic segments during off‑peak and serve from a CDN cache. For accuracy, ensemble multiple models (tree + neural) and use Bayesian updating to quantify uncertainty. I’d explain this trade‑off: lower latency vs. marginal gain in MAE (~5 % improvement). This structure shows clear problem framing, pragmatic engineering choices, and an eye toward measurable metrics—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
