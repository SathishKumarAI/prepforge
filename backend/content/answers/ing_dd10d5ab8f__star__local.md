---
qid: ing_dd10d5ab8f__star__local
question: 'Explain: DiskANN (SSD-based) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 385
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:59-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a recommendation engine that needed to serve millions of user embeddings in real‑time. The latency target was under 10 ms per query, but our initial ANN search on CPU RAM hit 30–40 ms and the memory footprint exceeded our budget.

**Task:**  
I had to redesign the nearest‑neighbor subsystem so it could run on commodity SSDs while keeping sub‑10 ms latency and reducing memory usage by at least 60%.

**Action:**  
I chose DiskANN, a library that builds an approximate k‑NN graph optimized for SSD access patterns. I started by re‑encoding our high‑dimensional embeddings into 32‑bit float vectors and used DiskANN’s built‑in IVF‑PQ compression to shrink each vector to ~4 KB. Then I ran the offline index construction, which streamed data directly from SSDs, creating a graph with 1 M nodes and an average fan‑out of 8. During query time, I leveraged DiskANN’s two‑phase approach: first it probes a small set of candidate centroids in RAM, then fetches the relevant sub‑graphs from SSD, performing a lightweight graph traversal on‑the‑fly. I tuned the probe count to 5 and the expansion factor to 12, balancing recall and speed.

**Result:**  
The new system served queries in an average of 8 ms with 95% top‑10 recall, cutting memory usage from 32 GB to 4 GB. Deployment on a single SSD rack reduced infrastructure costs by 70%. I learned how careful graph construction and SSD‑aware data layout can turn a memory‑bound ANN problem into a cost‑effective, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
