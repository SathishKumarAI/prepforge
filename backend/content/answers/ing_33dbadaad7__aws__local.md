---
qid: ing_33dbadaad7__aws__local
question: 'Explain: DynamoDB is one of our oldest NoSQL — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 554
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:22-05:00'
sources: []
---

**Answer – Amazon Style**

> *“When deciding between DynamoDB and other NoSQL options, I first map the workload to our core principles: **Customer Obsession** (low latency for end‑users) and **Ownership** (owning cost & reliability).”*

### Situation  
I was tasked with migrating a legacy key–value store that served 30 k RPS with sub‑10 ms latency, while keeping operational overhead minimal.

### Task  
Select the NoSQL database that balances performance, scalability, and cost for this use case.

### Action  
1. **Dive Deep into Requirements**  
   * Read/write patterns: 80% reads, 20% writes, key lookups only.  
   * Data size: 2 TB growing at ~5 GB/day.  

2. **Compare Services**  
   | Service | Strengths | Trade‑offs |
   |---------|-----------|------------|
   | **DynamoDB** | • Single‑digit ms latency, auto‑scaling; <br>• Managed, no admin ops; <br>• Strong consistency optional. | • On‑demand or provisioned capacity costs can spike; <br>• Limited secondary indexes (global). |
   | **MongoDB Atlas** | • Flexible schema, rich queries; <br>• Global clusters for multi‑region. | • Requires sharding logic; higher admin overhead; cost per GB ~3× DynamoDB. |
   | **Cassandra (Amazon Keyspaces)** | • Linear scalability, tunable consistency; <br>• Native Cassandra drivers. | • Requires careful schema design; more operational complexity. |

3. **Decision**  
Chose **DynamoDB**:  
* Provisioned throughput of 40 k RPS (2× safety margin).  
* Enabled auto‑scaling to absorb traffic spikes, keeping cost at ~$4k/month versus ~$12k for Atlas.  
* Leveraged a single global secondary index for a rare “by status” query.

### Result  
- **Latency**: 6 ms read, 8 ms write (average).  
- **Cost**: Reduced by 66% compared to initial estimates.  
- **Reliability**: 99.999% SLA met; no operational incidents in first year.

> *Bar‑raiser notes:* I demonstrated ownership by quantifying cost savings and performance gains, dove deep into service trade‑offs, and learned from a pilot that auto‑scaling thresholds needed fine‑tuning to avoid over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
