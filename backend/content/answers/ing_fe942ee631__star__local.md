---
qid: ing_fe942ee631__star__local
question: What is a Live Video? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 349
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:51-05:00'
sources: []
---

**Situation:**  
When I joined my previous startup as a senior backend engineer, we were launching a new social media app that promised real‑time video streams for live events. The product team wanted a comment system that could handle thousands of users posting comments per second without lagging the viewer’s experience.

**Task:**  
I had to design and prototype a scalable live‑comment architecture that delivered messages with sub‑second latency, persisted them reliably, and provided moderation hooks—all while keeping operational costs under our $5k/month budget.

**Action:**  
I chose a publish/subscribe model using Redis Streams for low‑latency message routing. Comments were first queued in a Redis stream per channel; a pool of consumer workers (Python async) pulled batches, performed profanity filtering via an ML classifier, and wrote to a sharded PostgreSQL table for persistence. To keep the viewer’s UI responsive, I added a CDN‑cached WebSocket endpoint that replayed buffered comments from Redis to new viewers, ensuring they saw recent activity instantly. For cost control, I auto‑scales the consumer pool based on stream length and uses spot instances for workers.

**Result:**  
The system handled 20 k concurrent live streams with an average comment latency of 120 ms. After launch, user engagement rose 35% in the first month, and we stayed within budget by keeping compute costs at $4.3k/month. I learned how to blend real‑time messaging patterns with batch persistence and cost‑aware scaling for production ML‑augmented features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
