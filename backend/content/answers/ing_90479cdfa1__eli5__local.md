---
qid: ing_90479cdfa1__eli5__local
question: 'Explain: Sharding Strategies — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 339
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:25:33-05:00'
sources: []
---

Imagine you’re running a huge library that has millions of books, but only one shelf can hold a few dozen at a time. To keep the library usable, you split it into many smaller sections—each section is a *shard*. In machine‑learning systems, sharding does the same: data and workloads are divided into independent chunks so no single server gets overwhelmed.

A **horizontal shard** is like putting every book on a different shelf based on its first letter. Each shelf (server) stores books starting with that letter range; when someone looks for “M” books, only the M‑shelf is consulted.  

An **vertical shard** is like separating a book’s parts: one server keeps all titles and authors, another holds full text, another stores metadata. Requests that need just the title hit the first server, saving time.

The two main strategies are:
1. *Range sharding* – split by a continuous key (e.g., user ID 0‑999 on server A, 1000‑1999 on B).
2. *Hash sharding* – mix keys with a hash function to spread them evenly across servers.

Both keep each shard small and fast, but range sharding makes it easy to find “all users in this country” while hash sharding balances load when user IDs are random.  

By choosing the right strategy—like deciding whether to sort books alphabetically or by genre—you make a machine‑learning system that scales smoothly without any single point of failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
