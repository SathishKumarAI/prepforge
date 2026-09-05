---
qid: ing_2b14e10a5e__star__local
question: 'Explain: Latency — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:11-05:00'
sources: []
---

**Situation:**  
At my last role I led the redesign of a real‑time recommendation engine for an e‑commerce platform that was serving over 5 million active users. The existing system had a median end‑to‑end latency of 350 ms, causing the click‑through rate to drop by 12% during peak hours.

**Task:**  
I needed to cut the latency below 200 ms while keeping throughput above 10k requests per second and preserving data freshness within one minute.

**Action:**  
First I profiled the pipeline with Grafana and identified that serialization and database round‑trips were the biggest culprits. I switched from a monolithic Java service to a microservice architecture using gRPC, which reduced protocol overhead by 30 %. Next, I introduced an in‑memory cache (Redis) for the top 10k items per user, lowering database hits by 70%. To avoid stale data, I added a publish/subscribe mechanism that invalidated cache entries on write events. Finally, I leveraged async batch processing with Kafka to handle background updates without blocking request traffic.

**Result:**  
Latency dropped from 350 ms to 145 ms (a 58% improvement). The system now processes 12k requests per second and the recommendation accuracy improved by 4%, boosting revenue by an estimated $1.2M annually. I learned that a disciplined, end‑to‑end view of latency—profiling, protocol choice, caching strategy, and async decoupling—is essential for high‑performance real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
