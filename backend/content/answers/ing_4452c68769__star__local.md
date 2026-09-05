---
qid: ing_4452c68769__star__local
question: 'Explain: Use Enough Virtual Nodes — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 320
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:37-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a distributed recommendation engine that needed to serve real‑time scores for millions of users. Our in‑memory cache cluster kept pre‑computed embeddings, but the load balancer kept routing requests to only a handful of nodes, causing hot spots and 30 % higher latency during peak hours.

**Task:**  
I had to redesign the key distribution so every node received a fair share of traffic without adding new hardware. The goal was to keep cache hit rates above 95 % while reducing per‑node CPU usage by at least 20 %.

**Action:**  
I introduced consistent hashing with virtual nodes. Each physical server hosted 200 virtual replicas, each mapped to a separate hash slot in the ring. I implemented this using Murmur3 and a lightweight Go library that allowed dynamic addition/removal of nodes without rehashing all keys. To keep memory overhead low, each virtual node stored only a small pointer map to its real node. We also added a “rebalance” trigger: when traffic on a node exceeded 1.5× the average, we promoted two adjacent virtual slots from underutilized neighbors.

**Result:**  
After deployment, cache hit rates jumped to 97 %, while CPU usage per node dropped by 23 %. The system handled a 4× spike in concurrent users with no latency degradation. I learned that careful tuning of virtual‑node count balances load evenly and keeps scaling costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
