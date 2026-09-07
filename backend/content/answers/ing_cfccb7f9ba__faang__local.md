---
qid: ing_cfccb7f9ba__faang__local
question: 'Explain: Evaluation Criteria — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 457
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:39-05:00'
sources: []
---

**Clarify**  
We’re asked how to evaluate a vector database for an AI‑driven product (e.g., semantic search, recommendation). Key assumptions: the workload is read‑heavy with occasional writes; vectors are high‑dimensional (≈ 512–2048); similarity queries use cosine or L2; latency < 50 ms; scalability to millions of vectors.  

**Approach**  
1. **Functionality** – ingestion, indexing, query API, metric support, updates.  
2. **Performance** – throughput (QPS), latency per query, cache hit ratio.  
3. **Scalability & Consistency** – sharding strategy, replication guarantees, eventual vs strong consistency.  
4. **Ecosystem Fit** – language bindings, integration with ML pipelines, monitoring/metrics.  
5. **Operational Overheads** – storage cost, backup/recovery, resource utilization.  

**Depth**  
- *Indexing*: IVF+PQ, HNSW, ANNOY; trade‑off between recall vs speed.  
- *Complexity*: IVF+PQ gives O(log N) search with linear scan over coarse centroids; HNSW offers sub‑linear but higher memory.  
- *Consistency*: Multi‑zone replication can introduce stale reads; design read‑through cache if strict consistency isn’t required.  
- *Cost*: Evaluate SSD vs NVMe, compute type (CPU vs GPU), and data transfer overheads.  

**Edge Cases**  
- Sudden vector burst (model retraining) → test hot‑spot handling.  
- Drift in distribution → re‑indexing latency.  
- Mixed metric queries → ensure fallback to brute force when needed.  

**Optimize & Communicate**  
Propose a benchmark suite: synthetic data + real workload; record recall@k, latency percentiles, CPU/memory utilization. Iterate on index parameters (nlist, M) to hit SLA targets. Summarize findings in a slide deck highlighting trade‑offs and recommending the best fit for the product’s scale and consistency needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
