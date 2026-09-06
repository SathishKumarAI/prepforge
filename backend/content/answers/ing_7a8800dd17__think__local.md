---
qid: ing_7a8800dd17__think__local
question: 'Explain: The Shape of a Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 420
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:08:07-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Assume the reader knows basic ML pipelines but not system‑level performance tricks.  
   - Focus on *caching* as a technique for reducing latency & load in distributed ML workloads (feature stores, model inference).  
   - Treat “shape of a cache” as the data layout, hierarchy, and eviction policy.

**2. Adopt a mental model**  
   - Think of caching like a multi‑layer memory system: **L1 (in‑process), L2 (local disk/SSD), L3 (distributed store)**.  
   - Map each layer to ML concepts: in‑memory feature vectors, local pre‑computed embeddings, remote model checkpoints.

**3. Step‑by‑step reasoning**  
   1. *Identify hot data*: frequent features or inference results.  
   2. *Choose granularity*: whole example vs. key‑value pair (e.g., userID → embedding).  
   3. *Decide hierarchy*: how many layers, what storage medium each layer uses.  
   4. *Select eviction policy*: LRU for short‑term freshness, LFU or size‑based for long‑term.  
   5. *Integrate with ML workflow*: feature store APIs, model serving pipelines.

**4. Common traps to avoid**  
   - Over‑optimizing for read speed at the expense of consistency (stale features).  
   - Ignoring write amplification when evicting from higher layers.  
   - Forgetting to handle cache misses gracefully in production inference.

**5. Sanity check & communicate**  
   - Verify that the proposed shape meets latency targets and storage budgets.  
   - Explain trade‑offs verbally: “If we push more data into L1, we reduce lookups but risk higher memory pressure.”  
   - Use a diagram or pseudocode to illustrate data flow across layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
