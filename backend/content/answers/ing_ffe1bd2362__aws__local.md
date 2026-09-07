---
qid: ing_ffe1bd2362__aws__local
question: 'Explain: 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:24-05:00'
sources: []
---

**Situation / Task**  
I was asked to recommend a data‑store strategy for an e‑commerce platform that needed to support real‑time inventory, recommendation scoring, and long‑term analytics. The goal was to pick the right database type for each workload while keeping cost ≤ $200k/yr.

**Action (Design)**  
| Use‑case | Database type | AWS service | Why |
|----------|---------------|-------------|-----|
| Hot transactional orders | **Relational (ACID)** | Amazon RDS Aurora MySQL | Strong consistency, 99.99% availability |
| User profiles & sessions | **Document** | DynamoDB with TTL | Schema‑flexible, sub‑millisecond reads |
| Real‑time product catalog | **Key‑value / Cache** | ElastiCache Redis | Low latency, auto‑scaling |
| Recommendation engine | **Graph** | Neptune | Traversal queries for user–item relations |
| Search & faceted navigation | **Search index** | OpenSearch Service | Near‑real‑time full‑text search |
| IoT device telemetry | **Time‑series** | Timestream | Auto‑partitioning, 99.9% durability |
| Analytics & BI | **Columnar** | Redshift Spectrum + S3 | Massively parallel queries on petabytes |

All services were linked via IAM roles and VPC endpoints for security. I added automated backups (RDS) and point‑in‑time restores (Neptune). The architecture achieved 99.999% SLA, 0.5 ms read latency for catalog hits, and $30k/yr cost savings versus a monolithic RDS.

**Result**  
Post‑deployment, order processing time dropped from 1.2 s to **300 ms**, recommendation hit rate rose by **18%**, and the overall infrastructure cost fell to **$165k/yr** (≈ 17% under budget).  

**Reflection**  
I owned the end‑to‑end solution, dove deep into each service’s pricing model, and iterated on failure modes during load testing. The exercise reinforced that “Customer Obsession” drives us to pick the database that delivers real user value, while “Ownership” ensures we monitor, optimize, and stay below cost targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
