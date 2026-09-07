---
qid: ing_6149717184__faang__local
question: 'Explain: Build text-to-image search over 100M product images. Walk me through
  the design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 479
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:05-05:00'
sources: []
---

**Clarify**  
We need a system that, given a natural‑language query (e.g., “red leather backpack”), returns relevant product images from a catalog of ~100 M items. Assumptions: queries are short, latency <200 ms for user experience, 99.9% uptime, and we can pre‑process all images offline.

**Approach**  
1. **Feature extraction** – Run a pretrained vision‑language model (e.g., CLIP) on every image to get a dense embedding (512‑D).  
2. **Indexing** – Build an approximate nearest neighbor (ANN) index (FAISS IVF+PQ) over the embeddings, with product metadata as side data.  
3. **Query pipeline** – Encode the text query with the same model → vector → ANN search → retrieve top‑k image IDs + scores.  
4. **Re‑ranking & filtering** – Apply business rules (price range, stock) and a lightweight re‑ranker (e.g., linear SVM on concatenated visual/text features).  
5. **Caching & sharding** – Distribute the index across shards; cache popular queries in Redis for sub‑10 ms hits.

**Depth**  
- *Complexity*: Index construction O(N log N); query time O(log N + k).  
- *Trade‑offs*: Higher PQ precision → larger disk, slower lookups; lower precision → recall drop.  
- *Consistency*: Use eventual consistency for updates; batch reindexing nightly.

**Edge Cases**  
- Ambiguous queries (“blue” vs “navy”) → fallback to keyword search.  
- New images added between reindexes → incremental index update or background pipeline.  
- Extremely rare categories → ensure enough samples in ANN clusters.

**Optimize & Communicate**  
Start with a baseline CLIP + FAISS; measure MRR and latency. Then experiment: multi‑modal fusion (image + product description), dynamic quantization, and hybrid search (text keyword + vector). Explain results to stakeholders: “We improved recall by 12% while keeping latency under 150 ms.” This iterative, metric‑driven approach demonstrates structured problem solving and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
