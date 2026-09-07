---
qid: ing_abd58b39c4__faang__local
question: 'Explain: Scaling to support a large global shared fleet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 460
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:27-05:00'
sources: []
---

**Clarify**  
The question asks how an ML system can scale to serve predictions for *every* vehicle in a worldwide fleet—tens of millions of cars, trucks, or drones—while keeping latency low and cost reasonable. I’ll assume: (1) the model is already trained, (2) requests come from edge devices, (3) we need real‑time inference, and (4) data privacy limits central storage.

**Approach**  
1. **Model partitioning** – split heavy models into lightweight “edge” heads and a heavier “cloud” back‑end.  
2. **Edge caching & quantization** – deploy compressed weights locally to reduce bandwidth.  
3. **Global inference cluster** – use autoscaling compute (GPU/TPU) behind a global load balancer with geo‑routing.  
4. **Data pipeline** – stream telemetry via Kafka to a distributed feature store, ensuring consistent feature versions.

**Depth**  
- *Edge*: 8‑bit quantized model (~10 MB) runs on the vehicle’s CPU, delivering <50 ms inference.  
- *Cloud*: A sharded inference service (e.g., TensorFlow Serving + Kubernetes) scales horizontally; each shard handles a region’s traffic.  
- Latency is bounded by edge pre‑processing plus 1–2 ms network hops to nearest data center.  
- Cost: Edge reduces cloud compute by ~70 %. Autoscaling keeps GPU pods idle during low traffic, cutting spend.

**Edge Cases**  
- Network partitions → fallback to local model only.  
- Model drift → incremental OTA updates or “shadow” deployment to test new weights without affecting live predictions.  
- Privacy violations → enforce on‑device feature extraction and encrypt all transit.

**Optimize & Communicate**  
Iterate by profiling per‑region latency, then adjust shard sizes or add edge caching for hot features. Explain the trade‑off: heavier edge models reduce network traffic but increase local compute; lighter edge models save CPU cycles but rely more on cloud throughput. Emphasize that this architecture balances scalability, performance, and privacy—exactly what FAANG leaders expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
