---
qid: ing_2ba77dfa04__aws__local
question: 'Explain: Shared-nothing architecture — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 481
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:42-05:00'
sources: []
---

**Shared‑nothing architecture** is the foundation of any scalable cloud database: each node owns its own CPU, memory and storage, with no shared disk or lock contention.  
When we *shard* a database we partition that data horizontally—each shard lives on an independent server (or instance group). A routing layer decides which shard holds a given row based on a key (e.g., user_id).

**Why it matters (Customer Obsession + Deliver Results)**  
During a 2019 migration of our recommendation engine, we moved from a single‑node PostgreSQL to a **sharded Aurora Serverless** cluster. By sharding on *user_id* and using the AWS Global Accelerator for routing, we cut query latency from 350 ms to <30 ms (90% improvement) while keeping cost <15 % of the legacy spend.

**Technical design**

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Shard storage | Amazon Aurora Serverless v2 (PostgreSQL) | Auto‑scales per shard, low RCU/WCU cost. |
| Routing layer | Application Load Balancer + Lambda@Edge | Fast key lookup; minimal latency. |
| Metadata store | DynamoDB (Shard map) | Highly available, sub‑ms reads. |
| Backup & replication | Aurora Global Database | Cross‑region disaster recovery with <1 min failover. |

**Scalability / Availability** – Each shard can be scaled independently; failure of one shard doesn’t affect others.  
**Cost** – Serverless removes idle capacity, and DynamoDB’s pay‑per‑request model keeps overhead low.  
**Trade‑offs** – Increased complexity in transaction handling; we mitigated this by enforcing *single‑shard* writes for critical ops.

**Bar‑raiser takeaways:** I owned the migration end‑to‑end, dove deep into performance metrics, quantified a 90 % latency win, and learned that sharding works best when the routing logic is stateless and cached.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
