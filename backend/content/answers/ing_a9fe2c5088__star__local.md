---
qid: ing_a9fe2c5088__star__local
question: 'Explain: Avoid total service outage — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 325
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:33-05:00'
sources: []
---

**Situation:**  
During a product launch for our SaaS platform, we hit a critical bottleneck: the monolithic user‑profile table in PostgreSQL began locking up under 3 M concurrent sessions, causing a near‑full service outage on our billing API.

**Task:**  
I had to design and deploy a sharding strategy that would keep the system online, maintain data consistency for cross‑region users, and meet a 99.9% uptime SLA—all within two weeks before the next quarterly rollout.

**Action:**  
First, I mapped user traffic by region and hashed user IDs to create ten logical shards, each on its own RDS instance in separate Availability Zones. Using AWS Aurora’s Serverless mode, I configured automatic scaling per shard. I implemented a lightweight proxy layer (PgBouncer + custom routing logic) that directed queries to the correct shard based on hash. For cross‑shard reporting, I set up Amazon Redshift Spectrum to query aggregated data without impacting OLTP shards. Finally, I added automated failover scripts and continuous monitoring dashboards in CloudWatch.

**Result:**  
The sharded architecture reduced peak query latency from 1.8 s to under 200 ms and eliminated the outage risk; our billing API remained available during traffic spikes, achieving 99.95% uptime for the quarter. I learned that thoughtful shard key selection and transparent routing are critical to balancing performance with operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
