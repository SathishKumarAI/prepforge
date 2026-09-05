---
qid: ing_3a3f80e9a6__star__local
question: 'Explain: HTTP/2 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 309
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:03-05:00'
sources: []
---

**Situation:**  
While leading the backend redesign for our video‑streaming platform, I noticed that page load times were creeping up during peak hours—our CDN was fine, but the API traffic hit a bottleneck. The metrics showed a 40 % increase in latency after the 6 pm surge.

**Task:**  
I needed to reduce round‑trip overhead and improve multiplexing so the front‑end could fetch multiple assets (JSON metadata, thumbnails, auth tokens) over a single connection without head‑of‑line blocking.

**Action:**  
I introduced HTTP/2 into our service mesh. I updated our Nginx ingress controller to use the `http2` directive, switched to TLS‑ALPN for secure negotiation, and rewrote the Node.js microservice to leverage the native `http2` module. I also added server push for static assets that were always requested together. To monitor the impact, I instrumented Prometheus metrics on stream counts per connection and latency percentiles.

**Result:**  
After deployment, average API latency dropped from 320 ms to 180 ms (a 44 % improvement), and our peak‑hour traffic handled a 25 % increase without additional instances. I learned that proper TLS configuration and careful push strategy can dramatically reduce connection churn in high‑traffic services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
