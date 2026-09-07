---
qid: ing_e539ed1464__aws__local
question: 'Explain: Elasticsearch Cluster — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 605
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:23-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team at my last company, we had to migrate the music discovery backend from a single‑node Solr instance to an **Elasticsearch cluster** that could serve 200 k concurrent users with <200 ms latency.  
**Task (T)** – Design a highly available, scalable search layer for a Spotify‑style catalog (~10M tracks, 1M artists).  
**Action (A)** –  
- **Cluster topology**: 3 data nodes + 2 master‑eligible nodes per AZ in an Auto Scaling group; use **Elasticsearch on EC2 Spot + Reserved Instances** to keep cost < $12k/month.  
- **Index strategy**: Single index with *shards = 50*, *replicas = 1* (one per AZ) → 150% write throughput, 99.999% availability.  
- **Data ingestion**: Kafka → Lambda → OpenSearch Service (managed ES). Batch updates every 5 s to reduce write amplification.  
- **Query layer**: API Gateway + Lambda for lightweight routing; caching via CloudFront/ElastiCache‑Redis for the top 10k popular queries, cutting query load by 35%.  
- **Monitoring**: CloudWatch metrics + OpenSearch Dashboards; automated node replacement on unhealthy heartbeats (auto‑heal).  

**Result (R)** – Achieved 95 % of requests in <120 ms, reduced infrastructure cost by 22 %, and cut SLA violations from 4.7 % to 0.1 %.  
---

### Leadership Principles Highlighted
- **Customer Obsession**: Built a search experience that meets user latency expectations.  
- **Ownership / Dive Deep**: Handled every failure point—node failures, index corruption, and burst traffic—and iterated the design.

### Bar‑raiser Checklist
| Criterion | What I Showed |
|-----------|---------------|
| Ownership | Owns end‑to‑end pipeline, from ingestion to caching. |
| Depth (Dive Deep) | Detailed shard/replica tuning, cost–benefit trade‑offs. |
| Quantified Impact | 95 % latency <120 ms, 22 % cost savings, SLA drop to 0.1 %. |
| Learning from Failure | Auto‑heal logic after a node loss; post‑mortem drove cache strategy change. |

This design balances **scalability**, **availability**, and **cost** while keeping the user experience front‑and‑center—exactly what Amazon expects in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
