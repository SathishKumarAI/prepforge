---
qid: ing_d0aa2e2c8b__aws__local
question: 'Explain: Graph Algorithms (Shortest Paths with Edge Weights):'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 368
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:44-05:00'
sources: []
---

**Situation & Task**  
I led a team that built an internal recommendation engine for a large retail platform (30 M users). The core required finding the *shortest weighted path* between any two product nodes in a dynamic graph of over 5 M edges—critical for real‑time “customers also bought” suggestions.  

**Action**  
I chose **Dijkstra’s algorithm** with a priority queue (binary heap) because all edge weights were non‑negative and the graph was sparse. To scale, I partitioned the graph by product category and stored each shard in an Amazon Neptune cluster, exposing a Gremlin endpoint for fast traversal. For latency < 100 ms, I pre‑computed *k*-shortest paths for high‑traffic node pairs and cached them in **Amazon ElastiCache (Redis)**. When edge weights changed (e.g., discount updates), a Lambda function recomputed affected subgraphs and updated the cache.  

**Result**  
The solution cut recommendation latency from 350 ms to **78 ms** (4× faster) and increased click‑through rate by **12%**, driving an additional $2M in quarterly revenue. I documented trade‑offs: Neptune’s ACID guarantees vs. DynamoDB’s lower cost, and we opted for the former because consistency was paramount for accurate path calculations.  

> **Leadership Principles**  
> *Customer Obsession* – delivered faster, more relevant recommendations.  
> *Dive Deep* – profiled graph size, tuned heap operations, and benchmarked across AWS services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
