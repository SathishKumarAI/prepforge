---
qid: ing_5c62839759__aws__local
question: 'Explain: Personalization at Spotify using Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 645
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:04-05:00'
sources: []
---

**Situation (S)**  
I led the data‑engineering team that built a real‑time recommendation engine for a music streaming service similar to Spotify. The goal was to personalize playlists at scale for 50 M daily active users while keeping latency under 200 ms and cost < $2 M/month.

**Task (T)**  
Design a highly available, low‑latency storage layer that could ingest millions of user‑interaction events per day, support flexible schema for new recommendation features, and allow fast aggregation queries for personalized content.

**Action (A)**  

| Step | Technical Design | AWS Services | Why |
|------|------------------|--------------|-----|
| 1. Data ingestion | Kafka → Spark Structured Streaming → Cassandra batch write | **Amazon MSK**, **EMR** | Decouples producers, guarantees at‑least‑once delivery. |
| 2. Schema & indexing | Primary key: `(user_id, item_id)`, clustering on `event_type` + timestamp; materialized view for top‑n per user | **Apache Cassandra** (self‑managed on EC2 or **Amazon Keyspaces**) | Wide‑row design supports high write throughput and fast point lookups. |
| 3. Aggregation & caching | Periodic Spark job writes `user_profile_summary` to DynamoDB; in‑memory cache (Redis) for hot users | **EMR**, **DynamoDB**, **ElastiCache** | Keeps read latency < 20 ms for the most active 10 % of users. |
| 4. Monitoring & autoscaling | Prometheus + Grafana dashboards, CloudWatch alarms; Auto Scaling groups for Cassandra nodes | **Amazon Managed Service for Prometheus**, **CloudWatch** | Detects hot spots and scales out to maintain SLA. |

**Result (R)**  
- Reduced recommendation latency from 500 ms to 120 ms (30% improvement).  
- Supported 1 B writes/day with < 5 % error rate.  
- Cost stayed at $1.8 M/month, a 15% saving versus the legacy MySQL solution.

**Leadership Principles Highlighted**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the end‑to‑end pipeline, from ingestion to serving, and continuously refined it post‑deployment. |
| **Dive Deep** | Benchmarked Cassandra read/write patterns, tuned compaction strategy, and re‑architected the keyspace after noticing hot spots. |
| **Bias for Action** | Deployed a prototype in 3 weeks, learned from production failures (event duplication), and rolled out fixes within 48 h. |

**Bar‑raiser cues**

- Clear ownership of metrics & cost.  
- Deep dive into Cassandra internals (partition key design, compaction).  
- Quantified impact (latency, throughput, cost).  
- Transparent discussion of failure (duplicate events) and corrective action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
