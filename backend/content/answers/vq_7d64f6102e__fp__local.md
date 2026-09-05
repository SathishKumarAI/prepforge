---
qid: vq_7d64f6102e__fp__local
question: What are the types of metastore available in Hive ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 472
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:43:01-05:00'
sources: []
---

In Hive the *metastore* is the catalog that turns a declarative query into physical operations.  
It must expose two properties:

1. **Durability** – schema definitions and table statistics survive node failures.  
2. **Scalability** – many concurrent sessions can read/write metadata without contention.

Because of this, Hive ships with three flavors that map to different trade‑offs between these properties.

| Flavor | Implementation | Typical use |
|--------|----------------|-------------|
| **Embedded Derby** | Local HSQLDB bundled with the Hive client | Development, single‑node demos.  No external DB, but cannot be shared across workers. |
| **Remote JDBC (MySQL/PostgreSQL/Oracle, etc.)** | Stand‑alone service accessed via JDBC | Production clusters that need a central, fault‑tolerant catalog.  Allows multiple HiveServer2 instances to share the same metadata. |
| **Hive Metastore Service (Thrift)** | Dedicated Thrift server exposing the metastore API | Large‑scale deployments where many clients (Hive, Spark, Presto) require low‑latency metadata lookups; the service can be replicated and load‑balanced. |

**Why this separation?**  
The embedded store satisfies *local* consistency but fails to provide a single source of truth across a cluster—essential for distributed query planning. The remote JDBC approach centralizes state, ensuring all nodes see the same schema even after restarts. Exposing it as a Thrift service further decouples clients from the underlying DB and enables horizontal scaling of the metadata layer.

**Non‑obvious insight:**  
The choice of metastore also dictates how *partition pruning* works. With an embedded store, partition metadata is cached per JVM; with a remote store, the caching strategy must be tuned (e.g., `hive.metastore.cache.ttl`) to avoid stale data when partitions are added by external jobs—an optimization often overlooked but critical for correct query results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
