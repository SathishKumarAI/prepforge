---
qid: ing_469ebaa048__eli5__local
question: 'Explain: Graph Algorithms (Advanced) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 201
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:00-05:00'
sources: []
---

Think of a large social‑network app that wants to recommend new friends.  
The *graph* is the map of everyone (nodes) and their friendships (edges).  
A “graph algorithm” is like a clever tour guide who can quickly find hidden connections or shortest paths between people.

In an advanced system‑design interview, you’re asked not just to pick one algorithm but to build a whole service that scales.  
You’ll explain how to store the graph in a distributed database (e.g., sharding by user ID), how to keep it fresh when users add friends (incremental updates), and how to run heavy queries—like “find all people two steps away”—without pulling the entire map into memory.  

So, you’re designing the *architecture* that lets millions of users get real‑time recommendations while the underlying graph algorithms crunch data in the background.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
