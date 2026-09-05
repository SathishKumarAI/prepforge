---
qid: ing_0957122f62__eli5__local
question: 'Explain: You run 40 replicas of the same model behind a load balancer,
  and round-robin gives you a terrible prefix cache hit rate. Design the routing layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 222
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:50:31-05:00'
sources: []
---

Imagine each replica is a librarian in a huge library that can answer the same question, but they only know what’s on the books they have already read (their “prefix cache”). If you simply ask each librarian in turn (round‑robin), most will say “I don’t remember this one yet,” so customers keep coming back and the library wastes time.

Instead, create a smart traffic director that first checks which librarian has already read the book (cached the prefix) for that question. Think of it as a map that points each new request to the librarian who knows the answer right away. If no librarian has it yet, pick one at random and let them read the book; afterward they can share it with others.

So the routing layer is a “cache‑aware router”: it looks up the cache key, sends the query to the right replica, and only falls back to round‑robin when nobody knows the answer. This keeps most requests hitting the cache quickly, improving performance dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
