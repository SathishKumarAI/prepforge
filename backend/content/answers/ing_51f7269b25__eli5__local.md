---
qid: ing_51f7269b25__eli5__local
question: 'Explain: Master-eligible node considerations — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 265
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:08-05:00'
sources: []
---

Imagine a club where members decide on the next event by voting.  
In an Elasticsearch cluster, the **master‑eligible node** is like the club’s *chairperson*: only these nodes can hold the meeting and pick the leader (the master). All other nodes are just *members* that help with the work but don’t vote for leadership.

When you **add a new member node**, it first joins as a regular member. If it’s also marked master‑eligible, it will join the voting circle but won’t automatically become chair unless everyone agrees (the cluster re‑elects).  
When you **remove a node**, you simply tell the club to forget that member. If it was the current chair, the remaining master‑eligible members quickly hold another vote to pick a new chair.

Key terms:  
- **Master‑eligible** – nodes allowed to become or help elect the cluster’s master.  
- **Cluster re‑elect** – the process of choosing a new master when needed.  

Thus, adding or removing nodes is like inviting or letting go members; as long as enough voting members stay, the club keeps running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
