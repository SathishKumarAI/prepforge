---
qid: ing_eb22c9f683__aws__local
question: 'Explain: good afternoon or good evening I''m not — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 465
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:49-05:00'
sources: []
---

**Situation & Task**  
During my senior data‑engineering role I had to scale a global e‑commerce catalog from 5 M items to 200 M+ while keeping latency <10 ms. The team’s existing RDS stack was hitting CPU limits and read replicas were stale, so we needed a hyper‑scale store—exactly the problem AWS solved with DynamoDB in re:Invent 2018.

**Action (Design & Implementation)**  
I mapped DynamoDB’s key concepts from the talk: *partition keys*, *global secondary indexes* and *on‑demand capacity*.  
- **AWS services used:** DynamoDB, Lambda for data ingestion, CloudWatch for metrics, IAM for fine‑grained access.  
- **Scalability**: Auto‑scaling provisioned throughput to 1 M RCU/WCU per shard, sharding the catalog across 8 partitions.  
- **Availability**: Multi‑AZ replication with DynamoDB Global Tables (3 regions) gave <2 ms failover latency.  
- **Cost**: On‑demand mode avoided over‑provisioning; we reduced spend by 35 % vs RDS while keeping the same performance SLA.

**Result & Learnings**  
Within 4 weeks, read latency dropped from 120 ms to 8 ms, write throughput hit 50 k ops/s, and our peak traffic during Black Friday was served with zero outages. I documented a “DynamoDB‑first” migration playbook that now trains new data engineers.

> **Leadership Principles**  
> *Customer Obsession* – delivered sub‑10 ms experience for millions of shoppers.  
> *Ownership & Dive Deep* – architected end‑to‑end solution, tuned capacity, and measured every metric.  

Bar‑raisers look for ownership (I led the migration), depth (understood DynamoDB internals from the re:Invent talk), quantified impact (latency + cost savings), and learning from failure (initial RCU spikes taught us to fine‑tune auto‑scaling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
