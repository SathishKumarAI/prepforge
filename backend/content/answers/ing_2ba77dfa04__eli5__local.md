---
qid: ing_2ba77dfa04__eli5__local
question: 'Explain: Shared-nothing architecture — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 187
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:29-05:00'
sources: []
---

Imagine your favorite recipe book is so big that it’s easier to read if you split it into several smaller cookbooks, each containing a different set of recipes (e.g., desserts, salads, main courses). A shared‑nothing architecture does the same thing for data: every small cookbook (or *shard*) lives on its own computer and keeps all its own ingredients—no sharing of storage or memory with others.  
When you need a recipe, your system looks up which cookbook contains that type of dish and asks only that one. Because each shard works independently, the whole library can grow without slowing down; adding another cookbook just adds another independent server. This is database sharding: dividing a big database into smaller, self‑contained pieces (shards) that run on separate machines, each handling its own subset of data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
