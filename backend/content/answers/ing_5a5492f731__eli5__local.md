---
qid: ing_5a5492f731__eli5__local
question: 'Explain: Removing master-eligible nodes — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 248
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:34-05:00'
sources: []
---

Think of an Elasticsearch cluster as a small town where several residents (nodes) help run the city’s services. Some residents are “master‑eligible” – they’re like town councilors who can decide on important matters such as which roads to build or how many trash trucks to keep. If you remove one of these councilors, the town still has other councilors to make decisions, but it needs to be sure that no two councilors try to pass conflicting rules at once.

When you add or remove a master‑eligible node, Elasticsearch runs a quick “voting” session among the remaining councilors. Each councilor casts a vote for the new group of councilors (the “cluster state”). If enough votes are cast, the town accepts the change and updates its official map. This process keeps the cluster’s leadership stable even while people come or go.

So, removing master‑eligible nodes is just like re‑electing your city council after a few members leave: everyone votes on the new lineup, and only if there’s enough agreement does the town officially adopt the change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
