---
qid: ing_deef94ac33__aws__local
question: 'Explain: Genomics & Research — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 409
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:43-05:00'
sources: []
---

**Situation / Task (Customer Obsession, Ownership)**  
At my previous role I was asked to build a real‑time genomic variant lookup service for a pharma partner. The dataset had ~30 M samples and required sub‑second queries across 10 k genes while staying within a $3K/month budget.

**Action (Dive Deep, Invent & Simplify, Bias for Action)**  
I chose **Apache HBase** on an **Amazon EMR** cluster because it gives linear scalability and strong consistency—critical for clinical data.  
*Schema:* One table per chromosome; row key = `{sample_id}:{gene}`; columns store variant type, allele frequency, and evidence score.  
*Indexing:* I added a secondary Bloom filter column family to avoid full scans on rare queries.  
*Scaling strategy:* Spot instances for read replicas (10× cheaper), auto‑scaling based on CloudWatch CPU/latency metrics.  
*Cost control:* Employed HBase’s compaction policies and TTLs (30 days) to keep storage lean, resulting in a 40 % cost reduction vs. S3+Athena.

**Result (Deliver Results)**  
Query latency dropped from 2.5 s to **<300 ms** for 95 % of requests; the partner’s research turnaround time shortened by **35 %**, translating into $1.2M annual savings.  

**Bar‑raiser takeaways**  
*Ownership*: I led end‑to‑end design and migration.  
*dive deep*: Tuned HBase region splits, compression, and Bloom filter thresholds based on profiling data.  
*Quantified impact*: 300 ms latency & $1.2M savings.  
*Learning from failure*: Initial design used a single master; after a node outage I migrated to the HA architecture, preventing future downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
