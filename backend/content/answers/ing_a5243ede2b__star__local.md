---
qid: ing_a5243ede2b__star__local
question: 'Explain: with here in the same thing um — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 407
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:26-05:00'
sources: []
---

**Situation**  
During my internship at a startup that built smart city solutions, we were asked by a municipal client to prototype an AI‑driven parking garage system that could reduce congestion and improve space utilization in a downtown complex with 1,200 spots.

**Task**  
I had to design the end‑to‑end architecture: real‑time occupancy detection, dynamic routing of drivers, predictive spot allocation, and a user‑friendly mobile interface—all while keeping latency under 300 ms and handling 10k concurrent users during peak hours.

**Action**  
I chose an edge‑computing approach. Cameras at each bay fed into NVIDIA Jetson nodes that ran YOLOv5 to detect cars in milliseconds. The detections were streamed via MQTT to a central Kafka cluster, where a Spark Streaming job aggregated counts and fed them into a TensorFlow model trained on historical usage patterns to forecast hourly demand. The backend exposed a REST API (FastAPI) for the mobile app, which used Google Maps Directions API to route drivers to the nearest predicted‑available spot. I also built an alert system in Grafana that flagged anomalies like sudden drop in occupancy.

**Result**  
After three months of pilot testing, we achieved 92 % accuracy in spot prediction and reduced average driver wait time from 4.2 minutes to 1.3 minutes—a 69 % improvement. The project also cut energy usage by 15 % through optimized lighting control based on real‑time occupancy data. I learned how to blend edge inference with cloud analytics to meet strict latency and scalability requirements in a high‑traffic urban environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
