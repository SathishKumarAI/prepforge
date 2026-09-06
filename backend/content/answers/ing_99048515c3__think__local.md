---
qid: ing_99048515c3__think__local
question: 'Explain: Least-Recently Used (LRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 523
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:13:00-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
   - *What is a cache?* A temporary storage for recently accessed data to speed up future look‑ups.  
   - *Why evict?* The cache has limited capacity; when full, we must remove an entry before inserting a new one.  
   - *Goal of LRU:* keep the most useful items (those used most recently) and discard those that have sat idle longest.

**2. Mental model / framework**  
   - Think of the cache as a list ordered by “last access time.”  
   - Each time an item is accessed, move it to the *front* (most recent).  
   - When eviction is needed, remove the item at the *back* (least recently used).

**3. Step‑by‑step reasoning**  
   1. **Access**: On read/write, record the timestamp or reposition in a linked structure.  
   2. **Insertion**: If the cache isn’t full, simply add the new item to the front.  
   3. **Eviction**: When full, delete the tail entry (the one that has not been touched for the longest time).  
   4. **Update pointers**: Adjust head/tail links or update a hash‑table key→node mapping.

**4. Common traps to avoid**  
   - *Using “least frequently used” instead of “least recently used.”* LRU cares about recency, not count.  
   - *Ignoring write‑back policies:* A dirty page may need flushing before eviction.  
   - *Assuming a single global clock works for all threads*: In multithreaded systems, atomic operations or per‑thread counters are required.

**5. Sanity‑check & communicate**  
   - Verify that every access moves an item to the front; otherwise, stale items linger.  
   - Explain with a simple example: “Cache holds A,B,C; after accessing B, order becomes B,A,C. If we add D and capacity is 3, evict C (the tail).”  
   - Highlight trade‑offs: LRU gives good hit rates for temporal locality but costs O(1) updates only if a doubly linked list + hash map is used.

This concise framework lets you explain, implement, or debug LRU cache eviction policies confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
