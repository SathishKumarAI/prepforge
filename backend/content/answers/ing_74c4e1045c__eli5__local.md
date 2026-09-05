---
qid: ing_74c4e1045c__eli5__local
question: What is Raft? — Raft Consensus Algorithm
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 212
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:56-05:00'
sources: []
---

Raft is a way for several computers to agree on a single, shared order of events—like a group of friends deciding what movie to watch.  
Imagine each computer is a “node” and they all sit around a table. One node becomes the **leader** (the one who takes the final call). The leader writes every decision (a new “log entry”) in a notebook that everyone copies. If the leader stops, the others hold an election: they vote for a new leader by sending short messages (“I’m alive!”).  
When a new entry arrives, the leader sends it to all followers. Once most have written it, the leader confirms it’s **committed** and informs everyone to act on it. If a follower is behind, the leader simply resends missing entries.  
Thus Raft keeps all nodes in sync even if some fail—just like friends staying on the same page about their movie choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
