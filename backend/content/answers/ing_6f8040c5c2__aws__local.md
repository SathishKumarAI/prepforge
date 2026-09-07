---
qid: ing_6f8040c5c2__aws__local
question: 'Explain: Non-Functional Requirements — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 501
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:12-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a real‑time ad‑impression counter that had to support 10 M increments per second while guaranteeing *exact* counts across a global user base. The system had to be highly available, cost‑effective, and easy to maintain.

**Action (Design)**  
I proposed a **distributed counter architecture** using:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| In‑memory cache + local aggregation | **Amazon ElastiCache for Redis** (partitioned shards) | Low latency writes; in‑process batching reduces network calls. |
| Persistent state & durability | **Amazon DynamoDB Streams** → **AWS Lambda** → **S3/Glacier** | Guarantees eventual consistency and provides an immutable audit trail. |
| Global sync & fault tolerance | **DynamoDB Global Tables** + **SNS** notifications | Ensures all regions see the same counter value; SNS alerts on replication lag. |
| Monitoring & auto‑scaling | **Amazon CloudWatch Alarms**, **AWS Auto Scaling** for ElastiCache | Keeps read/write throughput within SLA, scales with traffic spikes. |

The counters were stored as `hash` keys in Redis; each shard handled ~200 k ops/sec. Lambda functions processed stream records every 5 s, summing local increments and writing a single atomic update to DynamoDB (using `UpdateItem` with conditional writes). This reduced write amplification by **>90%** compared to naïve per‑increment writes.

**Result**  
- Achieved <1 ms latency for 99.9% of increment requests.  
- Cost dropped from $12k/month (naïve DynamoDB) to $3.5k/month.  
- Accuracy errors were <0.01% over a week of production traffic, meeting the *exactness* requirement.

**Reflection**  
I owned the project end‑to‑end, diving deep into Redis eviction policies and DynamoDB throughput limits. The biggest failure was an initial design that used SQS for batching; it caused burst latency spikes. After revisiting the data model (the “Dive Deep” principle), I switched to in‑memory aggregation and achieved the desired scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
