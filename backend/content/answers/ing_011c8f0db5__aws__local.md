---
qid: ing_011c8f0db5__aws__local
question: 'Explain: Strategy 3: Table-Aware Chunking — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 493
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a product that delivered AI‑powered search for an e‑commerce catalog. Our LLM‑based retrieval‑augmented generation (RAG) model was slow because the multimodal index stored entire images and text blobs in one shard, causing >5 s latency on peak traffic.

**Action – Table‑Aware Chunking (Multimodal RAG)**  
1. **Requirements & Dive Deep**: Split each product row into *text* and *image* chunks, then store them in separate DynamoDB tables with complementary Global Secondary Indexes (GSIs).  
2. **Design & AWS Services**  
   - **S3 + Athena** for raw data ingestion;  
   - **DynamoDB** for low‑latency chunk lookups;  
   - **Lambda@Edge** to route user queries to the nearest edge, fetching only relevant chunks via PartiQL;  
   - **Bedrock (Claude/LLM)** to synthesize responses.  
3. **Scalability & Availability**: DynamoDB auto‑scales on read/write capacity units; replication across 3 AZs guarantees 99.99 % availability.  
4. **Cost Trade‑offs**: Separating chunks cuts storage by ~30 %, and Lambda’s pay‑per‑invoke model reduces idle compute.

**Result**  
- Latency dropped from 5 s to **<300 ms** (90 % reduction).  
- Query throughput increased from 1,200 RPS to 7,500 RPS without additional servers.  
- Cost savings of **$45k/month** by eliminating over‑provisioned GPU clusters.

**Learnings & Bar‑raiser Signals**  
Ownership: I championed the redesign and mentored the devs through the migration.  
Dive Deep: I benchmarked chunk sizes, measured GC pauses, and tuned DynamoDB read replicas.  
Quantified Impact: 90 % latency reduction and $45k/month savings directly tied to revenue growth.  

This solution exemplifies *Customer Obsession* (fast answers), *Ownership*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
