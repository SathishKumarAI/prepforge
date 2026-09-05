---
qid: ing_6e428a894e__star__local
question: 'Explain: HTTP in Distributed Systems — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 365
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:50-05:00'
sources: []
---

**Situation:**  
While leading a micro‑services overhaul at my last company, we noticed that our API gateway was becoming a bottleneck; latency spiked when services were geographically dispersed and some clients used older browsers.

**Task:**  
I had to redesign the inter‑service communication so it remained simple, secure, and scalable—essentially turning HTTP/HTTPS into a first‑class citizen of our distributed architecture.

**Action:**  
First, I introduced an Envoy sidecar that handled TLS termination for all services, reducing CPU overhead on the app containers. Then, I leveraged gRPC over HTTP/2 to keep the simplicity of HTTP while gaining multiplexed streams and header compression. For non‑streaming calls we kept RESTful JSON endpoints, but wrapped them in a service mesh that automatically injected mutual TLS (mTLS) and rate limiting. To mitigate latency, I implemented request coalescing: identical requests were cached at the gateway for 200 ms, preventing duplicate calls to downstream services. Finally, I added OpenTelemetry instrumentation so every HTTP/HTTPS trace could be visualized in Grafana.

**Result:**  
After deployment, end‑to‑end API latency dropped from 350 ms to 120 ms on average, and the number of TLS handshakes per second fell by 70%, freeing up CPU cycles. The team also gained a single, auditable path for monitoring traffic patterns, which helped us spot a previously hidden data leakage issue. I learned that treating HTTP as an extensible transport—augmented with mTLS, multiplexing, and intelligent caching—lets distributed systems stay both robust and developer‑friendly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
