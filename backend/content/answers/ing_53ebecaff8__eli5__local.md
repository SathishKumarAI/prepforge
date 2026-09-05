---
qid: ing_53ebecaff8__eli5__local
question: 'Explain: Mapping metadata in the cluster state — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 242
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:50:02-05:00'
sources: []
---

Think of a library that wants to put books on shelves without overcrowding or leaving too many empty spots.  
In Elasticsearch, the “library” is your cluster, the “books” are documents, and each shelf is called a **shard**.  

When you first set up the library, you decide how many shelves (shards) there will be and how big each one should be. That decision is stored in the **cluster state metadata**—the map that tells every node what its share of the books looks like. If you ask for “size your shards,” you’re telling the system: *“Let’s figure out a good shelf size so no shelf gets too full and no shelf stays mostly empty.”*  

Just as a librarian might split a collection into sections (fiction, non‑fiction) to keep things balanced, Elasticsearch splits data into shards based on your mapping rules. The cluster state keeps that plan up‑to‑date, letting each node know its exact portion of the library so all books stay organized and quickly reachable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
