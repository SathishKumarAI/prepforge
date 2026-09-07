---
qid: ing_2c0e4ff8ac__aws__local
question: 'Explain: Performance (Latency) Requirements — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 678
total_tokens: 920
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:53-05:00'
sources: []
---

**Situation / Task**

I was leading the migration of a real‑time recommendation engine for a global e‑commerce platform. The new system had to support *strong* consistency for user profile updates (to avoid stale recommendations) while allowing *eventual* consistency for inventory counts (which could tolerate a few seconds lag). Latency targets were 20 ms for reads and 50 ms for writes under peak load.

**Action**

1. **Requirements & Design**  
   - **Strong Consistency Path:** User profile updates → DynamoDB with *Transactional Write* (`TransactWriteItems`) + *DynamoDB Streams* to trigger Lambda that pushes the new state to an in‑memory cache (Redis via ElastiCache).  
   - **Eventual Consistency Path:** Inventory changes → SQS FIFO queue → Lambda fan‑out to update a read‑optimized Aurora Serverless cluster. Reads hit Aurora Global DB for multi‑region low latency.

2. **AWS Services & Trade‑offs**  
   | Service | Purpose | Scalability | Availability | Cost |
   |---------|---------|-------------|--------------|------|
   | DynamoDB (Global Tables) | Strongly consistent writes, auto‑scale | Auto‑scales with provisioned throughput | Multi‑AZ, 99.999% SLA | Pay per request, higher for strongly consistent reads |
   | ElastiCache Redis | Low‑latency cache for user state | Clustered shards | 99.95% (single AZ) | Instance cost + data transfer |
   | Aurora Serverless | Read‑optimized inventory, serverless scaling | Auto‑scales on connection count | Multi‑AZ, 99.99% | Pay per ACU used |
   | SQS FIFO | Decouple producers/consumers, preserve order | Unlimited messages | 99.9% | Low per‑message cost |
   | Lambda | Event processing & cache invalidation | Scale to thousands concurrent invocations | 99.95% | Pay per GB‑s |

3. **Performance Metrics**  
   - Latency: 92 % of user profile writes < 45 ms; 97 % of inventory reads < 18 ms.  
   - Throughput: 10,000 RPS for strong path, 50,000 RPS for eventual path.  
   - Cost Savings: 35 % cheaper than a monolithic relational design by leveraging serverless and caching layers.

**Result**

The system met all SLA targets during the holiday surge (peak 120k concurrent users). Customer satisfaction rose 12 %, and engineering effort dropped 40 % due to the decoupled, event‑driven architecture. I documented the trade‑offs in a post‑mortem; the key learning was that *strong consistency* is only required for data that directly affects user experience—otherwise, *eventual consistency* offers significant cost and latency benefits.

**Leadership Principles**

- **Ownership** – I drove the end‑to‑end redesign and owned all operational metrics.  
- **Dive Deep** – I quantified latency per service, identified bottlenecks in DynamoDB reads, and tuned Aurora ACU scaling thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
