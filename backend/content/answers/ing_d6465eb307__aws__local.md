---
qid: ing_d6465eb307__aws__local
question: 'Explain: Bonsai Blog | Fully Managed Elasticsearch & OpenSearch • Why Elasticsearch
  should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 407
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:46-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑engineering team for a SaaS startup, we migrated the legacy log store from on‑prem MySQL to **Amazon OpenSearch Service (OSS)** for full‑text search. The CTO asked me to evaluate if OSS could replace our primary relational store.

**Action**  
1. **Dive Deep into Requirements** – I mapped use cases: transactional reads/writes, ACID guarantees, and complex analytics.  
2. **Architectural Decision** – I proposed a hybrid pattern: RDS Aurora (PostgreSQL) for OLTP + OSS for search & analytics.  
3. **AWS Services Used** –  
   * **Amazon RDS Aurora** – high‑availability, read replicas, automated backups.  
   * **OpenSearch Service** – managed cluster with dedicated warm nodes and cross‑region snapshots.  
   * **Lambda + Kinesis Data Firehose** – real‑time sync from Aurora to OpenSearch (CDC).  
4. **Scalability & Cost** – Estimated 5 TB daily writes; OSS cluster at m5.large would cost ~$1,200/month vs $3,500 for a single‑node MySQL instance with equivalent IOPS.  
5. **Risk Mitigation** – Implemented automated failover tests and a rollback playbook.

**Result**  
- Search latency dropped from 350 ms to <50 ms (70% improvement).  
- Operational cost reduced by 60%.  
- No data loss in 12‑month audit; compliance met with S3 cross‑region backups.  

**Bar‑raiser Takeaway** – Ownership of the hybrid design, depth in trade‑offs, and quantified impact demonstrate that OSS is a *supplement*, not a replacement, for primary transactional storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
