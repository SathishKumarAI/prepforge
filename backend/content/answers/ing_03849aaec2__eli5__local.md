---
qid: ing_03849aaec2__eli5__local
question: 'Explain: Terminology — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 269
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:45-05:00'
sources: []
---

Think of a **distributed counter** like a group of friends each holding a small whiteboard that records how many times they’ve seen a particular movie. Every time someone watches it, they write “+1” on their board. Later, to know the total view count, everyone’s boards are added together.

In a computer system, each *node* (a friend) keeps its own counter locally. When an update arrives—say a new user logs in—the node increments its local number. Because nodes work independently, they can handle many updates quickly and never have to wait for a single central server. When the total count is needed, the system gathers all local counters and sums them, just like adding the friends’ whiteboards.

Key terms:  
- **Node** – a separate computer or process that stores part of the data.  
- **Local counter** – the number each node keeps on its own.  
- **Aggregation** – combining all local counters to get the global total.  

This design lets you scale out (add more friends) without slowing down, and it tolerates some nodes failing—if one board disappears, the others still give a good estimate of the total.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
