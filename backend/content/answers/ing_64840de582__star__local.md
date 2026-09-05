---
qid: ing_64840de582__star__local
question: 'Explain: Notifying Transcoder Jobs — Transcoding: How We Serve Videos at
  Scale - Egnyte Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 305
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:43-05:00'
sources: []
---

**Situation:**  
At my previous role, we were launching a new media platform that needed to deliver user‑generated videos instantly across devices. Our existing pipeline queued transcodes but didn’t notify downstream services until the job finished, causing stale thumbnails and delayed playback.

**Task:**  
I had to design an event‑driven notification system so that every transcoder completion could trigger thumbnail generation, CDN cache purging, and analytics updates within seconds.

**Action:**  
I introduced a lightweight Kafka topic for “transcode‑completed” events. Each worker publishes a message with job ID, output URLs, and processing time. A consumer microservice in Go subscribes to the topic, validates the payload against a Redis cache of pending jobs, then asynchronously calls our thumbnail service via gRPC and sends a signed URL to the CDN purging API. I added exponential back‑off retries and dead‑letter queues for failures. Metrics were exposed through Prometheus; I set up alerts when event lag exceeded 2 seconds.

**Result:**  
Latency from upload to playable video dropped from 45 s to under 10 s on average, and cache hit rates improved by 18%. The system handled a 200% traffic spike during beta testing without degradation. I learned how decoupling with an event bus can turn a monolithic pipeline into a resilient, observable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
