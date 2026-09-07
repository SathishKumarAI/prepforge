---
qid: ing_3a71f70fd2__aws__local
question: 'Explain: Title: Zep: A Temporal Knowledge Graph Architecture for Agent
  Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 435
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:40-05:00'
sources: []
---

**Situation & Task**  
I was hired as a senior ML architect at a fintech startup that needed to build an *Agent Memory* system for a conversational AI. The goal: store, retrieve and reason over billions of user interactions in real time while keeping latency < 200 ms.

**Action (Design)**  
I designed **Zep**, a Temporal Knowledge Graph (KG) that stores facts as triples with timestamps.  
1. **Ingestion Layer** – Amazon Kinesis Data Streams pushes events to Lambda, which normalizes data and writes to Amazon Neptune (graph DB).  
2. **Temporal Indexing** – Each triple gets a `valid_from`/`valid_to` pair; we use Neptune’s *time‑travel* feature plus DynamoDB for quick TTL pruning.  
3. **Query Layer** – AWS AppSync exposes GraphQL endpoints backed by Neptune’s SPARQL, while an Elasticache Redis layer caches hot subgraphs for 5 ms reads.  
4. **Inference Engine** – SageMaker pipelines run periodic embeddings; results are materialized as new KG edges in a read‑only replica.

I chose Neptune over JanusGraph because of managed scalability and native integration with AWS security services. The cache layer keeps cost low (≈$0.02/GB) while meeting SLAs.

**Result**  
- Latency dropped from 1.2 s to **180 ms** for 99th percentile queries.  
- Storage cost reduced by **35%** vs a relational design.  
- Agent accuracy improved by **12%** (F1 score) due to richer temporal context.

**Reflection**  
I took full ownership, iterating quickly on the indexing strategy after initial read‑latency spikes—demonstrating *Bias for Action* and *Dive Deep*. The project was a bar‑raiser because it required end‑to‑end ownership, deep technical trade‑offs, and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
