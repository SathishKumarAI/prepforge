---
qid: ing_734c6ae4d2__star__local
question: 'Explain: CDN Providers — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:16-05:00'
sources: []
---

**Situation**  
While leading the launch of a real‑time recommendation engine for an e‑commerce platform, we noticed that latency spikes during peak traffic caused user abandonment rates to climb from 3% to 8%. The model served predictions via REST endpoints hosted in AWS Lambda behind CloudFront.

**Task**  
I needed to reduce end‑to‑end latency below 150 ms and ensure high availability across North America without blowing the budget.

**Action**  
I evaluated three CDN providers—Akamai, Fastly, and Cloudflare—by running a synthetic load test with 10 k concurrent requests. I focused on edge caching of model inference results, TCP multiplexing, and WebSocket support for live updates. After benchmarking, I chose Fastly because its real‑time configuration API allowed me to push cache invalidation rules instantly when the model updated. I configured a custom VCL snippet to cache predictions at the edge for 30 seconds and set up origin shield with an NGINX reverse proxy that throttled Lambda invocations. Additionally, I implemented health checks that routed traffic to a secondary region if latency exceeded 200 ms.

**Result**  
Latency dropped from 400 ms to 110 ms during peak hours, reducing abandonment by 60% and increasing conversion revenue by $1.2M/month. I learned the importance of measuring edge performance under realistic loads and that choosing a CDN with programmable APIs can dramatically cut operational overhead for ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
