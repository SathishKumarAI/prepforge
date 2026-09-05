---
qid: ing_2b600f9cbc__eli5__local
question: 'Explain: Directory-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 241
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:00-05:00'
sources: []
---

**Directory‑Based Sharding in a nutshell**

Imagine a huge library that has millions of books. Instead of letting every librarian search the whole building for a title, the library uses a *directory* (a master index) that says exactly which wing contains each book. When someone asks for “War and Peace,” the librarian looks up the directory, finds it lives in Wing 3, and goes straight there—no need to walk all the way through every wing.

In computing, *sharding* is the same idea: data (like customer records) are split into many pieces called shards. A *directory* keeps a map from each piece of data to its shard’s location. When an app needs a record, it consults the directory and jumps directly to that shard, saving time and bandwidth.

The key terms:
- **Shard** – a subset of all data stored on one server or node.
- **Directory** – a lookup table that tells you which shard holds any given piece of data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
