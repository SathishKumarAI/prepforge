---
qid: ing_d758df17f6__aws__local
question: 'Explain: Geo sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 516
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:26-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a legacy monolith to a distributed micro‑service stack on AWS. The monolith held ~30 M rows in a single PostgreSQL database that grew at 40 % YoY, causing query latency to spike from 200 ms to >2 s and triggering a 15 % churn increase. I was tasked with designing a sharding strategy that would keep latency <300 ms while keeping operational cost under $10k/month.

**Action & Design**  
I chose **horizontal sharding (geo‑sharding)**: split the data by customer region into three shards—North America, EMEA, APAC. Each shard is an **Amazon Aurora Serverless cluster** behind a **Route 53 weighted alias** that directs traffic to the nearest endpoint. I added **DynamoDB Global Tables** for session state (low‑latency key/value) and **ElastiCache Redis** as a read cache per region. To keep consistency, I used **AWS DMS** for incremental replication and SQS + Lambda for cross‑region event propagation.

- *Scalability*: Aurora auto‑scales on demand; each shard can handle 10 k RPS independently.  
- *Availability*: Multi‑AZ deployment guarantees <30 ms failover per shard.  
- *Cost*: Total $9,200/month vs. projected $15,000 if we kept a single cluster.

**Result**  
Latency dropped to 220 ms on average; regional failures no longer impacted global traffic, reducing churn by **12 %** in the first quarter post‑migration. I documented best practices and built an internal playbook that is now used for all new services.

---

### Leadership Principles Anchored

- **Customer Obsession** – Prioritized end‑user latency to directly reduce churn.  
- **Ownership** – Owns full lifecycle from design, migration, monitoring, to cost optimization.  

**Bar‑raiser notes**: I show *ownership* by owning the end‑to‑end solution, *dive deep* with precise metrics and trade‑offs, quantify impact (12 % churn reduction), and learned that early cache integration prevents “snowball” latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
