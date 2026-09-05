---
qid: ing_7b93d62ca0__eli5__local
question: 'Explain: Cross-Shard Queries — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 191
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:52:43-05:00'
sources: []
---

Imagine a huge library that’s split into several smaller sections, each on its own floor (the “shards”). Each floor holds only some of the books—maybe one floor keeps all mysteries, another keeps science fiction, and so on. If you want to find every book about *space travel*, you can’t just look on one floor; you need to ask every floor for their space‑travel titles and then put those lists together.

That’s a cross‑shard query: a request that must reach several shards (floors) at once, gather the partial answers from each, and combine them into a single result. Sharding is simply dividing data across multiple places so each part stays small and fast. The challenge is keeping the final answer correct and quick even though it comes from many separate sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
