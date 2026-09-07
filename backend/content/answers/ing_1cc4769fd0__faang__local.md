---
qid: ing_1cc4769fd0__faang__local
question: 'Q: A knowledge base of 50,000 documents needs Contextual Retrieval. How
  do you manage the ingestion cost?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 499
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:51:54-05:00'
sources: []
---

**Clarify**  
You want to build a contextual‑retrieval system for ~50 k docs while keeping ingestion (indexing, embeddings, storage) costs low. Key assumptions:  
- Documents are text‑heavy (average 2 k tokens).  
- Retrieval latency target is <200 ms per query.  
- Budget constraints apply only to the initial ingest; runtime costs can be higher.

**Approach**  
1. **Chunking & compression** – split each doc into 500–800 token chunks, store only unique content (dedupe with hashing).  
2. **Efficient embeddings** – use a lightweight transformer (e.g., *Sentence‑BERT* distilled) or an OpenAI embedding endpoint with per‑token pricing; cache embeddings locally to avoid repeated API calls.  
3. **Vector index selection** – employ HNSW or IVF‑PQ in FAISS, which offers sub‑linear search and can be persisted on inexpensive SSDs.  
4. **Tiered storage** – keep hot vectors (top 10 % by access) on NVMe; archive the rest to S3 Glacier with periodic re‑indexing.

**Depth**  
- Chunk size ≈ 600 tokens → ~33 M chunks, embeddings of 768 dims → ~100 GB raw.  
- HNSW index ≈ 1.5× data size → ~150 GB, fits on a single 2 TB SSD.  
- Embedding cost: 33 M × $0.0004 (OpenAI) ≈ **$13k** for one‑time ingestion; mitigated by using a local model (~$200).  
- Retrieval latency < 100 ms thanks to HNSW’s O(log n) search.

**Edge Cases**  
- Highly repetitive documents → dedupe aggressively.  
- Long docs > 10k tokens → fallback to hierarchical chunking.  
- Sudden spike in query volume → auto‑scale index shards.

**Optimize & Communicate**  
Explain that the trade‑off is between upfront embedding cost and long‑term storage/latency savings. By batching embeddings, using a distilled model, and tiered storage, we reduce ingestion to ~\$200–\$400 while maintaining sub‑200 ms retrieval, satisfying both budget and performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
