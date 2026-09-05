---
qid: ing_b917718791__eli5__local
question: 'Explain: Cache in Distributed Systems — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 281
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:36-05:00'
sources: []
---

Imagine you’re a librarian who receives many requests for the same book every day. If you had to fetch that book from the back shelf each time, patrons would wait and the library would slow down. Instead, you keep a copy of the book on a small desk near the front—just in case someone asks again. That desk is like a **cache**: a fast‑access storage spot for data that’s frequently used.

In a distributed system (many computers working together), each node might need the same piece of information—say, user profiles or product prices. Rather than all nodes going to a central database every time, they store recent results in their local caches. When a request comes, the node first checks its cache; if it finds the data (“cache hit”), it returns it instantly. If not (“cache miss”), it fetches from the slower source and then places a copy into the cache for next time.

**Cache** = quick, temporary storage for frequently accessed data.  
**Distributed system** = multiple computers that cooperate to provide services.  

By using caches, systems reduce latency, lower load on central resources, and keep users happy—just like keeping popular books at the front desk keeps patrons satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
