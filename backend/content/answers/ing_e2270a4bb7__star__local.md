---
qid: ing_e2270a4bb7__star__local
question: 'Explain: You always have to go ask the — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 358
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:08-05:00'
sources: []
---

**Situation**  
When I joined a product‑team at a mid‑size fintech, we were building a real‑time fraud detection model that had to run in production with sub‑100 ms latency. Our first prototype was accurate but the inference pipeline was too slow for live transaction processing.

**Task**  
I needed to redesign the deployment architecture so that the model could serve predictions at 5 k requests per second while keeping memory usage below 1 GB and maintaining a 99.9 % uptime SLA.

**Action**  
Instead of re‑engineering from scratch, I followed Google’s “Ask the System” principle: I first mapped out the entire data flow—data ingestion, feature extraction, model inference, and result routing—and identified bottlenecks using *Prometheus* and *Grafana*. I then applied TensorRT for GPU acceleration, switched to a lightweight ONNX runtime, and implemented an async microservice with *FastAPI* behind an NGINX reverse proxy. To guarantee reliability, I added circuit‑breaker patterns via *Resilience4j* and automated scaling with Kubernetes HPA.

**Result**  
Latency dropped from 250 ms to 45 ms, throughput increased by 12×, and the service sustained 99.97 % uptime over a three‑month period. I learned that breaking down complex systems into observable components and iteratively “asking” each part for its constraints leads to scalable, production‑ready ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
