---
qid: ing_91dcd3b8cf__star__local
question: 'Explain: LinkedIn Data Structure Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 355
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:27-05:00'
sources: []
---

**Situation:**  
At my last internship I was tasked with building a real‑time recommendation engine for a professional networking platform similar to LinkedIn. The core requirement was to surface the top 10 “People You May Know” within 50 ms per user request, even when the user base exceeded 200 million connections.

**Task:**  
I had to design an in‑memory data structure that could efficiently compute mutual connections and weighted similarity scores on demand, while keeping memory usage under 32 GB on a single node.

**Action:**  
I chose a hybrid adjacency list + Bloom filter approach. Each user’s outgoing edges were stored as a compact sorted array of 64‑bit IDs (adjacency list), enabling binary search for intersection in O(log n). To avoid scanning the full neighbor set, I pre‑computed a 32‑byte Bloom filter per user that encoded the top 5k most frequent connection targets. During query time I first checked the Bloom filters to quickly discard non‑candidates, then performed a two‑pointer merge on the sorted arrays to count exact mutuals. For weighting, I applied an inverse–frequency factor and stored the result in a tiny LRU cache per session. The entire structure fit within 28 GB and answered queries at ~35 ms on average.

**Result:**  
The recommendation latency dropped from 120 ms to 35 ms, increasing click‑through by 18% over the baseline. I learned that careful choice of probabilistic filters combined with sorted adjacency lists can deliver both speed and low memory overhead in large‑scale social graphs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
