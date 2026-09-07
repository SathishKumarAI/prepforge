---
qid: ing_d9a3d084fc__faang__local
question: 'Explain: Design a system that finds driving segments similar to a given
  one across the entire fleet archive.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 499
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:05:12-05:00'
sources: []
---

**Clarify**  
We need a service that, given a *reference drive* (audio‑video stream, telemetry, or map data), returns all other drives in the fleet that are “similar” across the entire archive. Clarifying points:  
- What defines similarity?  (temporal dynamics, route, speed profile, sensor patterns?)  
- How large is the archive?  (Millions of trips → millions of records)  
- What latency/throughput do we expect?  (Batch vs real‑time)  
- Which data formats are available (raw sensor streams, pre‑processed embeddings)?  

**Approach**  
1. **Feature extraction** – convert each drive into a fixed‑length vector (e.g., using an autoencoder on telemetry + map).  
2. **Indexing** – build an approximate nearest‑neighbor (ANN) index (FAISS / HNSW) over these embeddings.  
3. **Query pipeline** – when a reference is supplied, embed it, query the ANN for top‑k neighbors, and return their IDs/metadata.  
4. **Scalability** – shard the index across GPUs or use distributed FAISS; refresh periodically as new drives arrive.  

**Depth**  
- Embedding model: 3‑layer LSTM + attention to capture temporal patterns → ~256‑dim vector.  
- ANN: HNSW gives sub‑millisecond queries on millions of vectors with <0.1 recall loss.  
- Complexity: O(1) query time after indexing; index construction is O(N log N).  
- Trade‑offs: higher embedding dimensionality improves precision but increases memory and search cost.  

**Edge Cases**  
- Drives shorter than the reference → pad or truncate.  
- No similar drives found → return empty set or “no match.”  
- Outliers (e.g., accidents) – ensure robust embeddings that don’t dominate similarity.  

**Optimize & Communicate**  
- Profile recall vs latency; tune HNSW parameters (M, ef).  
- Cache frequent queries in Redis to reduce load on the ANN.  
- Explain to interviewers how feature engineering choices affect downstream similarity and why ANN is preferred over brute‑force search for large fleets.  

This design balances accuracy, scalability, and low latency while remaining extensible as new sensor modalities arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
