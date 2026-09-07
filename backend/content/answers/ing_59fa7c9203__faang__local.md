---
qid: ing_59fa7c9203__faang__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 637
total_tokens: 906
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:47-05:00'
sources: []
---

**Clarify**

The question asks how we would scale a Paste‑Bin service after the basic system is built (users, pastes, storage).  
Assumptions:  

- Pastes are immutable blobs of text, short‑term read‑heavy traffic.  
- We expect millions of users, billions of pastes, and a 99.9 % uptime SLA.  
- The goal is to keep latency < 50 ms for reads and write throughput > 10k req/s.

**Approach**

1. **Horizontal scaling of stateless components** (web & API servers).  
2. **Distributed storage** that separates hot data from cold archives.  
3. **Caching** at multiple layers to reduce DB load.  
4. **Data partitioning & replication** for high availability and fast reads.

**Depth**

| Layer | Design | Rationale | Complexity |
|-------|--------|-----------|------------|
| Load Balancer | Round‑robin + health checks | Evenly distribute traffic, detect node failure | O(1) per request |
| Web/API Servers (stateless) | Docker/K8s pods | Scale up/down on demand | O(log N) for cluster management |
| Cache (Redis or Memcached) | LRU cache keyed by paste ID | 90–95 % hit rate for popular pastes | O(1) per lookup |
| Hot Storage (NoSQL, e.g., DynamoDB) | Partitioned by hash(paste_id), auto‑scaling | Low latency reads/writes, horizontal scaling | O(log N) for partitioning |
| Cold Archive (Object store, S3) | Lifecycle policy: after 30 days move to S3 Glacier | Cost savings for infrequently accessed data | O(1) per object |
| Search Index (Elasticsearch) | Indexed by tags/keywords | Enables full‑text search | O(log N) for query |

**Edge Cases**

- **Burst traffic**: Use auto‑scaling groups and rate limiting.  
- **Cache stampede**: Implement cache locking or “double check” pattern.  
- **Data consistency**: eventual consistency is acceptable; use read‑your‑writes by routing reads to the node that accepted the write for a short window.  
- **Security**: Rate limit per IP, enforce HTTPS, sanitize input.

**Optimize & Communicate**

1. **Performance tuning**: Monitor cache hit ratios; if < 80 % increase cache size or prepopulate hot pastes.  
2. **Cost control**: Shift more cold data to cheaper storage tiers; prune unused pastes after a retention period.  
3. **Observability**: Centralized logging, metrics (latency, error rates), alerting on SLA breaches.

By layering stateless services, distributed caching, and partitioned NoSQL storage with lifecycle policies for archival, the Paste‑Bin can scale horizontally to meet high traffic while keeping latency low and costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
