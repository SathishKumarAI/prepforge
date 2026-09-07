---
qid: ing_1b97f91b3e__aws__local
question: 'Explain: For wide column, we offer Amazon Keyspaces'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 519
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:30-05:00'
sources: []
---

**Situation (S)**  
While leading a new recommendation engine at my previous firm, we had to store user‑profile data that grew to **hundreds of GB per table** with highly sparse columns—think “favorite movies,” “watched episodes,” or “purchase history.” Traditional relational DBs throttled under this wide‑column pattern.

**Task (T)**  
Architect a scalable, cost‑effective solution that could ingest ~10 k writes/sec and support real‑time reads for 1 M active users, while keeping latency <200 ms and staying within the $0.20/GB/month budget.

**Action (A)**  
I chose **Amazon Keyspaces (for Apache Cassandra)** because it natively handles wide columns with low‑latency writes/reads, horizontal scalability, and built‑in replication across AZs. I:

1. Modeled each user as a row key; dynamic columns represented preferences.
2. Used *CQL* to create a **compound partition key** (user_id) + clustering columns (timestamp) for time‑series reads.
3. Enabled **auto‑scaling capacity** and set **read/write consistency** to QUORUM for data accuracy during spikes.
4. Integrated with **Amazon Kinesis Data Streams** for real‑time ingestion, and **AWS Lambda** for batch transformations.
5. Leveraged **Amazon CloudWatch** metrics + **X-Ray** to monitor latency; we hit <150 ms avg read latency at peak load.

**Result (R)**  
Within 3 months, the system handled 15 k writes/sec with a 99.9% success rate, and cost dropped from $12K/month (RDS) to $4.8K/month—**a 60% savings**—while delivering real‑time personalization for every active user.

---

### Leadership Principles Highlighted  
- **Customer Obsession**: Delivered instant recommendations that improved engagement by 23%.  
- **Ownership & Dive Deep**: Took full responsibility for the data layer, iterating on schema and scaling policies until performance met SLAs.  

*Bar‑raiser cue*: I quantified every trade‑off (latency vs. cost), demonstrated end‑to‑end ownership, and documented lessons from a failed capacity spike that taught us to enable auto‑scaling earlier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
