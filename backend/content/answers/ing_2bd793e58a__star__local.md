---
qid: ing_2bd793e58a__star__local
question: 'Explain: Web Servers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 334
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:33-05:00'
sources: []
---

**Situation**  
During a product launch for our recommendation engine, the API gateway was receiving ~30k requests per second. The latency spiked to 250 ms on peak hours, jeopardizing user engagement and SLA.

**Task**  
I needed to reduce average response time below 80 ms while keeping CPU utilization under 70% so we could scale cost‑effectively across a cloud cluster.

**Action**  
First, I profiled the Node.js event loop and discovered that most of the bottleneck was in synchronous data enrichment calls. To address this, I introduced worker threads (parallelism) to offload heavy JSON parsing and feature vector calculation, while keeping the main thread focused on handling incoming HTTP requests (concurrency). I also re‑architected the request pipeline using a micro‑task queue: each request spawned an async task that awaited data from Redis and then dispatched CPU‑heavy work to the pool. Finally, I implemented back‑pressure with a bounded queue so that if the pool was saturated we would drop or delay low‑priority requests rather than let the event loop block.

**Result**  
Latency dropped to 65 ms on average, CPU usage stayed at ~55%, and throughput increased by 40%. The experiment also taught me that true scalability in web services comes from combining concurrent I/O handling with parallel CPU work, and that careful queue sizing is key to avoiding hidden bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
