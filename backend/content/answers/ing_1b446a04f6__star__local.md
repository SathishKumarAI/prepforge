---
qid: ing_1b446a04f6__star__local
question: 'Explain: Cached Reads — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 446
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:04-05:00'
sources: []
---

**Situation:**  
When I joined the Real‑Time Matching team at Uber, our ride‑request service was hitting 35 million read requests per second during peak hours, and the latency on the primary PostgreSQL store was ballooning to 120 ms. The engineering lead asked me to design a solution that could sustain >40 M reads/sec while keeping data fresh.

**Task:**  
I needed to architect an integrated cache layer that would sit between the application and our online storage (PostgreSQL + S3 for historic logs), delivering sub‑10 ms latency, high throughput, and eventual consistency for user profiles and driver availability.

**Action:**  
1. Deployed a sharded Redis cluster (12 nodes, 8 GB RAM each) as a read‑through cache, keyed by user_id:profile and driver_id:status.  
2. Implemented a write‑back strategy with a “cache stampede” guard using Lua scripts to prevent multiple clients from refreshing the same key simultaneously.  
3. Added a background “dirty‑log” queue (Kafka) that pushed updates to Redis, ensuring near real‑time consistency without hitting PostgreSQL on every read.  
4. Configured TTLs based on access patterns—hot keys lived 30 s, cold ones 5 min—to keep memory usage under control.  
5. Monitored hit rates with Prometheus; tuned eviction policies from LRU to LFU after observing a 98% hit ratio.

**Result:**  
The integrated cache lifted read throughput to 42 M reads/sec with average latency of 7 ms, while reducing PostgreSQL load by ~90%. I learned that balancing consistency and performance often means accepting eventual consistency for non‑critical data, and that careful TTL tuning can dramatically improve cache efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
