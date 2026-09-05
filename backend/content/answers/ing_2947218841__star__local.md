---
qid: ing_2947218841__star__local
question: 'Explain: Benefits of a CDN — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 333
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:50:59-05:00'
sources: []
---

**Situation:**  
When I joined a startup building an image‑recognition API, our training dataset was 12 TB of satellite imagery stored in a single S3 bucket. Clients from the EU and Asia were complaining about latency and timeouts when pulling data for inference.

**Task:**  
I had to design a scalable system that reduced end‑to‑end request latency by at least 40 % while keeping costs under the quarterly budget.

**Action:**  
I evaluated three options: on‑prem caching, peer‑to‑peer replication, and a commercial CDN. After benchmarking, I chose CloudFront because it offered edge locations close to our users, automatic TLS termination, and built‑in request throttling. I configured a signed URL policy so only authenticated requests could fetch model weights, then set up an origin failover to a secondary S3 bucket for high availability. To keep costs low, I enabled object caching with a 24‑hour TTL and used Lambda@Edge to strip query parameters before caching.

**Result:**  
Latency dropped from 1.8 s to 0.9 s globally, improving API throughput by 45 %. The CDN cost was $1.2k per month versus an estimated $3.5k for on‑prem caching. I learned that choosing the right edge network can dramatically improve ML service performance while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
