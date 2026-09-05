---
qid: ing_b9c5d39b2f__star__local
question: 'Explain: Concurrent requests limiter — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 298
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:48-05:00'
sources: []
---

**Situation:**  
At my last startup we built a recommendation engine exposed via a public REST API. Within two months of launch, traffic spiked from 1k to 15k requests per minute, and our backend services began throttling with 503 errors.

**Task:**  
I was tasked with designing a scalable concurrency control system that could keep latency under 200 ms while preventing overload, all without rewriting the core inference pipeline.

**Action:**  
I implemented a token‑bucket rate limiter using Redis as a distributed store. Each API key received a bucket of 100 tokens per minute; tokens were refilled every second. The middleware, written in Go, checked the bucket before forwarding to the ML microservice. To handle burst traffic I added a short queue backed by Kafka and a worker pool that capped concurrent inference calls at 200. I also instrumented Prometheus metrics to expose real‑time token usage and latency.

**Result:**  
After deployment, request success dropped from 72% to 98%, average latency fell from 350 ms to 140 ms, and the system handled a 20× traffic increase with zero downtime. I learned that combining distributed rate limiting with backpressure queues can make stateless services robust under unpredictable load while keeping engineering effort minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
