---
qid: ing_b917718791__aws__local
question: 'Explain: Cache in Distributed Systems — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 741
total_tokens: 976
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:28-05:00'
sources: []
---

**What is caching in a distributed system?**  
Caching is the practice of storing a copy of frequently‑accessed data in memory (or other fast storage) closer to the consumer so that subsequent reads bypass expensive back‑end operations. It reduces latency, cuts database load, and improves overall throughput.

---

## Behavioral (STAR)

- **Situation:** In 2023 I led the redesign of our recommendation engine for a global e‑commerce platform that served ~1 M requests/sec.  
- **Task:** Reduce read latency from 120 ms to <30 ms while keeping data freshness within 5 s.  
- **Action:** Implemented a multi‑layer cache:  
  - *Edge* – Amazon CloudFront + Lambda@Edge for static assets.  
  - *Regional* – Amazon ElastiCache Redis (cluster mode) with read replicas across AZs.  
  - *Application* – Local in‑process LRU caches keyed by user ID.  
  I used **Redis key TTL** of 5 s and a **write‑through policy** that updated the DB asynchronously.  
- **Result:** Latency dropped to 22 ms (≈80 % improvement). Throughput increased from 1 M/s to 1.4 M/s, saving ~40 % in RDS read capacity units and cutting operational cost by $12K/month.

---

## Technical/System Design

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Edge** | CloudFront + Lambda@Edge | Global low‑latency cache; first hop. |
| **Regional** | ElastiCache Redis (cluster mode) | In‑memory, sub‑millisecond access; auto‑sharding for scalability. |
| **Application** | Local LRU cache | Zero network hop for hot data; fallback if Redis misses. |

### Key Design Choices

- **Write‑Through vs. Write‑Back:** We chose write‑through to guarantee eventual consistency and simplify rollback on failures.  
- **Eviction Policy:** Redis `volatile-ttl` keeps only time‑bound keys, preventing stale data accumulation.  
- **Multi‑AZ Replication:** Ensures high availability; read replicas handle failover with minimal latency shift (<5 ms).  
- **Cost Trade‑off:** Using a single Redis node for dev (free tier) and scaling to 3 nodes in prod balances cost vs. SLA.

### Scalability & Availability

- Horizontal scale by adding shards; Auto Scaling groups can spin up new nodes based on CPU/memory thresholds.  
- Multi‑AZ replication + CloudFront edge caching guarantees <99.999% availability.

---

## Bar‑Raiser Focus

| What they listen for | Why |
|----------------------|-----|
| **Ownership** – Took end‑to‑end responsibility, from metrics to deployment. | Demonstrates initiative. |
| **Dive Deep** – Quantified latency & cost reductions; analyzed Redis eviction and replication impacts. | Shows technical depth. |
| **Quantified Impact** – 80 % latency drop, 40 % cost savings. | Clear business value. |
| **Learning from Failure** – After a cache miss spike we added a fallback to DynamoDB, reducing error rates by 95%. | Continuous improvement mindset. |

---

> *“In distributed systems, caching isn’t just about speed; it’s a strategic lever that balances consistency, cost, and resilience.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
