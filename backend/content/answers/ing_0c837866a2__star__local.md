---
qid: ing_0c837866a2__star__local
question: 'Explain: Read replicas — Caching strategies for Memcached - Amazon ElastiCache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 347
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:37-05:00'
sources: []
---

**Situation:**  
At my previous role we launched a real‑time recommendation engine that pulled user preference data from a MySQL master every time a page loaded. By the third month, our response times spiked to 1.2 s during peak traffic (8k requests/sec), and the database queue was back‑pressuring, threatening SLA breaches.

**Task:**  
I had to reduce latency for read‑heavy recommendation queries by at least 50% while keeping consistency within 200 ms, all without overhauling the existing application code or incurring massive infrastructure costs.

**Action:**  
1. Deployed a read‑replica cluster on Amazon RDS with a lag filter of <150 ms to serve most analytics reads.  
2. Introduced an ElastiCache Memcached layer in front of the replicas, configuring key expiration policies based on query frequency (short TTL for high‑cardinality user IDs).  
3. Implemented a cache‑aside pattern: application first checks Memcached; on miss it queries the replica and immediately populates the cache with a 5 min TTL.  
4. Added health checks that automatically evict stale entries if replica lag exceeded threshold, preventing dirty reads.

**Result:**  
Page load latency dropped from 1.2 s to 320 ms during peak, reducing database queue depth by 70%. Traffic handled increased by 30% without new EC2 instances. I learned how to blend read replicas with Memcached to achieve low‑latency, high‑throughput reads while maintaining data freshness within strict SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
