---
qid: ing_80fdad8565__aws__local
question: 'Explain: Text Search Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 586
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:43-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** A client needed an internal search layer for 50 M customer support tickets that had to return results in <100 ms while supporting full‑text, faceted filters, and near‑real‑time updates.  
> **Task:** Design a system that balances query speed, write throughput, and cost, then migrate from the legacy relational DB.

**Design & Trade‑offs**

| Database | When to Use | AWS Service | Key Metrics |
|----------|-------------|------------|--------------|
| **OpenSearch (Elasticsearch)** | Full‑text + faceted search; near‑real‑time indexing | `Amazon OpenSearch Service` | 99.9 % availability, <100 ms latency |
| **RDS PostgreSQL with pg_trgm** | Moderate full‑text needs, transactional consistency | `Amazon RDS` | Query latency 200–400 ms, up to 10k QPS |
| **DynamoDB + DynamoDB Streams + Lambda** | Key‑value lookup + incremental search via GSI | `DynamoDB`, `Lambda` | 20 µs read latency, auto‑scaling writes |
| **Aurora Serverless v2** | Variable load, cost‑efficient bursty traffic | `Amazon Aurora Serverless v2` | Auto‑scale to 10k RPS within seconds |
| **Graph DB (Neptune)** | Relationship search across tickets & users | `Amazon Neptune` | 30 ms for graph traversal |

**Implementation**

1. **Ingest pipeline:** Use Kinesis Data Streams → Lambda → OpenSearch for full‑text, and DynamoDB for fast lookup.
2. **Caching layer:** ElastiCache Redis (TTL 5 min) to hit hot queries first.
3. **Cost control:** Spot instances for OpenSearch nodes; Aurora Serverless for low‑traffic periods.

**Result**

- Query latency dropped from 800 ms to <80 ms (10× improvement).  
- Cost reduced by 35% YoY by shifting to serverless & spot.  
- 99.95 % uptime over 12 months, meeting SLA.

**Learnings**

- *Dive Deep*: Profiling showed that 70 % of traffic hit a small set of terms; caching those saved 60 % of reads.  
- *Bar‑raiser focus*: I documented failure scenarios (index lag >5 s) and automated alerts via CloudWatch, ensuring proactive remediation.

*Key takeaway:* Choose the database type by the dominant workload—search vs. transactional vs. graph—and combine AWS managed services for scalability, availability, and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
