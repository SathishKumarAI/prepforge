---
qid: ing_35cf6fa7f2__star__local
question: 'Explain: Q10: Explain vector database indexing algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:50-05:00'
sources: []
---

**Situation:**  
When I joined the search team at a media‑streaming startup, our recommendation engine was returning irrelevant results because the similarity search on user embeddings took 8 seconds per query—far too slow for real‑time personalization.

**Task:**  
I had to redesign the vector lookup layer so that latency dropped below 200 ms while keeping recall above 90% for 1.2 million high‑dimensional (512‑D) vectors.

**Action:**  
First, I profiled our existing linear scan and found it was bottlenecked by CPU cache misses. I introduced an IVF‑Flat index in Milvus: we clustered the space into 1024 inverted lists using k‑means, then stored each list on SSD with a flat L2 metric for exact distance calculation. To further reduce search time, I overrode the default IVF parameters and added a coarse quantizer that pruned 95% of candidates before the fine scan. For high recall on rare user profiles, I hybridized this with an HNSW graph (layer 4, efSearch = 200) that ran in parallel for a subset of queries flagged as “cold starts.” All changes were implemented in Python using PyMilvus and validated against our benchmark suite.

**Result:**  
Latency fell from 8 s to 180 ms on average, with recall remaining at 92%. The new pipeline handled 3× the query volume during peak hours without additional hardware. I learned that a hybrid index—combining coarse IVF pruning with fine HNSW traversal—provides the best trade‑off between speed and accuracy in production vector search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
