---
qid: ing_469ebaa048__star__local
question: 'Explain: Graph Algorithms (Advanced) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 334
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:56-05:00'
sources: []
---

**Situation:**  
During my senior project I was tasked with building a recommendation engine for an e‑commerce platform that had over 10 million users and 5 million products. The existing recommendation pipeline was slow; latency hit the 300 ms SLA during peak traffic, causing a noticeable drop in conversion rates.

**Task:**  
I needed to redesign the graph‑based similarity component so it could compute user–item neighbor scores in real time while staying within our infrastructure budget and keeping memory usage below 16 GB per node.

**Action:**  
I modeled users and items as a bipartite graph and implemented a two‑stage approach: first, I used Apache Flink to run a streaming PageRank‑style algorithm that updated user affinity scores on the fly. Second, I built an in‑memory, compressed adjacency list using the Elias‑Delta encoding library, allowing me to perform breadth‑first search up to depth 3 with sub‑10 ms query times. To handle cold starts, I integrated a fallback K‑means clustering step that projected new users into the nearest cluster centroid before graph traversal. I also added a cache layer with Redis to serve the top 50 neighbors per request.

**Result:**  
The new system cut latency from 300 ms to 45 ms on average and increased recommendation click‑through by 18%. I learned how to balance algorithmic depth with practical memory constraints, and that hybrid streaming–batch pipelines can deliver near real‑time graph analytics at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
