---
qid: ing_945f5da2e7__aws__local
question: 'Explain: Using Graphiti with Google Gemini — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 582
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:27-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time knowledge graph that could feed an AI agent (Google Gemini) to provide instant, context‑aware answers for our customer support portal. The goal was to reduce ticket resolution time by 30 % and increase first‑contact resolution by 15 %.  

**Task** – Integrate Graphiti’s incremental graph engine with Google Gemini’s multimodal model while ensuring low latency (<50 ms) at scale, and keeping operational cost under $200/month.  

**Action**  
1. **Requirements & Architecture** –  
   * Data ingestion: streaming customer interactions from Kafka → AWS Kinesis → Lambda (Python).  
   * Graph storage: Amazon Neptune (graph DB) for ACID guarantees; use Graphiti’s API to update edges in micro‑batches, keeping the graph fresh.  
   * AI inference: Invoke Gemini via Vertex AI REST API inside a container on ECS Fargate (CPU = 2 vCPU, 4 GiB RAM).  
   * Caching: Deploy Amazon ElastiCache Redis for hot subgraphs to cut query time by ~70 %.  

2. **Design Decisions** –  
   * **Scalability:** Neptune scales horizontally with read replicas; Kinesis shards allow linear growth.  
   * **Availability:** Multi‑AZ deployment, automatic failover in Neptune, and ECS Service Auto Scaling.  
   * **Cost:** Spot instances for Lambda concurrency (≈ 30 % savings), Fargate spot for inference, and 50 % reserved capacity on Neptune.  

3. **Implementation** – Wrote a Graphiti ingestion pipeline that converts each support ticket into a node + “mentions” edges to relevant product entities. Gemini receives the node’s adjacency list as context, generates a concise response, and writes back an “answered” flag.  

4. **Result** – After 90 days:  
   * Ticket resolution time dropped from 12 min to 8 min (33 % reduction).  
   * First‑contact resolution rose from 65 % to 80 %.  
   * Monthly spend stayed at $180, below the target.  

**Reflection** – I realized early that edge cardinality could explode; by batching updates and pruning stale edges every 24 h I kept Neptune’s storage cost in check. The project reinforced my ownership mindset: I championed cross‑team alignment (data, infra, product) and iterated quickly on feedback loops.  

> **Leadership Principles:**  
> *Customer Obsession* – the graph powered faster, more accurate answers for users.  
> *Dive Deep & Ownership* – I engineered a cost‑efficient, highly available stack and took full responsibility for its performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
