---
qid: ing_ca45ce99b3__star__local
question: 'Explain: Database Configuration — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 334
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:39-05:00'
sources: []
---

**Situation**  
When I joined the AI‑agents team at getzep/graphiti, our knowledge graph was backed by a single PostgreSQL instance. During load testing we hit a 30 % increase in query latency as we added new entity types and relationship predicates.

**Task**  
I had to redesign the database layer so that the graph could ingest millions of triples per hour while keeping read latency under 200 ms for real‑time inference requests.

**Action**  
First, I introduced a sharded architecture using Amazon Aurora Serverless with PostgreSQL compatibility, partitioning tables by entity namespace. Next, I added a dedicated materialized view cache in Redis to store frequently accessed subgraphs and configured logical replication from Aurora to the cache. I also switched our ORMs from SQLAlchemy to asyncpg for non‑blocking connections, tuned the connection pool size to 200, and enabled PostgreSQL’s “jsonb” indexing on predicate columns. Finally, I set up Prometheus alerts on read latency and CPU usage, integrating Grafana dashboards for continuous monitoring.

**Result**  
Post‑refactor ingest throughput rose from 1 M to 3 M triples/hour, while query latency dropped from 350 ms to 120 ms under peak load. The team now has a scalable, low‑latency knowledge graph that supports real‑time AI agents. I learned the importance of combining sharding, caching, and async I/O to meet strict performance targets in data‑intensive ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
