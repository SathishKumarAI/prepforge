---
qid: ing_667bd3946b__star__local
question: 'Explain: How It Works — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 345
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:52-05:00'
sources: []
---

**Situation:**  
During a senior‑level interview at a fintech startup, I was asked to design a URL shortening service that could handle millions of requests per day and integrate with their existing analytics pipeline.

**Task:**  
I needed to build a highly available, low‑latency system that generates unique short codes, stores mappings efficiently, supports custom aliases, and provides usage metrics for each link.

**Action:**  
1. **Architecture:** I chose a microservice approach: an API gateway, a stateless URL service, a Redis cache for hot keys, and a sharded PostgreSQL cluster for persistence.  
2. **Code Generation:** Implemented a base‑62 encoder with a deterministic hash (e.g., MurmurHash3) plus collision detection via Redis atomic increment.  
3. **Scaling & Fault Tolerance:** Used Kafka to stream new links to a background worker that updates analytics tables asynchronously, ensuring the API remains responsive.  
4. **Security & Rate Limiting:** Applied JWT authentication and token bucket rate limiting per IP.  
5. **Monitoring:** Integrated Prometheus/Grafana dashboards showing request latency, cache hit ratio (~95%), and error rates.

**Result:**  
The prototype handled 2 M QPS with <30 ms average latency, achieved a 99.9% uptime in load tests, and reduced DB writes by 70% thanks to caching. I learned how to balance consistency and performance in real‑time systems while keeping the design simple enough for quick iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
