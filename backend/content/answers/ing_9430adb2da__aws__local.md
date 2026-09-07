---
qid: ing_9430adb2da__aws__local
question: 'Explain: Main Terms - SQL vs DynamoDB vs Document-DB vs Search-Index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 521
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:10-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our recommendation engine from a legacy MySQL cluster to an AWS‑native stack that could scale with traffic spikes while keeping costs predictable.

**Action – Technical Design & Choice Rationale**  

| Use case | Preferred store | Why it fits |
|----------|-----------------|------------|
| **Structured relational data (user profiles, click logs)** | *Amazon RDS / Aurora MySQL* | ACID guarantees; mature SQL tooling; easy schema evolution. |
| **High‑throughput key/value lookups (cache, session state)** | *Amazon DynamoDB* | 10⁶ RCU/WCU per second, single‑digit ms latency, automatic sharding, pay‑per‑request pricing. |
| **Flexible document data (product catalog, nested attributes)** | *Amazon DocumentDB (MongoDB‑compatible)* | Rich JSON support, existing driver stack; strong consistency with multi‑AZ replication. |
| **Full‑text search & faceted filtering** | *Amazon OpenSearch Service* | Near‑real‑time indexing, powerful query DSL, built‑in Kibana dashboards for monitoring. |

- **Scalability**: DynamoDB’s auto‑scaling and DocumentDB’s sharding keep throughput elastic.  
- **Availability**: All services are multi‑AZ with automatic failover; OpenSearch adds cross‑region replication.  
- **Cost trade‑offs**: Use Provisioned Capacity for predictable workloads, On‑Demand for bursty traffic. DocumentDB costs more per GB but saves on developer time.

**Result (Quantified Impact)**  
After migration, read latency dropped 70 % (from 200 ms to 60 ms), write throughput increased by 5× during flash sales, and monthly spend fell from $12k to $8.4k due to serverless billing.

**Reflection – Learning & Bar‑raiser Signals**  

- **Ownership**: I championed the shift, owning the risk assessment and stakeholder communication.  
- **Dive Deep**: Benchmarked each service under simulated traffic; identified that DynamoDB’s throttling patterns were a hidden cost driver.  
- **Bias for Action**: Implemented pilot in 3 weeks, iterated on capacity settings within days.  
- **Deliver Results**: Achieved SLA compliance and cost savings while maintaining data integrity.  

This showcases how I align architecture choices with Amazon’s Leadership Principles to deliver tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
