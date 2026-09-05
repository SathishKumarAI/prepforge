---
qid: ing_590f3e1919__star__local
question: 'Explain: Redundancy & Replication — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 309
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:47-05:00'
sources: []
---

**Situation** – At a startup building a photo‑sharing app, we hit a spike of 50 M daily active users during a holiday sale. Our single‑region deployment was crashing under read traffic; a database outage killed the entire feed for half the user base.

**Task** – I had to design a highly available, low‑latency architecture that could handle sudden traffic surges and provide data durability without hurting performance.

**Action** – I introduced multi‑region replication: each region ran its own PostgreSQL cluster with asynchronous logical replication. For reads, we deployed a global CDN (Cloudflare) coupled with a read‑only replica pool behind a load balancer; writes went to the primary in the home region and were replayed to others via Kafka streams. To avoid single points of failure I added health checks and automated failover scripts that promoted replicas on heartbeat loss. We also sharded user data by hash to keep shards small, enabling faster replication lag.

**Result** – After rollout, read latency dropped from 350 ms to 80 ms under peak load, and uptime rose to 99.999%. During a subsequent outage we saw zero data loss and a swift failover in under 10 seconds. I learned that balancing synchronous vs asynchronous replication and using event streams for eventual consistency is key to scaling a photo platform without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
