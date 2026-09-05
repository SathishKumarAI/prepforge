---
qid: ing_71f61b2467__star__local
question: 'Explain: Example: AI Job Completed Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 346
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:04-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with notifying downstream services whenever a large-scale image‑recognition job finished on our cloud platform. The existing polling mechanism caused 30 % more latency and burst traffic during peak hours.

**Task**  
Build a reliable, low‑latency webhook system that could dispatch “job completed” events to up to 200 external endpoints per batch, guarantee at‑least‑once delivery, and scale horizontally without hitting rate limits.

**Action**  
I chose an event‑driven microservice written in Go with NATS Streaming as the pub/sub backbone. Each job completion produced a JSON payload (job_id, status, result_url). I implemented a retry backoff queue stored in Redis to handle transient failures and used HMAC signatures for endpoint authentication. The dispatcher ran on Kubernetes, autoscaling based on pending messages, and leveraged HTTP/2 multiplexing to keep connections open with high‑traffic subscribers. For rate limiting, I added per‑endpoint leaky buckets that throttled outgoing requests to 10 req/s.

**Result**  
The new system cut average notification latency from 12 s down to 0.8 s and reduced server CPU usage by 40 %. We achieved a 99.9 % success rate for event delivery, and the auto‑scaling logic kept costs stable during traffic spikes. I learned how to blend pub/sub patterns with retry queues to balance speed, reliability, and cost in a real‑world AI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
