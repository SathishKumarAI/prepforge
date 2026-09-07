---
qid: ing_95a06d68f2__aws__local
question: 'Explain: Inference service — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 439
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:06-05:00'
sources: []
---

**Situation – Task**  
I led a cross‑functional team that needed real‑time search and analytics for a global e‑commerce catalog (~200 M SKUs). The requirement was to provide sub‑100 ms query latency while ingesting 10k events/sec, all within a $5 k/month budget.  

**Action – Design & Execution**  
I chose **Amazon OpenSearch Service (managed Elasticsearch)** because it satisfies the “Dive Deep” principle—allowing us to fine‑tune shards, replicas, and index lifecycle policies. I designed:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Search engine | OpenSearch | Native scaling, auto‑sugest, full‑text search |
| Ingestion pipeline | Kinesis Data Streams → Lambda → OpenSearch Indexer | Serverless, cost‑effective, handles burst traffic |
| Monitoring | CloudWatch + OpenSearch Dashboards | Real‑time health metrics |
| Cost control | Auto‑scaling on CPU/heap usage | Keeps node count optimal |

We deployed **3 data nodes** (m5.large) with **2 warm nodes** (t3.medium). The index lifecycle policy moved 90 % of older documents to the warm tier, cutting storage costs by 45 %. Query latency dropped from 350 ms to **68 ms** average, and throughput increased to **12 k events/sec**.  

**Result – Impact**  
Within 3 months we achieved a **30 % lift in search conversion rate**, translating to an additional $1.2 M/month revenue. The solution stayed under the $5 k budget with a 20 % margin for future growth.  

**Reflection (Bar‑raiser)**  
I took full ownership, iterated on shard sizing after observing heap usage spikes, and documented failure modes in our run‑book—demonstrating “Ownership” and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
