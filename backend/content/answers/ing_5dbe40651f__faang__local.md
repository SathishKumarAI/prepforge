---
qid: ing_5dbe40651f__faang__local
question: 'Explain: Index Table — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 511
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:21:59-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe the *Index‑Table* pattern—one of six core data‑management patterns used when building large‑scale ML systems. Confirm that we’re talking about a *denormalized lookup table* that maps keys (e.g., user IDs, feature names) to pre‑computed values (feature vectors, embeddings). Ask if they want examples from recommendation or CV pipelines.

**Approach**  
1. Define the pattern and its purpose.  
2. List typical use cases.  
3. Explain how it’s stored and accessed (in-memory cache vs. persistent store).  
4. Touch on consistency, scalability, and fault‑tolerance.  

**Depth**  
- **Definition:** An *Index Table* is a key–value store that holds pre‑computed feature values so downstream models can retrieve them in O(1) time.  
- **Use Cases:**  
  - *Feature stores* for online inference (e.g., user profile embeddings).  
  - *Lookup tables* for image segmentation masks or word embeddings.  
  - *Cache layers* that avoid recomputing expensive transforms.  
- **Implementation:** Often backed by a distributed cache (Redis, Memcached) or columnar store (Cassandra, Bigtable). Entries are updated via batch jobs or streaming pipelines (Kafka → Flink → HBase).  
- **Consistency:** Write‑through or write‑back strategies; eventual consistency is acceptable for many ML workloads.  
- **Scalability:** Partition keys by hash; use read replicas to handle hot spots.  

**Edge Cases**  
- *Cold start:* Missing key → fallback to a default vector or trigger on‑demand recomputation.  
- *Stale data:* Periodic TTLs or version tags to detect drift.  
- *Large cardinality:* Sharding may cause lookup latency spikes; monitor hotspots.  

**Optimize & Communicate**  
To improve, merge index tables with feature‑store metadata (e.g., schema, lineage) and expose a REST/GRPC API for single‑point access. When explaining, emphasize the trade‑off between speed (in‑memory cache) and durability (persistent store). Conclude by highlighting that the Index Table pattern is essential for turning raw data into low‑latency features that ML models can consume reliably at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
