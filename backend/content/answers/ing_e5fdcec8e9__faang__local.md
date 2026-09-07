---
qid: ing_e5fdcec8e9__faang__local
question: 'Explain: Multi-tenant architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 462
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:32:58-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of how a multi‑tenant system can be built on MongoDB using *sharding*. I’ll assume: we have many tenants (e.g., SaaS customers), each tenant’s data must be isolated, and the workload scales horizontally.

**Approach**  
1. Partition data by *tenant ID* → shard key.  
2. Create a sharded cluster (config servers, mongos routers, shards).  
3. Store each tenant’s collections on a dedicated shard or split across shards based on size.  
4. Enforce isolation via role‑based access and document‑level checks.

**Depth**  
- **Shard Key Choice:** Use `{tenantId: 1}` (hashed if uniform distribution) to guarantee that all documents for one tenant live together, enabling efficient reads/writes and easier backups.  
- **Cluster Layout:** One or more shard nodes per region; each shard is a replica set for HA.  
- **Routing:** `mongos` handles query routing; the client never touches shards directly.  
- **Security & Compliance:** Apply *MongoDB Atlas*’s tenant‑level IAM roles, encrypt at rest, and use TLS.  
- **Performance:** Reads hit a single shard per tenant → O(1) latency. Writes are also localized, reducing cross‑shard network traffic.  
- **Maintenance:** Auto‑split/merge of chunks keeps shards balanced; backups can be taken per shard or per tenant.

**Edge Cases**  
- *Hot tenants* may overload one shard; mitigate with *chunk size tuning* or moving to a dedicated shard.  
- *Uneven tenant sizes* cause imbalance—use `hashed` shard key or manual balancing.  
- *Schema evolution* across tenants must be handled via dynamic collections or versioned documents.

**Optimize & Communicate**  
Explain that sharding by tenant ID gives linear scalability, strong isolation, and simplifies compliance. Mention trade‑offs: complexity of cluster management vs. performance gains. Conclude with a brief note on monitoring (metrics, alerts) to detect shard imbalance early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
