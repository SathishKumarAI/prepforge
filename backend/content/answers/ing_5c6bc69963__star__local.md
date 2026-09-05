---
qid: ing_5c6bc69963__star__local
question: 'Explain: HTTP/1.1 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:25-05:00'
sources: []
---

**Situation:**  
I was redesigning the front‑end for a real‑time analytics dashboard that served millions of users daily. Our traffic had spiked during a product launch, and we noticed latency bursts when switching from our staging environment to production.

**Task:**  
I needed to determine whether to keep using plain HTTP/1.1 or upgrade to HTTPS (TLS 1.3) while ensuring the dashboard’s response time stayed under 200 ms for 95% of requests.

**Action:**  
First, I profiled the existing HTTP pipeline with a custom interceptor in Node.js, measuring connection establishment, header size, and keep‑alive reuse. I then added TLS termination at our load balancer (NGINX) using session resumption to reduce handshake overhead. To offset the extra CPU cost of encryption, I introduced an edge caching layer via Cloudflare that cached static assets with a 24‑hour TTL. Finally, I ran A/B tests comparing end‑to‑end latency and dropped‑connection rates under peak load.

**Result:**  
HTTPS adoption increased overall bandwidth by ~12 % due to larger header sizes, but the combined TLS optimizations and caching reduced average latency from 250 ms to 170 ms. Drop‑rate fell below 0.01%. I learned that securing traffic can coexist with performance if you leverage keep‑alive, session resumption, and edge caching—critical for any high‑scale ML inference API exposed over the web.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
