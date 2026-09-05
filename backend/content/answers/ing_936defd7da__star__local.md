---
qid: ing_936defd7da__star__local
question: Compare HNSW, IVF, and product quantization - what are the recall/latency/memory
  tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 429
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:32-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a real‑time recommendation engine that served millions of user queries per day. Our vector database grew from 2 M to 15 M high‑dimensional embeddings (384‑D) and the latency budget was 10 ms per request.

**Task:**  
I had to choose an ANN index structure that maximized recall at <10 ms while keeping RAM under 8 GB. I needed to benchmark HNSW, IVF+PQ, and IVF alone on our workload.

**Action:**  
Using Faiss I built three indices: (1) a single‑layer HNSW with `m=32`, `efSearch=200`; (2) an IVF index (`nlist=4096`) followed by product quantization (`pq_m=8`, `k=256`); and (3) plain IVF. I ran 50K query batches, logged mean latency, recall@10 against a ground‑truth exhaustive search, and memory footprint. For HNSW I tuned the graph fanout to trade off construction time vs query speed; for IVF+PQ I experimented with increasing `nlist` to improve recall but watched RAM grow.

**Result:**  
HNSW achieved 96% recall@10 at ~8 ms latency using ~4.2 GB of memory—best overall. IVF+PQ got 93% recall@10 at 6 ms but used 5.8 GB, while plain IVF hit only 88% recall@10 at 4 ms with 3.1 GB. I deployed HNSW in production and later added a hybrid scheme (IVF+HNSW) to further reduce latency for the top‑k candidates. This exercise taught me how graph connectivity, quantization granularity, and list size directly influence recall/latency/memory tradeoffs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
