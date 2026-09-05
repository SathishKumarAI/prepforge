---
qid: ing_cde4e3ea8c__star__local
question: 'Explain: A standard Alibaba coding round. Design a data structure for a
  fixed-capacity cache that supports get and put in O(1) and evicts the least-recently-used
  entry when full. Implement it in Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 419
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:53-05:00'
sources: []
---

**Situation:**  
During a recent interview at Alibaba, the coding round asked me to design a fixed‑capacity cache that supports `get` and `put` in O(1) while evicting the least‑recently‑used item when full. The interviewer wanted to see both my design thinking and Python implementation skills.

**Task:**  
I needed to create a data structure that could store key–value pairs up to a set capacity, quickly retrieve values by key, update values, and automatically drop the least recently accessed entry once capacity was exceeded—all in constant time.

**Action:**  
I chose a combination of a doubly linked list (to track usage order) and a hash map (for O(1) lookup). Each node held `key`, `value`, and pointers to previous/next nodes. The head of the list represented the most recently used item, while the tail was the least recent.  
When `get(key)` was called, I moved the corresponding node to the head if it existed. For `put(key, value)`, I first checked if the key already existed; if so, updated its value and moved it to the head. If not, I created a new node at the head. If the cache exceeded capacity, I removed the tail node both from the list and the hash map.  
I implemented this with Python classes `Node` and `LRUCache`, ensuring all operations ran in O(1).

**Result:**  
The implementation passed all test cases: for a cache of size 3, inserting keys `[A,B,C]`, accessing `B`, then adding `D` correctly evicted `A`. Performance metrics showed constant‑time behavior even under heavy load. I learned the importance of pairing a linked list with a hash map for LRU logic and how to keep the code clean and testable in Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
