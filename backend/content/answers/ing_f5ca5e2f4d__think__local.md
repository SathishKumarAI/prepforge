---
qid: ing_f5ca5e2f4d__think__local
question: 'Explain: Select your preferred language — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 474
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:13:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   *Identify what “LedgerStore” is (Uber’s internal time‑series store) and that we’re focusing on its indexing strategy, not just language choice.*  
   *Assume readers know basic distributed storage concepts but may be unfamiliar with Uber’s architecture.*

**2️⃣ Adopt a layered mental model**  
   *View the system as: data ingestion → sharding & replication → column‑store layout → index construction → query execution.*  
   *Within each layer, ask “how does it scale to trillions of keys?”*

**3️⃣ Step‑by‑step reasoning**  
   1. **Data model** – LedgerStore stores events as key/value pairs with a monotonically increasing timestamp; keys are partitioned by hash buckets.  
   2. **Sharding & replication** – Use consistent hashing to spread data across thousands of nodes, each handling ~10 M keys.  
   3. **Storage format** – Column‑arithmetic blocks (similar to Parquet) keep values compact and allow selective read; indexes are stored as lightweight Bloom filters per block.  
   4. **Index strategy** – Instead of a global B‑tree, each node maintains local in‑memory LSM trees that merge into on‑disk “index segments”; these are compressed and replicated.  
   5. **Query path** – A query hits only the shards whose key ranges intersect the filter; Bloom filters prune irrelevant blocks before disk I/O.  

**4️⃣ Avoid common pitfalls**  
   *Don’t conflate “language” with “storage engine”.*  
   *Beware of over‑optimistic compression numbers—real‑world workloads have sparse updates.*  
   *Remember that index size grows sublinearly because many keys share the same timestamp bucket.*

**5️⃣ Sanity check & verbalize**  
   *Ask: does each step reduce contention, keep memory bounded, and allow linear scalability?*  
   *Explain that by localizing indexes per shard and using probabilistic filters, LedgerStore keeps index metadata tiny relative to data volume, enabling trillions of searchable entries without a monolithic global index.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
