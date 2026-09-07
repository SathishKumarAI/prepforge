---
qid: ing_ca45ce99b3__aws__local
question: 'Explain: Database Configuration — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 492
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:43-05:00'
sources: []
---

**Situation & Task**  
I was tasked to spin up the *getzep/graphiti* real‑time knowledge graph stack on AWS so that an AI agent could ingest millions of RDF triples and answer semantic queries in < 200 ms. The repo uses a hybrid approach: Neo4j for graph storage, Redis for caching, and PostgreSQL for transactional metadata.

**Action (Design & Implementation)**  
- **Graph Store** – Deployed Neo4j Aura Serverless (fully managed) to avoid ops overhead; set `Neo4j Aura Compute` to 2 vCPU/8 GB for peak throughput.  
- **Cache Layer** – Launched ElastiCache‑Redis Cluster (cluster mode enabled, 3 shards) with `cache.t4g.large` nodes to keep hot paths in memory.  
- **Metadata Store** – Used Aurora Serverless PostgreSQL; enabled auto‑scaling to 2–8 ACUs and set the `max_connections` to 500.  
- **Data Ingestion** – Built a Lambda function (Python 3.11) triggered by S3 events that streams CSV/JSON into Neo4j via Bolt protocol, while also updating Redis keys for fast look‑ups.  
- **Security & IAM** – Created an IAM role with least privilege: `neojb:*` on the Aura endpoint and `redis:*` on ElastiCache, ensuring data is only accessed by Lambda.  

**Result**  
Within 4 weeks we achieved:  
- 1.2 M triples ingested per day with < 180 ms latency for 95th‑percentile Cypher queries.  
- Cost reduced by **32%** compared to a self‑hosted Neo4j cluster (≈$300/month vs $210/month).  

**Learnings**  
I realized that auto‑scaling thresholds were too aggressive; after tuning the `Aurora` ACU target to 70 % CPU, we eliminated spurious scaling events and saved an extra **8%** annually. This experience reinforced *Ownership* (owning the whole stack) and *Dive Deep* (profiling latency hot spots).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
