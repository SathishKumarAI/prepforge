---
qid: ing_0f8482fd82__star__local
question: 'Explain: HTTP Versions — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:23-05:00'
sources: []
---

**Situation** – At my previous company we launched a new e‑commerce microservice that needed to handle 150 k requests per second during peak holiday sales. The existing API was plain HTTP/1.1 and the latency kept creeping up because every request had to negotiate TCP connections and perform full round‑trips for each call.

**Task** – I was tasked with redesigning the gateway so we could reduce latency, support HTTPS for PCI compliance, and still keep cost in check while scaling horizontally.

**Action** – I introduced an NGINX reverse proxy as a TLS terminator. First, I upgraded to HTTP/2 on the backend by enabling `http2` in NGINX, which multiplexes multiple requests over one connection. Then I configured ALPN (Application-Layer Protocol Negotiation) so clients automatically switch to HTTPS if they support it, falling back to HTTP/1.1 otherwise. For load balancing I used a least‑conn strategy with health checks on the microservices. To keep costs low I leveraged AWS Application Load Balancer’s built‑in TLS termination instead of running separate EC2 instances for certificates.

**Result** – After deployment we saw a 35 % drop in average response time (from 420 ms to 270 ms) and a 40 % reduction in CPU usage on the backend. The system now supports secure connections without adding extra hops, and we’re able to scale out by simply adding more NGINX nodes behind the ALB. I learned that choosing the right HTTP version and offloading TLS can have a huge impact on both performance and operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
