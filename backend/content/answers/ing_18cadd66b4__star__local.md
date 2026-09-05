---
qid: ing_18cadd66b4__star__local
question: 'Explain: Non-functional — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:42-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the product team was building a customer‑support voice assistant that had to answer queries in under 300 ms while handling peak traffic of 1,500 concurrent calls during holiday promotions.

**Task:**  
My job was to ensure the agent met strict real‑time performance and reliability targets: latency < 250 ms, 99.9% uptime, and zero data loss across all regions, while keeping CPU usage below 70% on a shared Kubernetes cluster.

**Action:**  
I started by profiling the speech‑to‑text pipeline with Jaeger and identified that the NLU inference step was a bottleneck. I replaced the heavy PyTorch model with a TensorRT‑optimized ONNX version, reducing inference time from 180 ms to 45 ms. To guarantee availability, I introduced a two‑tier caching layer: a Redis in‑memory cache for frequent intents and a CDN edge function for transcribed audio chunks. I also set up Prometheus alerts for latency thresholds and auto‑scales pods based on request per second using KEDA. Finally, I implemented chaos engineering tests with Gremlin to validate fault tolerance.

**Result:**  
Latency dropped to 220 ms average under load, uptime hit 99.95% over three months, and CPU usage stayed around 55%. The user satisfaction score rose from 78% to 92%, and we avoided a costly outage during the holiday surge. I learned that combining model optimization, intelligent caching, and observability is key to meeting real‑time voice requirements in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
