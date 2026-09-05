---
qid: ing_1fbf2fe195__star__local
question: 'Explain: Traffic and all other things will come — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 373
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:54-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time navigation feature for delivery drivers. Within the first month, average trip time was 18 % higher than our SLA because we weren’t accounting for live traffic or construction updates.

**Task**  
I had to design an end‑to‑end system that ingests live traffic feeds, predicts congestion, and reroutes vehicles with minimal latency while scaling to millions of concurrent users.

**Action**  
I built a microservice architecture on Kubernetes. A “Traffic Ingestor” pulled data from city sensors and third‑party APIs (e.g., HERE, TomTom) into Kafka streams. A “Prediction Service” ran a lightweight LSTM model in TensorFlow Serving; it consumed the stream, produced congestion scores per road segment, and stored them in Redis for 5 s TTL. The “Routing Engine” used Dijkstra’s algorithm on an edge‑weighted graph where weights were dynamic traffic scores plus static factors (speed limits, road type). I exposed a gRPC API to the mobile app, ensuring <50 ms end‑to‑end latency. For scalability, each component auto‑scales based on queue depth and CPU usage.

**Result**  
After deployment, average trip time dropped by 22 %, and driver complaints about detours fell from 12 % to 3 %. The system handled 2 M concurrent requests with a 99.9 th percentile latency of 48 ms. I learned that coupling real‑time data pipelines with lightweight ML inference, backed by fast in‑memory caches, is key to building responsive navigation services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
