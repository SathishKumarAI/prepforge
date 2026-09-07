---
qid: ing_f736c94a3d__aws__local
question: 'Explain: Explain how HNSW works, and what the M and ef parameters control.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 523
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:37-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *Leadership Principles*: **Ownership**, **Dive Deep**  
> *Context*: Senior ML Engineer interview – explain Hierarchical Navigable Small World (HNSW) graph for approximate nearest‑neighbors.

**S**ituation & Task  
At my last company we had a recommendation engine that served 2 M daily users. The similarity search on user embeddings (512‑dim vectors) was bottlenecked by latency (>200 ms) and memory (30 GB). I owned the redesign and chose HNSW to reduce both.

**T**ask  
Implement an in‑memory index with <20 ms query time, ≤10 % RAM overhead, and 99.9 % accuracy vs exact kNN.

**A**ction – Technical Design  
1. **Graph construction**: Build a multi‑layer HNSW where each layer is a random subset of nodes.  
2. **Parameters**  
   * **M (outgoing edges per node)** – controls graph density. I set M=32 after profiling; higher M improved recall but doubled memory.  
   * **efSearch (search effort)** – number of candidates examined during query. I tuned ef to 200 for 99 % recall, balancing CPU cycles and latency.  
3. **AWS Services**:  
   * **Amazon Elasticache Redis** – store the graph as a key‑value structure for low‑latency access.  
   * **Lambda@Edge** – warm up nodes near edge locations to reduce cold starts.  
4. **Scalability & Availability**: Shard the index by user segment; each shard runs on an EC2 Spot instance pool, achieving 99.5 % uptime with cost savings of ~30 %.  

**R**esult  
- Query latency dropped from 210 ms to **18 ms** (12×).  
- Memory usage fell from 30 GB to 4 GB per shard (≈86 % reduction).  
- Accuracy remained >99.7 % compared to exact kNN.  

**Learning**  
I initially set M=64, which caused OOM errors on Spot instances. By iteratively profiling and adjusting M/ef I learned the trade‑off between recall and resource consumption—critical for production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
