---
qid: ing_770be7c282__star__local
question: 'Explain: Questions and Solutions — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 348
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:02-05:00'
sources: []
---

**Situation**  
During my senior year capstone I built an internal search‑engine demo for a local library. The professor asked us to explain the end‑to‑end flow from typing a URL in a browser to seeing the final page, and how we could optimize it with ML techniques.

**Task**  
I needed to map out each network hop, server decision point, and caching layer, then propose a machine‑learning model that would predict which backend service should handle the request to reduce latency and balance load across microservices.

**Action**  
I diagrammed the full pipeline: DNS resolution → TCP handshake → TLS handshake → HTTP request parsing → reverse‑proxy routing (NGINX) → application logic or static asset fetch. I collected telemetry (latency, CPU, queue depth) from each hop using Prometheus and exported it to a time‑series database. Then I trained a lightweight XGBoost model that ingested current load metrics and predicted the optimal backend instance for each request class. The model ran in an Envoy filter, adjusting routing weights on the fly. I also added a caching layer with Redis, using ML‑based eviction policies tuned to access patterns.

**Result**  
The prototype cut average page load time from 750 ms to 420 ms (≈44% faster) and reduced CPU usage by ~18%. It also lowered cache miss rates by 12%. I learned how real‑time telemetry can be turned into actionable ML features, and the importance of keeping models lightweight for low‑latency services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
