---
qid: vq_1dd10353f1__faang__local
question: What is a Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 493
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:35-05:00'
sources: []
---

**Clarify**  
The interviewer asks “What is a Table?” in a data‑structures & algorithms (DSA) setting. I’ll interpret *table* as an abstract data type that maps keys to values, i.e., a **hash table / dictionary**. Confirm assumptions: Do we mean a concrete implementation (array‑backed hash map), or the concept of key–value storage? Assume array + hashing for typical interview context.

**Approach**  
1. Define the abstraction and its operations (`put`, `get`, `remove`).  
2. Explain underlying data structure (hash function, collision handling).  
3. Highlight performance guarantees and trade‑offs.

**Depth**  
A *table* is a key–value store where each key hashes to an index in an array of buckets.  
- **Hash function**: maps arbitrary keys to integer indices (`h(k) mod m`).  
- **Collision resolution**: open addressing (linear probing, quadratic probing, double hashing) or chaining (linked lists/trees per bucket).  
Operations:  
- `put(k,v)` → hash → bucket → insert/update.  
- `get(k)` → hash → search bucket for key.  
- `remove(k)` → hash → delete entry.  

With a good hash function and load factor ≤ 0.75, expected **O(1)** time per operation. Memory: `Θ(m + n)`. Trade‑offs: higher load factor saves space but increases collision cost; lower load factor speeds lookups at the expense of extra memory.

**Edge Cases**  
- Empty table (n=0).  
- All keys collide → worst‑case O(n).  
- Resizing (rehash when load factor threshold crossed).  
- Key equality and hash consistency.  

**Optimize & Communicate**  
Mention that using a balanced tree for buckets improves worst‑case to `O(log n)` while keeping average `O(1)`. Explain resizing strategy: double array size, rehash all entries—amortized `O(1)` per insertion. Conclude by noting that this structure underpins dictionaries in Python (`dict`), JavaScript objects, and many library maps.  

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
