---
qid: ing_2944a50f70__aws__local
question: 'Explain: Joins and Transactions Across Shards — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 639
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:02-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to redesign the recommendation engine’s catalog service, which had grown to 2 B items spread across 12 shards. The new requirement was that user‑specific “watch later” lists (transactions) could reference any item across shards and we needed ACID guarantees for joins between the list and the catalog metadata.

**Action – Design**  
1. **Sharding Strategy** – Moved to a *hashed* shard key on `item_id` but added an *auxiliary lookup table* in DynamoDB (`ItemLookup`) that maps every `item_id` to its current shard. This gives O(1) resolution of the target shard.  
2. **Transactional Layer** – Employed AWS Aurora Serverless v2 for the catalog tables because it natively supports cross‑region ACID transactions and auto‑scales with workload spikes (up to 10 k QPS). Each “watch later” insert is wrapped in a single `BEGIN TRANSACTION … COMMIT` that reads from `ItemLookup`, fetches the item row, and writes into the user’s list.  
3. **Join Optimization** – The join is performed inside Aurora via a *materialized view* (`UserListWithMetadata`) refreshed every 5 min using an AWS Glue job. This keeps read latency < 30 ms for UI queries.  
4. **Cost & Availability Trade‑offs** – Aurora Serverless v2’s on‑demand capacity eliminates over‑provisioning; we pay only for the compute used (≈$0.08 per hour). The lookup table is single‑AZ DynamoDB with a 99.999% SLA, which satisfies our availability target while keeping costs <$10/month.

**Result**  
- Reduced average join latency from **1.2 s** to **28 ms** (95th percentile < 50 ms).  
- Transaction throughput increased by **4×** without any downtime.  
- Cost per transaction dropped from $0.12 to $0.04, saving ~$18k annually.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for the end‑to‑end redesign and drove it to production within 3 sprints.  
- **Dive Deep** – Built a micro‑benchmark suite that exposed the shard‑lookup bottleneck; iterated until we hit the latency target.  

---

### What a Bar‑Raiser Looks For
| Criterion | Why It Matters |
|-----------|----------------|
| Quantified impact (latency, cost) | Shows real business value |
| Depth of technical solution | Demonstrates mastery of AWS services |
| Ownership & end‑to‑end responsibility | Aligns with Amazon’s “Owner” mindset |
| Learning from failure | I initially tried a pure DynamoDB global secondary index; it failed under load. Pivoting to Aurora + lookup table was the key learning point. |

*This design balances scalability, availability, and cost while meeting strict ACID guarantees across shards.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
