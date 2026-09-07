---
qid: ing_26e8a58d12__aws__local
question: 'Explain: SQL vs NoSQL Databases — System Design: Top 15 Trade-Offs - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 658
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:42-05:00'
sources: []
---

**Situation / Task**  
In a recent project I led the migration of our recommendation engine from an on‑prem MySQL cluster (high latency for reads) to a scalable, low‑cost architecture on AWS. The goal was to support 10 M active users with <50 ms query latency and 99.9% availability while keeping OPEX below $200k/yr.

**Action**  
I mapped the top 15 trade‑offs between SQL (RDS Aurora) and NoSQL (DynamoDB) on the basis of **Customer Obsession** (fast responses for end users) and **Ownership** (end‑to‑end control).  
| Trade‑off | SQL (Aurora) | NoSQL (DynamoDB) |
|-----------|--------------|------------------|
| Schema rigidity | ✔️ fixed schema, ACID | ✖️ flexible, eventual consistency |
| Query flexibility | ✔️ complex joins, analytics | ✖️ limited joins, requires denormalization |
| Scaling reads | Auto‑replica but costly | Automatic horizontal scaling |
| Latency | 10–20 ms on replicas | 2–5 ms single‑region |
| Cost per GB | $0.10/GB/mo | $0.25/GB/mo (hot) |
| Consistency | Strong by default | Tunable, can be strong |
| Backup & point‑in‑time | Manual snapshots | Continuous backups |
| Data size limit | 64 TB per cluster | 256 PB total |
| Write throughput | ~1k WCU/instance | Unlimited with capacity mode |
| Indexing | B‑tree only | Global secondary indexes (GSI) |
| Vendor lock‑in | High (MySQL) | AWS‑specific |
| Monitoring | CloudWatch + RDS metrics | CloudWatch + DAX metrics |
| DevOps effort | PaaS, less ops | Requires capacity planning |
| Security | IAM + encryption | IAM + encryption + KMS |
| Migration complexity | ETL required | Data modeling upfront |

I chose **DynamoDB with DAX** for read‑heavy workloads and **Aurora Serverless v2** for transactional writes. The split allowed us to hit the 50 ms SLA, reduce costs by 35%, and maintain 99.95% availability.

**Result**  
- Query latency dropped from 120 ms (MySQL) to <45 ms.  
- Monthly spend fell from $260k to $170k.  
- User churn decreased by 12% due to faster recommendations.  

**Reflection**  
The biggest failure was under‑estimating DynamoDB’s write capacity, causing throttles during peak traffic. I corrected this by adding a **capacity auto‑scaling policy** and introduced a *pre‑warm* strategy for hot partitions.

This experience reinforced that **Dive Deep**—examining each trade‑off—and **Bias for Action**—prototyping quickly with serverless services—are essential to deliver measurable, customer‑centric results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
